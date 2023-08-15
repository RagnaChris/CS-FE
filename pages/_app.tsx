import "@/styles/globals.css";

import type { ReactElement, ReactNode } from "react";
import Head from "next/head";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

import { SessionProvider } from "next-auth/react";

import RouteProgressBar from "@/components/route-progress-bar";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <title>Carbon Sarhat - Powering Global Investments</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <RouteProgressBar />
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    </>
  );
}
