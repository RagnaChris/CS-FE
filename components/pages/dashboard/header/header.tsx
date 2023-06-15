import { useEffect, useState } from "react";

import { Button } from "@mantine/core";
import { IconBell } from "@tabler/icons-react";

import VenomConnect from "venom-connect";
import { initVenomConnect } from "@/src/lib/venom";

import VenomConnectWallet from "@/components/pages/dashboard/header/venom-connect-wallet";

export default function Header() {
  const [venomConnect, setVenomConnect] = useState<VenomConnect | undefined>(
    undefined
  );
  const init = async () => setVenomConnect(await initVenomConnect());

  useEffect(() => {
    init();
  }, []);

  return (
    <header
      className={
        "mb-7 flex items-center justify-center gap-5 sm:float-right sm:justify-end"
      }
    >
      <VenomConnectWallet venomConnect={venomConnect} />
      <Button
        size={"md"}
        // bg={"rgb(31 41 55)"}
        variant="gradient"
        radius={"md"}
        styles={() => ({
          root: {
            paddingLeft: "1rem",
            paddingRight: "1rem",
            backgroundColor: "#134e5e",
            background: "linear-gradient(to right, #134e5e, #71b280)",
          },
          inner: {
            fontSize: "1rem",
            display: "block",
          },
        })}
      >
        <div className={"flex items-center gap-3"}>
          <IconBell className={"h-5 w-5"} />
          <div className={"flex flex-col text-sm leading-4"}>
            <span>Green Capital</span>
            <small>Project Developer</small>
          </div>
        </div>
      </Button>
    </header>
  );
}
