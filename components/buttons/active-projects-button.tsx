import NextLink from "next/link";

import { Button } from "@mantine/core";

export default function ActiveProjectsButton() {
  return (
    <Button
      component={NextLink}
      href={"/create-project/projects"}
      size={"xl"}
      variant="gradient"
      radius={"md"}
      styles={() => ({
        root: {
          padding: "1rem",
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
        <span>Your Active Projects: 1</span>
        <span className={"font-normal"}>Go to Project List</span>
      </div>
    </Button>
  );
}
