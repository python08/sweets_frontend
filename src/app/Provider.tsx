"use client";

import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import globalTheme from "../theme"; // Adjust path

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

const Providers = ({ children }: { children: React.ReactNode }) => {
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
    const customTheme = createTheme({
      ...globalTheme,
      palette: { mode },
    });
    return { ...globalTheme, ...customTheme };
  }, [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Providers;