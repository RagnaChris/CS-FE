import NextLink from "next/link";

export default function Footer() {
  return (
    <footer className={"mt-auto bg-[#435482] py-8 text-gray-100"}>
      <h2 className="sr-only">Footer</h2>
      <div
        className={
          "container mx-auto grid justify-center gap-10 px-5 sm:grid-cols-2"
        }
      >
        <div className={"sm:justify-self-center"}>
          <h3 className="text-lg font-bold">Platform</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <NextLink href="/" className={"animated-link"}>
                -
              </NextLink>
            </li>
          </ul>
        </div>
        <div className={"justify-self-center"}>
          <h3 className="font-bold">Legal</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <NextLink href="/" className={"animated-link"}>
                Terms of Use
              </NextLink>
            </li>
            <li>
              <NextLink href="/" className={"animated-link"}>
                Privacy Policy
              </NextLink>
            </li>
            <li>
              <NextLink href="/" className={"animated-link"}>
                Cookie Policy
              </NextLink>
            </li>
          </ul>
        </div>
      </div>

      <div className={"mt-10 flex flex-col items-center justify-center gap-3"}>
        <span className={"flex items-center gap-1"}>
          Copyright © {new Date().getFullYear()} Carbon Sarhat
        </span>
      </div>
    </footer>
  );
}
