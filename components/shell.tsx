import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import Image from "next/image";

import { AppShell, Navbar, Header, MediaQuery, Burger } from "@mantine/core";
import AppNavbar from "@/components/navbar";

export default function Shell({ children }: { children: React.ReactNode }) {
  const { pathname } = useRouter();

  const [opened, setOpened] = useState(false);

  useEffect(() => {
    setOpened(false);
  }, [pathname]);

  return (
    <AppShell
      navbarOffsetBreakpoint="lg"
      padding={"xl"}
      header={
        <MediaQuery largerThan="lg" styles={{ display: "none" }}>
          <Header
            height={{ base: 65, lg: 0 }}
            px={"lg"}
            py={"sm"}
            bg={"#1f2937"}
            withBorder={false}
          >
            <div className={"flex items-center justify-between"}>
              <MediaQuery largerThan="lg" styles={{ visibility: "hidden" }}>
                <div className={"flex items-center gap-3"}>
                  <NextLink href={"/"}>
                    <Image
                      src={"/img/logo_sm.png"}
                      alt={"logo"}
                      width={40}
                      height={40}
                      priority={true}
                    />
                  </NextLink>
                  <Burger
                    opened={opened}
                    onClick={() => setOpened((o) => !o)}
                    size="sm"
                    color="white"
                    aria-label={"toggle menu"}
                  />
                </div>
              </MediaQuery>
            </div>
          </Header>
        </MediaQuery>
      }
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="lg"
          hidden={!opened}
          width={{ lg: 250 }}
          bg={"none"}
          withBorder={false}
        >
          <AppNavbar />
        </Navbar>
      }
    >
      <section className={"mx-auto max-w-5xl"}>{children}</section>
    </AppShell>
  );
}
