import { type ReactElement } from "react";
import Image from "next/image";
import Head from "next/head";

import Layout from "@/components/layout";
import LoginForm from "@/components/pages/login/login-form";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Log In - Carbon Sarhat</title>
      </Head>
      <section className={"grid gap-10 sm:grid-cols-2"}>
        <div className={"order-2 space-y-5 sm:order-1"}>
          <div>
            <h1 className={"text-3xl font-bold"}>Log In</h1>
            <h2 className={"text-xl"}>Log in to your account</h2>
          </div>

          <LoginForm />
        </div>

        <div className={"order-1 mx-auto space-y-10 justify-self-center"}>
          <Image
            src={"/img/logo_black.png"}
            alt={"Carbon Sarhat logo"}
            width={300}
            height={173}
            priority={true}
            quality={100}
            className={"mx-auto"}
          />
        </div>
      </section>
    </>
  );
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
