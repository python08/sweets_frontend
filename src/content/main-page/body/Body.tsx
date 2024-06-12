import GridViewProductList from "@content/products/view/grid/ProductList";
import FlexViewProductList from "@content/products/view/flex/ProductList";
import Updates from "@content/updates/Updates";
import { Box, Grid } from "@mui/material";
import { Categories } from "@common/temp/temp";
import WelcomeVideo from "@content/display-video/DisplayVideo";
import { Headline } from "@components/Headline/Headline";
import { Section } from "@content/products/constant/main";
import { getProductByCategory } from "@content/products/utils/utils";

import { style } from "./style";
import { BodyProps } from "./model";

const Body = (props: BodyProps) => {
  const { products, updates } = props;

  if (!products) return null;

  const ladoos = getProductByCategory(products, Categories.Ladoo);

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <WelcomeVideo />
        </Grid>
      </Grid>
      <Box sx={style.main}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Updates updates={updates} />
          </Grid>
          <Grid item xs={12} pb="3rem">
            <Box sx={{ textAlign: "center" }} pb="1rem">
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
          <Grid item xs={12} pb="2rem">
            <GridViewProductList products={products} />
          </Grid>
          {/* 
          upcoming changes
          <Grid item xs={12}>
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
