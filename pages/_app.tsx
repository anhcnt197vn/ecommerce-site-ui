import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../src/store";
import "../styles/globals.css";
import "react-slideshow-image/dist/styles.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
