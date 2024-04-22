import { ProductsType } from "@common/temp/temp";
import Body from "@content/main-page/body/Body";

type MainProps = {
  products: ProductsType[];
  welcomeVideo: any;
  updates: any;
};

const Main = (props: MainProps) => {
  const { products, welcomeVideo, updates } = props;
  return (
    <Body products={products} welcomeVideo={welcomeVideo} updates={updates} />
  );
};

export default Main;
