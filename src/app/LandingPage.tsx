"use client";

import Image from "next/image";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Grid, Typography, Box, Button } from "@mui/material";
import Loader from "@components/Backdrop/Loader";
import { useProducts } from "@common/hooks/useProducts";
import { style } from "@content/landing-page/style";
import GridViewProductCard from "@content/products/card/GridViewProductCard";
import { color } from "@global/colors";
import Hero from "@content/landing-page/Hero";
import HeroDescription from "@content/landing-page/HeroDescription";
import FallBack from "@components/ErrorFallBack/FallBack";
import { isEmpty } from "lodash";
import ModakImage from "../../public/assests/Modak.jpg";

const LandingPage = () => {
  const theme = useTheme();
  const lgDown = useMediaQuery(theme.breakpoints.down("lg"));
  const xlUp = useMediaQuery(theme.breakpoints.up("xl"));
  const { products, loading, hasError } = useProducts();

  if (loading) {
    return <Loader open={loading} />;
  }

  const safeProducts = hasError ? [] : products;

  if (isEmpty(safeProducts)) {
    return <FallBack />;
  }

  const topSellingProduct = [
    "666867fa4f239bc9b7b3cd58",
    "66686cbe4f239bc9b7b3cd5b",
    "6665debd695aea905289f3d8",
  ];

  return (
    <Grid container>
      <Grid
        size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 6 }}
        pr={lgDown ? "0.5rem" : "1rem"}
      >
        <Box style={style.leftSection(lgDown)}>
          <Box textAlign="left">
            <Hero lgDown={lgDown} />
            <HeroDescription lgDown={lgDown} xlUp={xlUp} />
            {lgDown && (
              <Box sx={style.mainImageContainer(true)}>
                <Image
                  src={ModakImage.src}
                  alt="Modak"
                  fill
                  style={{ objectFit: "cover", zIndex: -5 }}
                />
              </Box>
            )}
          </Box>
        </Box>
      </Grid>

      {!lgDown && (
        <Grid size={{ xs: 0, sm: 0, md: 0, lg: 6, xl: 6 }} pl="1rem">
          <Box sx={style.mainImageContainer(false)}>
            <Image
              src={ModakImage.src}
              alt="Modak"
              fill
              style={{ objectFit: "cover", zIndex: 1 }}
            />
          </Box>
        </Grid>
      )}

      <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }} height="100vh">
        <Grid container>
          <Grid size={{ xs: 12 }} textAlign="center" mt="3rem">
            <Typography
              variant="h2"
              fontSize="3rem"
              fontWeight={600}
              p="1rem"
              color={color.main.primary}
            >
              TOP SELLING
            </Typography>
          </Grid>
          <Grid container spacing={3} mt="2rem">
            {safeProducts
              // eslint-disable-next-line no-underscore-dangle
              .filter((product) => topSellingProduct.indexOf(product._id) >= 0)
              .map((productDetails) => {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                const { _id, name, description, link } = productDetails;
                return (
                  <Grid
                    size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}
                    key={_id}
                  >
                    <GridViewProductCard
                      productId={_id}
                      img={link}
                      imgHeight="13rem"
                      contentHeight="6rem"
                      name={name}
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
          <Grid size={{ xs: 12 }} textAlign="center" p="2rem">
            <Link href="/products">
              <Button variant="outlined" size="large">
                VIEW PRODUCTS
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
