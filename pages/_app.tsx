import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import NavBar from "../components/NavBar";
import Head from "next/head";

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
    <>
      <Head>
        <title>Blake Heyman - Mobile App Developer</title>
        <meta
          property="og:title"
          content="Blake Heyman - Mobile App Developer"
          key="title"
        />
        <meta name="keywords" content="iOS, Android, mobile apps, web" />
        <meta name="author" content="Blake Heyman" />
      </Head>
      <NextUIProvider theme={theme}>
        <NavBar />
        <Component {...pageProps} />
      </NextUIProvider>
    </>
  );
}
