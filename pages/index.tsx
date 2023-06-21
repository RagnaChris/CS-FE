import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div
      className={
        "min-h-screen min-w-full bg-[url('/img/Landing_page_background.png')] bg-cover pl-20"
      }
    >
      <div>
        <Image
          src={"/img/logo.png"}
          alt={"Carbon Sarhat logo"}
          width={256}
          height={147}
          priority={true}
        />
      </div>

      <div className="relative my-32 grid grid-cols-2 items-end">
        <div className="relative col-span-1">
          <input
            className="mb-2 border-b-2 bg-transparent text-white"
            id="email"
            placeholder="Enter your Email"
          />
          <br />
          <label htmlFor="email">Hear from us</label>
        </div>
        <div className="col-span-1">
          <h2 className="text-4xl font-thin">Carbon Sarhat,</h2>
          <h1 className="text-3xl">POWERING GLOBAL SUSTAINABLE INVESTMENT</h1>
          <div className="mt-5">
            <Link
              href={"/authorization/signin"}
              className="mr-10 w-48 rounded-full border bg-transparent px-10"
            >
              Log In
            </Link>
            <Link
              href={"/authorization/signup"}
              className="w-48 rounded-full border bg-white bg-clip-text px-10"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <div className="items-end">
        <Link href={"/"} className="pr-3">
          Privacy Policy
        </Link>
        <Link href={"/"}>Terms of Use</Link>
        <p>contact@carbonsarhat.com</p>
      </div>
    </div>
  );
}
