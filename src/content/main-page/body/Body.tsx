"use client";

import GridViewProductList from "@content/products/view/grid/ProductList";
import FlexViewProductList from "@content/products/view/flex/ProductList";
import { Box, Grid } from "@mui/material";
import { Categories } from "@common/temp/temp";
import { Headline } from "@components/Headline/Headline";
import { Section } from "@content/products/constant/main";
import { getProductByCategory } from "@content/products/utils/utils";
import MainCarousel from "@content/carousel/MainCarousel";
import { useProducts } from "@common/hooks/useProducts";
import Loader from "@components/Backdrop/Loader";
import { isEmpty } from "lodash";
import FallBack from "@components/ErrorFallBack/FallBack";

import { style } from "./style";

const Body = () => {
  const { products, loading, hasError } = useProducts();

  if (loading) {
    return <Loader open={loading} />;
  }

  const safeProducts = hasError ? [] : products;

  if (isEmpty(safeProducts)) {
    return <FallBack />;
  }

  const ladoos = getProductByCategory(safeProducts, Categories.Ladoo);

  return (
    <>
      <Grid container>
        <Grid size={{ xs: 12 }}>
          <MainCarousel />
        </Grid>
      </Grid>
      <Box sx={style.main}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} pb="3rem">
            <Box sx={{ textAlign: "center" }} pb="1rem" pt="3rem">
              <Headline
                headLine="Indulge in the Irresistible Charm of Traditional Indian Ladoo
          Delights!"
              />
            </Box>
            <Box p="0.5rem">
              <FlexViewProductList
                products={ladoos}
                productCardHeight="15rem"
                section={Section.main}
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12 }} pb="2rem">
            <GridViewProductList products={safeProducts} />
          </Grid>
          {/* 
          upcoming changes
          <Grid size={{ xs: 12 }}>
            <ProductCategories
              festivals={festivals}
              handleFilter={handleFilter}
            />
          </Grid> */}
        </Grid>
      </Box>
    </>
  );
};

export default Body;
