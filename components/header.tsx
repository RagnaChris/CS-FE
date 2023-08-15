import NextLink from "next/link";
import Image from "next/image";

import { useState } from "react";
import {
  createStyles,
  Header as MantineHeader,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconClockHour7,
  IconCurrencyDollar,
  IconHome,
  IconPlus,
  IconSeeding,
  IconTrendingUp,
} from "@tabler/icons-react";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
    backgroundColor: "#435482",
    paddingTop: "1.25rem",
    paddingBottom: "1.25rem",
  },

  dropdown: {
    position: "absolute",
    top: rem(72),
    left: 0,
    right: 0,
    zIndex: 0,
    overflow: "hidden",
    backgroundColor: "#435482",

    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: "white",
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[6] : "#2d3752",
    },

    [theme.fn.smallerThan("md")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
      paddingLeft: "1.25rem",
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: "black",
    },
  },
}));

const links = [
  { label: "About", link: "/about" },
  { label: "Media Room", link: "/mediaroom" },
  { label: "Explore", link: "/explore" },
  { label: "Invest", link: "/invest" },
  { label: "Sector", link: "/sector" },
];

export default function Header() {
  const { pathname } = useRouter();

  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <NextLink
      key={link.label}
      href={link.link}
      className={cx(
        `transition duration-100`,
        classes.link,
        pathname.startsWith(`/dashboard/${link.link}`) && "active-link"
      )}
    >
      {link.label}
    </NextLink>
  ));

  return (
    <MantineHeader height={"auto"} className={classes.root}>
      <div
        className={
          "mx-auto flex items-center justify-between gap-3 px-5 lg:container"
        }
      >
        <div className={"flex items-center gap-5"}>
          <NextLink href={"/"}>
            <Image
              src={"/img/logo_text.png"}
              alt={"Carbon Sarhat logo"}
              width={240}
              height={22}
              className={"h-auto"}
              priority={true}
              quality={100}
            />
          </NextLink>
          {/*     <Group spacing={5} className={classes.links}>
            {items}
          </Group>*/}
        </div>

        <ul className={"flex gap-4"}>
          {pathname !== "/login" && (
            <li>
              <NextLink
                href={"/login"}
                className={
                  "rounded-md border-2 border-white px-3 py-2 text-sm font-bold text-white mix-blend-lighten transition-colors duration-200 hover:border-white hover:bg-white hover:text-black sm:text-lg"
                }
              >
                Log In
              </NextLink>
            </li>
          )}

          {/*   {!pathname.startsWith("/signup") && (
            <li>
              <NextLink
                href={"/signup"}
                className={
                  "rounded-md border-2 border-white bg-white px-3 py-2 text-sm font-bold text-black mix-blend-lighten transition-colors duration-200 hover:bg-[transparent] hover:text-white sm:text-lg"
                }
              >
                Sign Up
              </NextLink>
            </li>
          )}*/}
          {/*    <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
            color="white"
            aria-label={"toggle menu"}
          />*/}
        </ul>

        {/* <Transition transition="fade" duration={150} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} style={styles} radius={0}>
              {items}
            </Paper>
          )}
        </Transition>*/}
      </div>
    </MantineHeader>
  );
}
