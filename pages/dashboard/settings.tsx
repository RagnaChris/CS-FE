import { type ReactElement } from "react";
import Head from "next/head";

import Layout from "@/components/pages/dashboard/layout";

export default function SettingsPage() {
  return (
    <>
      <Head>
        <title>Settings - Carbon Sarhat</title>
      </Head>
      <h1>Settings</h1>
    </>
  );
}

SettingsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
