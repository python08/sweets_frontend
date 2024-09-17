import { ReactElement } from "react";
import { useRouter } from "next/router";
import { isEmpty } from "lodash";
import { ProductsType } from "@common/temp/temp";
import ProductView from "@content/products/details-view/ProductView";
import { extractProductId } from "@common/utils";
import { productDetailsRoute } from "@common/utils/route";

import { getAllProducts, getProductDetails } from "src/apis/product/product";
import Explore from "../explore";

type ProductViewProps = {
  products: ProductsType[];
  productDetails: ProductsType;
};

const Product = (props: ProductViewProps) => {
  const router = useRouter();

  const { slug } = router.query;
  let productId = null;
  if (typeof slug === "string") {
    productId = extractProductId(slug);
  }

  const { products, productDetails } = props;

  // url for metadata
  const url = `${process.env.NEXT_PUBLIC_DOMAIN}${router.asPath}`;

  if (isEmpty(productDetails)) return null;
  return (
    productId &&
    !Array.isArray(productId) && (
      <ProductView
        products={products}
        productDetails={productDetails}
        url={url}
      />
    )
  );
};

export default Product;

Product.getLayout = function getLayout(page: ReactElement) {
  return <Explore>{page}</Explore>;
};

export const getStaticPaths = async () => {
  // FP
  // create api to fetch ids only
  const products = await getAllProducts();
  const paths = products.map((product: ProductsType) => ({
    params: {
      /* eslint no-underscore-dangle: 0 */
      slug: productDetailsRoute(product.name, product._id, 2),
    },
  }));
  return {
    paths,
    fallback: true, // false or "blocking"
  };
};

export async function getStaticProps(context: any) {
  const { params } = context;
  const { slug } = params;
  const productId = extractProductId(slug);
  const productDetails = await getProductDetails(productId);
  const products = await getAllProducts();
  return {
    props: {
      products: products.error ? [] : products,
      productDetails: productDetails.error ? {} : productDetails,
    },
    revalidate: 60,
  };
}
