import Head from "next/head";

import SignUp from "@/components/pages/authorization/signup";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <section className={"mx-32 my-10 items-center space-y-10 text-center"}>
      <Head>
        <title>Sign Up</title>
      </Head>
      <SignUp />
      <Link href={"/authorization/signin"} className="gap-3">
        Already have an account?
      </Link>
    </section>
  );
}
