import { useEffect, useState } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import {
  createStyles,
  Navbar,
  Group,
  getStylesRef,
  rem,
  ScrollArea,
  MediaQuery,
} from "@mantine/core";
import {
  IconSettings,
  IconReceipt2,
  IconLogout,
  IconHome,
  IconTrendingUp,
  IconCirclePlus,
  IconSeeding,
  IconClockHour7,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  header: {
    justifyContent: "center",
    paddingBottom: theme.spacing.md,
    marginBottom: `calc(${theme.spacing.md} * 1.5)`,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  footer: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: "rgb(55 65 81)",
      color: "rgb(243 244 246)",

      [`& .${getStylesRef("icon")}`]: {
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
      },
    },
  },

  linkIcon: {
    ref: getStylesRef("icon"),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: "rgb(75 85 99)",
      color: "rgb(243 244 246)",
      [`& .${getStylesRef("icon")}`]: {
        color: "rgb(243 244 246)",
      },
    },
  },
}));

const data = [
  { link: "/", label: "Home", icon: IconHome },
  { link: "/financing", label: "Financing", icon: IconReceipt2 },
  { link: "/create-project", label: "Create Project", icon: IconCirclePlus },
  { link: "/exchange", label: "Exchange", icon: IconTrendingUp },
  { link: "/offset", label: "Offset Emission", icon: IconSeeding },
  { link: "/history", label: "History", icon: IconClockHour7 },
];

export default function AppNavbar() {
  const { pathname } = useRouter();

  const { classes, cx } = useStyles();
  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  const links = data.map((item) => (
    <NextLink
      className={cx(classes.link, {
        [classes.linkActive]: item.link === active,
      })}
      href={item.link}
      key={item.label}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </NextLink>
  ));

  return (
    <Navbar width={{ lg: 225 }} p="sm" bg={"rgb(31 41 55)"}>
      <MediaQuery smallerThan="lg" styles={{ display: "none" }}>
        <Navbar.Section>
          <Group className={classes.header}>
            <NextLink href={"/"}>
              <Image
                src={"/img/logo.png"}
                alt={"logo"}
                width={200}
                height={57}
                priority={true}
              />
            </NextLink>
          </Group>
        </Navbar.Section>
      </MediaQuery>

      <Navbar.Section grow component={ScrollArea}>
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <NextLink
          href="/settings"
          className={cx(classes.link, {
            [classes.linkActive]: "/settings" === active,
          })}
        >
          <IconSettings className={classes.linkIcon} stroke={1.5} />
          <span>Settings</span>
        </NextLink>

        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={`${classes.linkIcon}`} stroke={1.5} />
          <span>Logout</span>
        </a>
      </Navbar.Section>

      <Navbar.Section className={"mt-5 flex justify-center gap-5"}>
        <small>
          <NextLink href={"#"} className={"hover:underline"}>
            Privacy Policy
          </NextLink>
        </small>
        <small>
          <NextLink href={"#"} className={"hover:underline"}>
            Terms of Use
          </NextLink>
        </small>
      </Navbar.Section>
    </Navbar>
  );
}
