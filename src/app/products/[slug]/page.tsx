import { ProductsType } from "@common/temp/temp";
import ProductView from "@content/products/details-view/ProductView";
import { extractProductId } from "@common/utils";
import { productDetailsRoute } from "@common/utils/route";
import { getAllProducts, getProductDetails } from "src/apis/product/product";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { constructMetadata } from "src/utils/constructMetadata";

// Replaces `revalidate: 60` from getStaticProps
export const revalidate = 60;

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// set metadata
export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const productId = extractProductId(slug);

  // Fetch product data on the server
  const productDetails = await getProductDetails(productId as string);

  return constructMetadata({
    name: productDetails.name,
    description: productDetails.description,
    image: productDetails.link,
    url: `${process.env.NEXT_PUBLIC_DOMAIN}/products/${slug}`,
  });
}

// 1. getStaticPaths becomes generateStaticParams
export async function generateStaticParams() {
  const products = await getAllProducts();

  if (products.error || !Array.isArray(products)) {
    return [];
  }

  return products.map((product: ProductsType) => ({
    // eslint-disable-next-line no-underscore-dangle
    slug: productDetailsRoute(product.name, product._id, 2),
  }));
}

// 2. Component takes the place of both the component and getStaticProps
export default async function ProductPage({ params }: ProductPageProps) {
  // In modern App Router architectures, params must be awaited
  const { slug } = await params;

  if (!slug) {
    return notFound();
  }

  const productId = extractProductId(slug);
  if (!productId || Array.isArray(productId)) {
    return notFound();
  }

  // Fetching occurs directly inside the server component
  const productDetails = await getProductDetails(productId);
  const products = await getAllProducts();

  const details = productDetails.error ? {} : productDetails;
  const productList = products.error ? [] : products;

  if (Object.keys(details).length === 0) {
    return notFound();
  }

  return <ProductView products={productList} productDetails={details} />;
}
