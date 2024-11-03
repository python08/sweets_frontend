import { ReactElement } from "react";
import { ProductsType } from "@common/temp/temp";
import FallBack from "@components/ErrorFallBack/FallBack";
import Body from "@content/main-page/body/Body";

import { getAllProducts } from "src/apis/product/product";
import Explore from "../explore";

type IndexProps = {
  products: ProductsType[];
};

/* eslint-disable */
export default function Index(props: IndexProps) {
  const { products } = props;

  if (!products || !Array.isArray(products)) {
    return <FallBack />;
  }
  return <Body products={products} />;
}

Index.getLayout = function getLayout(page: ReactElement) {
  return <Explore>{page}</Explore>;
};

export async function getStaticProps() {
  const products = await getAllProducts();
  // const festivals = await getAllFestivals();

  return {
    props: {
      products: products.error ? [] : products,
    },
    revalidate: 50,
  };
}
