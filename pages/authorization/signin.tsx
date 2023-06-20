import Head from "next/head";

import SignIn from "@/components/pages/authorization/signin";
import Link from "next/link";

export default function SignInPage() {
  return (
    <section className={"mx-52 my-10 items-center space-y-10 text-center"}>
      <Head>
        <title>Sign In</title>
      </Head>
      <SignIn />
      <Link href={"/authorization/signup"}>Register</Link>
    </section>
  );
}
