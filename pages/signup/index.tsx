import { type ReactElement } from "react";
import Image from "next/image";
import Head from "next/head";

import Layout from "@/components/layout";
import CorporateSignupForm from "@/components/pages/signup/corporate-signup-form";

import { Button } from "@mantine/core";
import NextLink from "next/link";

export default function CorporateSignupPage() {
  return (
    <>
      <Head>
        <title>Corporate Account Sign Up - Carbon Sarhat</title>
      </Head>
      <section className={"grid gap-10 sm:grid-cols-2"}>
        <div className={"order-2 space-y-5 sm:order-1"}>
          <div>
            <h1 className={"text-3xl font-bold"}>Registration</h1>
            <h2 className={"text-xl"}>Create a Corporate Account</h2>
          </div>

          <CorporateSignupForm />
        </div>

        <div className={"order-1 mx-auto flex flex-col gap-8"}>
          <Image
            src={"/img/logo_black.png"}
            alt={"Carbon Sarhat logo"}
            width={300}
            height={173}
            priority={true}
            quality={100}
            className={"mx-auto"}
          />

          <div className={"mx-auto"}>
            <Button
              component={NextLink}
              href="/signup/retail"
              size={"md"}
              radius="sm"
              color="dark"
            >
              Create Retail Account
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

CorporateSignupPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
