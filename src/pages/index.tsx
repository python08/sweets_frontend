import { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Grid, Typography, Box, Button } from "@mui/material";
import { heroDescriptionStyle, style } from "@content/landing-page/style";
import { ProductsType } from "@common/temp/temp";
import GridViewProductCard from "@content/products/card/GridViewProductCard";

import { getAllProducts } from "src/apis/product/product";
import ModakImage from "../../public/assests/Modak.jpg";
import KaranjiImage from "../../public/assests/Karanji.jpg";

type LandingPageProps = {
  products: ProductsType[];
};

/* eslint-disable */
export default function Page(props: LandingPageProps) {
  const { products } = props;

  const theme = useTheme();
  const lgDown = useMediaQuery(theme.breakpoints.down("lg"));
  const lgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const xlUp = useMediaQuery(theme.breakpoints.up("xl"));

  // FP sort top selling products from all products
  const topSellingProduct = [
    "65902b312408fbea9cdb31f0",
    "659959de4ce59d1b67153a65",
    "65902c112408fbea9cdb31f4",
  ];

  const getMainImage = (smallSize: boolean) => (
    <Box sx={style.mainImageContainer(smallSize)}>
      <Image
        src={ModakImage.src}
        alt="Modak"
        fill
        style={{
          objectFit: "cover",
          zIndex: smallSize ? -5 : 1,
        }}
      />
    </Box>
  );

  const getSecondaryImage = () => (
    <Box sx={style.secondaryImageContainer}>
      <Image
        src={KaranjiImage.src}
        alt="Modak"
        fill
        style={{ objectFit: "cover", zIndex: -1 }}
      />
    </Box>
  );

  const getHeroDescription = (smallSize: boolean) => {
    const description =
      "Indulge in the rich flavours of authentic homemade Indian sweets and savoury delights at our online hub.";
    const extra =
      " Explore a culinary journey that celebrates tradition and taste.";
    return smallSize ? `${description}` : `${description}${extra}`;
  };

  return (
    <Grid container>
      {/* Left side: Title and description */}
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={6}
        xl={6}
        pr={lgDown ? "" : "1rem"}
      >
        <Box style={style.leftSection(lgDown)}>
          <Box textAlign="left">
            <Box position="relative" height="50vh">
              <Box p={lgDown ? "2rem 1rem 0rem" : "6rem"}>
                <Typography
                  variant="h1"
                  fontSize={lgDown ? "5rem" : "8rem"}
                  fontWeight={400}
                >
                  Swad
                </Typography>
                <Typography
                  variant="h1"
                  fontSize={lgDown ? "5rem" : "8rem"}
                  fontWeight={400}
                  lineHeight={0.8}
                >
                  Gharana
                </Typography>
              </Box>
            </Box>
            <Box sx={style.heroDescriptionContainer(lgDown)}>
              <Typography
                variant="body1"
                gutterBottom
                fontSize="2rem"
                fontWeight={200}
                sx={
                  lgDown
                    ? { padding: "0rem 1rem 1rem 1rem" }
                    : heroDescriptionStyle(xlUp)
                }
              >
                {getHeroDescription(lgDown)}
              </Typography>
              {!lgDown && getSecondaryImage()}
            </Box>
            {lgDown && getMainImage(true)}
          </Box>
        </Box>
      </Grid>

      {/* Right side: Circular image input */}
      {!lgDown && (
        <Grid item xs={0} sm={0} md={0} lg={6} xl={6} pl="1rem">
          {getMainImage(false)}
        </Grid>
      )}

      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} height="100vh">
        <Grid container>
          <Grid item xs={12} textAlign="center" mt="3rem">
            <Typography variant="h2" fontSize="3rem" fontWeight={600} p="1rem">
              TOP SELLING
            </Typography>
          </Grid>
          <Grid container spacing={3} mt="2rem">
            {products
              .filter((product) => topSellingProduct.indexOf(product._id) >= 0)
              .map((productDetails) => {
                const { _id, name, description, link } = productDetails;
                return (
                  // eslint-disable
                  <Grid item xs={12} sm={12} md={12} lg={4} xl={4} key={_id}>
                    <GridViewProductCard
                      // eslint-disable
                      productId={_id}
                      cardMediaHeight="260"
                      img={link}
                      title={name}
                      description={description}
                      sx={{
                        borderRadius: "10px",
                        margin: "2rem",
                      }}
                    />
                  </Grid>
                );
              })}
          </Grid>
          <Grid item xs={12} textAlign="center" p="2rem">
            <Link href="/products">
              <Button variant="outlined" size="large" sx={style.viewProducts}>
                VIEW PRODUCTS
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export async function getStaticProps() {
  const products = await getAllProducts();

  return {
    props: {
      products: products.error ? [] : products,
    },
  };
}
