import { Card } from "@tremor/react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { Notify } from "notiflix";
import setCookies from "./setCookies";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://carbon-sarhat-backend-flask.vercel.app/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );

      if (!response.ok) {
        Notify.failure("Failed to submit form");
        throw new Error("Failed to submit form");
      }

      const { status, access_token, refresh_token } = await response.json();
      if (!status) {
        Notify.failure("Email or Password is incorrect");
        throw new Error("Failed to submit form");
      }

      await setCookies(access_token, refresh_token);

      console.log("Form submitted successfully");

      router.push("/dashboard");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="col-start-1 col-end-3 flex items-center justify-center gap-3">
          <button type="submit">Submit</button>
        </div>
      </form>
    </Card>
  );
}
