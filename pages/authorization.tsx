import Head from "next/head";

import SignUp from "@/components/pages/authorization/signup";
import SignIn from "@/components/pages/authorization/signin";
import { useState } from "react";

export default function AuthorizationPage() {
  const [selectedMethod, setSelectedMethod] = useState("signin");

  const handleMethodChange = (method: string) => {
    setSelectedMethod(method);
  };

  return (
    <section className={"space-y-10"}>
      <Head>
        <title>Sign In</title>
      </Head>
      {selectedMethod === "signin" && (
        <>
          <SignIn />
          <button onClick={() => handleMethodChange("signup")}>Register</button>
        </>
      )}
      {selectedMethod === "signup" && (
        <>
          <SignUp />
          <button onClick={() => handleMethodChange("signin")}>Already have an account</button>
      </>
      )}
      
    </section>
  );
}
