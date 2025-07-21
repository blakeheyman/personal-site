import "../styles/globals.css";
import type { AppProps } from "next/app";
import { HeroUIProvider } from "@heroui/react";
import NavBar from "../components/NavBar";
import Head from "next/head";

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
      <HeroUIProvider>
        <NavBar />
        <Component {...pageProps} />
      </HeroUIProvider>
    </>
  );
}
