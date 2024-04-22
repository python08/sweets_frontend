import { Box, Grid } from "@mui/material";
import { ProductsType } from "@common/temp/temp";
import { displayFlexCenter } from "@global/global.style";

import GridViewProductCard from "../../card/GridViewProductCard";
import { productList } from "./style";
import { Headline } from "../../../../common/components/Headline/Headline";

type ProductListType = {
  products: ProductsType[];
  height?: string;
};

const GridViewProductList = ({ products, height }: ProductListType) => (
  <>
    <Box sx={{ textAlign: "center" }} pb="1rem">
      <Headline headLine="Elevate your taste buds with our curated selection of our top-selling sweets and gourmet delights." />
    </Box>
    <Box sx={displayFlexCenter}>
      <Grid container spacing={2}>
        {products.map((product: ProductsType) => (
          <Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={product.name}>
            <GridViewProductCard
              title={product.name}
              description={product.description}
              img={product.link}
              /* eslint-disable */
              productId={product._id}
              cardMediaHeight={height || "200"}
              sx={productList}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  </>
);

export default GridViewProductList;
