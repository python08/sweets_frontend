import { Box, CardMedia, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ProductsType, Categories } from "@common/temp/temp";
import ProductDetails from "../details/ProductDetails";
import { getProductByCategory } from "../utils/utils";

type ProductViewProps = {
  products: ProductsType[];
  productDetails: ProductsType;
};

const ProductView = (props: ProductViewProps) => {
  const { products, productDetails } = props;
  const { title, brief, link, price } = productDetails;
  const ladoos = getProductByCategory(products, Categories.Ladoo).filter(
    /* eslint-disable */
    (product) => product._id !== productDetails._id
  );
  const theme = useTheme();
  const lgDown = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Grid container p="1rem">
      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
        <Box
          p={lgDown ? "" : "1rem"}
          sx={{ boxSizing: "border-box", height: lgDown ? "30rem" : "40rem" }}
        >
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
