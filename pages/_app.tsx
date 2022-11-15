import type { AppProps } from "next/app";

import { Box, ChakraProvider } from "@chakra-ui/react";
import TopBar from "../src/components/TopBar/TopBar";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <TopBar />
      <Box maxWidth="container.xl" margin="auto">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
