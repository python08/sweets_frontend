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
