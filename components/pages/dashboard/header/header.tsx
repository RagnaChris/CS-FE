import { useEffect, useState } from "react";

import { Button } from "@mantine/core";
import { IconBell } from "@tabler/icons-react";

import VenomConnect from "venom-connect";
import { initVenomConnect } from "@/src/lib/venom";

import VenomConnectWallet from "@/components/pages/dashboard/header/venom-connect-wallet";
import Image from "next/image";

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
        size={"xl"}
        variant="gradient"
        radius={"md"}
        styles={() => ({
          root: {
            paddingLeft: "1rem",
            paddingRight: "1rem",
            backgroundColor: "#134e5e",
            background: "linear-gradient(to right, #134e5e, #71b280)",
            // borderRadius: "9999px",
          },
          inner: {
            fontSize: "1rem",
            display: "block",
          },
        })}
      >
        <div className={"flex items-center gap-3"}>
          <IconBell className={"h-6 w-6"} />
          <div className={"flex flex-col text-center text-sm leading-4"}>
            <span>ARPA Inc.</span>
            <small>Project Developer</small>
          </div>
          <Image
            src={"/img/avatar.jpg"}
            alt={"user avatar image"}
            width={48}
            height={48}
            className={"rounded-full"}
            priority={true}
          />
        </div>
      </Button>
    </header>
  );
}
