import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import customTheme from "../styles/theme";
import { Provider } from "react-redux";
import store from "../globalRedux/store";
import MainLayout from "../components/Layout/MainLayout";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(
      <ChakraProvider theme={customTheme}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ChakraProvider>
    );
  }
  return (
    <ChakraProvider theme={customTheme}>
      <Provider store={store}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
