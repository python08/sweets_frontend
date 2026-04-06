"use client";

import { Box } from "@mui/material";
import Footer from "@content/main-page/footer/Footer";
import Header from "@content/main-page/header/Header";

import { style } from "../main-page/body/style";

type ExplorePropType = {
  children: React.ReactNode;
};

const Explore = ({ children }: ExplorePropType) => (
  <Box sx={style.background}>
    <Header />
    <main style={style.mainContent}>{children}</main>
    <Footer />
  </Box>
);

export default Explore;
