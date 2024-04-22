import { ReactElement } from "react";
import { useRouter } from "next/router";
import { isEmpty } from "lodash";
import { ProductsType } from "@common/temp/temp";
import ProductView from "@content/products/details-view/ProductView";

import { getAllProducts, getProductDetails } from "src/apis/product/product";
import Explore from "../..";

type ProductViewProps = {
  products: ProductsType[];
  productDetails: any;
};

const Product = (props: ProductViewProps) => {
  const router = useRouter();
  const { productId } = router.query;
  const { products, productDetails } = props;
  if (isEmpty(productDetails)) return null;
  return (
    productId &&
    !Array.isArray(productId) && (
      <ProductView products={products} productDetails={productDetails} />
    )
  );
};

export default Product;

Product.getLayout = function getLayout(page: ReactElement) {
  return <Explore>{page}</Explore>;
};

export const getStaticPaths = async () => {
  // FP
  // generate static pages during build
  // create api to fetch ids only
  const products = await getAllProducts();
  const paths = products.map((product: ProductsType) => ({
    params: {
      /* eslint no-underscore-dangle: 0 */
      productId: product._id,
    },
  }));
  return {
    paths,
    fallback: true, // false or "blocking"
  };
};

export async function getStaticProps(context: any) {
  const { params } = context;
  const { productId } = params;
  const productDetails = await getProductDetails(productId);
  const products = await getAllProducts();
  return {
    props: {
      products: products.error ? [] : products,
      productDetails: productDetails.error ? {} : productDetails,
    },
  };
}
