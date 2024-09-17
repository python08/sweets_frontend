import { Box, Grid } from "@mui/material";
import { ProductsType } from "@common/temp/temp";
import { displayFlexCenter } from "@global/global.style";

import GridViewProductCard from "../../card/GridViewProductCard";
import { productList } from "./style";
import { Headline } from "../../../../common/components/Headline/Headline";

type ProductListType = {
  products: ProductsType[];
};

const GridViewProductList = ({ products }: ProductListType) => (
  <>
    <Box sx={{ textAlign: "center" }} pb="1rem">
      <Headline headLine="Elevate your taste buds with our curated selection of our top-selling sweets and gourmet delights." />
    </Box>
    <Box sx={displayFlexCenter}>
      <Grid container spacing={2}>
        {products.map((product: ProductsType) => (
          <Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={product.name}>
            <GridViewProductCard
              name={product.name}
              description={product.description}
              img={product.link}
              imgHeight="13rem"
              contentHeight="6rem"
              /* eslint-disable */
              productId={product._id}
              sx={productList}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  </>
);

export default GridViewProductList;
