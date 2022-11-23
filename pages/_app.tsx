import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import NavBar from "../components/NavBar";

const theme = createTheme({
  type: "light",
  theme: {
    colors: {
      primary: "#5B9BD5",
      link: "#5B9BD5",
    },
    space: {},
    fonts: {
      primary: "Inter",
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={theme}>
      <NavBar />
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
