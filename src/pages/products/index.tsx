import { ReactElement } from "react";
import { ProductsType } from "@common/temp/temp";
import FallBack from "@components/ErrorFallBack/FallBack";

import { getUpdates } from "src/apis/updates/updates";
import { getAllProducts } from "src/apis/product/product";
import Explore from "../explore";
import Main from "../explore/main/index";

type IndexProps = {
  products: ProductsType[];
  updates: any;
};

/* eslint-disable */
export default function Index(props: IndexProps) {
  const { products, updates } = props;

  if (!products || !Array.isArray(products)) {
    return <FallBack />;
  }
  return <Main products={products} updates={updates} />;
}

Index.getLayout = function getLayout(page: ReactElement) {
  return <Explore>{page}</Explore>;
};

export async function getStaticProps() {
  const products = await getAllProducts();
  const updates = await getUpdates();
  // const festivals = await getAllFestivals();

  return {
    props: {
      products: products.error ? [] : products,
      updates: updates.error ? [] : updates,
    },
    revalidate: 60,
  };
}
