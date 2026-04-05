"use client";

import { useProducts } from "@common/hooks/useProducts";
import Loader from "@components/Backdrop/Loader";
import FallBack from "@components/ErrorFallBack/FallBack";
import Body from "@content/main-page/body/Body";
import { isEmpty } from "lodash";

/* eslint-disable */
const Page = () =>  {
    const { products, loading, hasError } = useProducts();
  
    if (loading) {
      return <Loader open={loading}/>;
    }
  
    const safeProducts = hasError ? [] : products;
  
    if (isEmpty(safeProducts)) {
      return <FallBack />;
    }
  return <Body products={products} />;
}

export default Page