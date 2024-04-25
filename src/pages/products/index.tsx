import { ReactElement } from "react";
import { ProductsType } from "@common/temp/temp";
import FallBack from "@components/ErrorFallBack/FallBack";

import { getWelcomeVideo } from "src/apis/welcomeVideo/welcomeVideo";
import { getUpdates } from "src/apis/updates/updates";
import { getAllProducts } from "src/apis/product/product";
import Explore from "../explore";
import Main from "../explore/main/index";

type IndexProps = {
  products: ProductsType[];
  welcomeVideo: any;
  updates: any;
};

/* eslint-disable */
export default function Index(props: IndexProps) {
  const { products, welcomeVideo, updates } = props;

  if (!products || !Array.isArray(products)) {
    return <FallBack />;
  }
  return (
    <Main products={products} welcomeVideo={welcomeVideo} updates={updates} />
  );
}

Index.getLayout = function getLayout(page: ReactElement) {
  return <Explore>{page}</Explore>;
};

export async function getStaticProps() {
  const products = await getAllProducts();
  const welcomeVideo = await getWelcomeVideo();
  const updates = await getUpdates();
  // const festivals = await getAllFestivals();

  return {
    props: {
      products: products.error ? [] : products,
      welcomeVideo: welcomeVideo.error ? null : welcomeVideo,
      updates: updates.error ? [] : updates,
    },
    revalidate: 60,
  };
}
