import * as React from "react";
import { ReactElement } from "react";
import Head from "next/head";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import globalTheme from "../theme";
import createEmotionCache from "../createEmotionCache";
import "../common/components/progress-circle/ProgressCircle.module.css";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
};

/* eslint-disable */
export default function MyApp(props: AppPropsWithLayout) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(() => {
    const theme = createTheme({
      ...globalTheme,
      palette: {
        mode,
      },
    });
    return { ...globalTheme, ...theme };
  }, [mode, globalTheme]);

  // for login
  // if (Component.getLayout) {
  //   return <>{Component.getLayout(<Component {...pageProps} />)}</>;
  // }
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Swadgharana - Handmade Sweets</title>
        <meta
          name="description"
          content="Welcome to our online sweet shop offering a delightful collection of authentic, homemade and healthy Indian sweets. Indulge in traditional and gourmet Indian sweets, including handcrafted mithai, artisanal confections, and sweet treats. Explore our wide range of exquisite desserts, perfect for festive celebrations or gifting options. Order now and experience the rich flavors of India's finest sweet delicacies."
        />
        <meta
          name="keywords"
          content="Indian sweets, homemade sweets, online sweet shop, authentic Indian desserts, traditional Indian sweets, gourmet Indian sweets, artisanal sweets, Indian mithai, handcrafted Indian desserts, sweet treats"
        />
        <meta property="og:url" content="https://www.swadgharana.in" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Swadgharana - Handmade Sweets" />
        <meta
          property="og:description"
          content="Welcome to our online sweet shop offering a delightful collection of authentic, homemade and healthy Indian sweets. Indulge in traditional and gourmet Indian sweets, including handcrafted mithai, artisanal confections, and sweet treats. Explore our wide range of exquisite desserts, perfect for festive celebrations or gifting options. Order now and experience the rich flavors of India's finest sweet delicacies."
        />
        <meta
          property="og:image"
          content="https://sweettoothbucket.s3.ap-south-1.amazonaws.com/assest/logo.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="swadgharana.in" />
        <meta property="twitter:url" content="https://www.swadgharana.in" />
        <meta name="twitter:title" content="Swadgharana - Handmade Sweets" />
        <meta
          name="twitter:description"
          content="Welcome to our online sweet shop offering a delightful collection of authentic, homemade and healthy Indian sweets. Indulge in traditional and gourmet Indian sweets, including handcrafted mithai, artisanal confections, and sweet treats. Explore our wide range of exquisite desserts, perfect for festive celebrations or gifting options. Order now and experience the rich flavors of India's finest sweet delicacies."
        />
        <link rel="shortcut icon" type="image/ico" href="" />
      </Head>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline enableColorScheme />
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </CacheProvider>
  );
}
