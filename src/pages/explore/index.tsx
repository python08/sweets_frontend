import { useState, createContext } from "react";
import { Box } from "@mui/material";
import Footer from "@content/main-page/footer/Footer";
import Header, { Anchor } from "@content/main-page/header/Header";
import HeadMetaTag from "@components/meta-tag/HeadMetaTag";

import { style } from "../../content/main-page/body/style";

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

type ExplorePropType = {
  children: React.ReactNode;
};

const Explore = ({ children }: ExplorePropType) => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  // #find -> for SSR make this value false for first render
  // if (!matches) return <WorkInProgress />; TNCCC24000303982

  // metadata
  const metaData = {
    title: "Indian Sweets - Swad Gharana",
    description:
      "Our homemade sweets shop is ready to deliver, order now! Indulge in the Irresistible Charm of Traditional Indian Ladoo Delights!",
    image:
      "https://sweettoothbucket.s3.ap-south-1.amazonaws.com/assest/logo.jpg",
    url: `${process.env.NEXT_PUBLIC_DOMAIN}/products`,
  };

  return (
    <>
      <HeadMetaTag
        name={metaData.title}
        description={metaData.description}
        image={metaData.image}
        url={metaData.url}
      />
      <Box sx={style.background}>
        <Header state={state} toggleDrawer={toggleDrawer} />
        <main style={style.mainContent}>{children}</main>
        <Footer />
      </Box>
    </>
  );
};

export default Explore;
