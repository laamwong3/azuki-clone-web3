import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import darkTheme from "../configs/darkTheme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
