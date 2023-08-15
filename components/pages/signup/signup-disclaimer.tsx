export default function SignupDisclaimer() {
  return (
    <p className={"text-sm"}>
      By signing up, you agree to our{" "}
      <a href="/terms.pdf" target="_blank" className={"hover:underline"}>
        Terms and Conditions
      </a>{" "}
      and{" "}
      <a
        href="/privacy-policy.pdf"
        target="_blank"
        className={"hover:underline"}
      >
        Privacy Policy
      </a>
      .
    </p>
  );
}
