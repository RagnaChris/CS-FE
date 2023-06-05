import "@/styles/globals.css";

import { useState } from "react";

import Head from "next/head";
import type { AppProps } from "next/app";

import {
  MantineProvider,
  ColorSchemeProvider,
  type ColorScheme,
  createEmotionCache,
} from "@mantine/core";

import Layout from "@/components/layout";

import { Inter, Roboto } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

import { emotionCache } from "@/src/lib/emotionCache";

export default function App({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <>
      <Head>
        <title>Carbon Sarhat</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          emotionCache={emotionCache}
          theme={{
            colorScheme,
            fontFamily: roboto.style.fontFamily,
            headings: { fontFamily: roboto.style.fontFamily },
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
