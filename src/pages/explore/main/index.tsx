import { ProductsType } from "@common/temp/temp";
import Body from "@content/main-page/body/Body";

type MainProps = {
  products: ProductsType[];
  updates: any;
};

const Main = (props: MainProps) => {
  const { products, updates } = props;
  return <Body products={products} updates={updates} />;
};

export default Main;
