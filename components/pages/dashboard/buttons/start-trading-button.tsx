import NextLink from "next/link";
import { Button } from "@mantine/core";

export default function StartTradingButton() {
  return (
    <Button
      component={NextLink}
      href={"/dashboard/exchange"}
      size={"xl"}
      variant="gradient"
      radius={"md"}
      styles={() => ({
        root: {
          padding: "12px",
          paddingTop: "10px",
          paddingBottom: "10px",
          backgroundColor: "#134e5e",
          background: "linear-gradient(to right, #134e5e, #71b280)",
        },
        inner: {
          fontSize: "1rem",
          display: "block",
        },
      })}
    >
      <div className={"flex flex-col leading-5"}>
        <span>Start Trading</span>
        <span>Token</span>
      </div>
    </Button>
  );
}
