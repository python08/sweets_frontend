import { Box, CardMedia, Grid } from "@mui/material";
import { ProductsType, Categories } from "@common/temp/temp";
import ProductDetails from "../details/ProductDetails";
import { getProductByCategory } from "../utils/utils";

type ProductViewProps = {
  products: ProductsType[];
  productDetails: any;
};

const ProductView = (props: ProductViewProps) => {
  const { products, productDetails } = props;
  const { title, brief, link, price } = productDetails;
  const ladoos = getProductByCategory(products, Categories.Ladoo);
  const padding = "1rem";

  return (
    <Grid container p={padding}>
      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
        <Box p={padding} sx={{ boxSizing: "border-box", height: "40rem" }}>
          <CardMedia
            sx={{ borderRadius: "10px", height: "100%" }}
            component="img"
            image={link}
            alt={title}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
        <ProductDetails
          title={title}
          brief={brief}
          productPrice={price}
          products={ladoos}
        />
      </Grid>
    </Grid>
  );
};

export default ProductView;
