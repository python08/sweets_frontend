import { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Grid, Typography, Box, Button } from "@mui/material";
import { style } from "@content/landing-page/style";
import { ProductsType } from "@common/temp/temp";
import GridViewProductCard from "@content/products/card/GridViewProductCard";
import { color } from "@global/colors";
import Hero from "@content/landing-page/Hero";
import HeroDescription from "@content/landing-page/HeroDescription";
import FallBack from "@components/ErrorFallBack/FallBack";
import { isEmpty } from "lodash";

import { getAllProducts } from "src/apis/product/product";
import ModakImage from "../../public/assests/Modak.jpg";

type LandingPageProps = {
  products: ProductsType[];
};

/* eslint-disable */
export default function Page(props: LandingPageProps) {
  const { products } = props;
  console.log("products: ", products.length);
  // FP temp changed for maintenance
  if (isEmpty(products)) {
    return <FallBack />;
  }

  const theme = useTheme();
  const lgDown = useMediaQuery(theme.breakpoints.down("lg"));
  const xlUp = useMediaQuery(theme.breakpoints.up("xl"));

  // FP sort top selling products from all products
  const topSellingProduct = [
    "666867fa4f239bc9b7b3cd58",
    "66686cbe4f239bc9b7b3cd5b",
    "6665debd695aea905289f3d8",
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
        pr={lgDown ? "0.5rem" : "1rem"}
      >
        <Box style={style.leftSection(lgDown)}>
          <Box textAlign="left">
            <Hero lgDown={lgDown} />
            <HeroDescription lgDown={lgDown} xlUp={xlUp} />
            {lgDown && getMainImage(true)}
          </Box>
        </Box>
      </Grid>

      {/* Right side */}
      {!lgDown && (
        <Grid item xs={0} sm={0} md={0} lg={6} xl={6} pl="1rem">
          {getMainImage(false)}
        </Grid>
      )}

      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} height="100vh">
        <Grid container>
          <Grid item xs={12} textAlign="center" mt="3rem">
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
                      img={link}
                      imgHeight="13rem"
                      contentHeight="6rem"
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
              <Button variant="outlined" size="large">
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
    revalidate: 60,
  };
}
