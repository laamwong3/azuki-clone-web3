import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import darkTheme from "../configs/darkTheme";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "react-alice-carousel/lib/alice-carousel.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThirdwebProvider
        desiredChainId={ChainId.Mumbai}
        chainRpc={{
          [ChainId.Mumbai]: process.env.NEXT_PUBLIC_RPC_NODE,
        }}
      >
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </ThirdwebProvider>
    </>
  );
}

export default MyApp;
