import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import dynamic from "next/dynamic";

import { ActionIcon, Transition } from "@mantine/core";
import { IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react";

import IndexLayout from "@/components/pages/index/index-layout";

const GetEarlyAccessModal = dynamic(
  () => import("@/components/pages/index/get-early-access-modal")
);

import MailingForm from "@/components/pages/index/mailing-form";
import { useDisclosure } from "@mantine/hooks";

export default function LandingPage() {
  const [openModal, setOpenModal] = useState(false); // allow dynamic loading of modal but keep enter and exit transitions
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/img/landing/lines.png"
          as="image"
          media="(min-width: 640px)"
        />
      </Head>
      <IndexLayout>
        <Image
          src={"/img/logo_white.png"}
          alt={"Carbon Sarhat logo"}
          width={300}
          height={173}
          priority={true}
          className={"order-first mx-auto w-48 sm:hidden"}
          quality={100}
        />

        <div className={"flex flex-col justify-between gap-10 "}>
          <Image
            src={"/img/logo_white.png"}
            alt={"Carbon Sarhat logo"}
            width={300}
            height={173}
            priority={true}
            quality={100}
            className={"hidden self-start sm:block"}
          />

          <div className={"w-full max-w-xs self-center sm:self-auto"}>
            <MailingForm />
          </div>

          <div className={"space-y-3 text-center sm:text-start"}>
            <div
              className={"inline-flex gap-2 sm:flex-col md:flex-row md:gap-5"}
            >
              <a
                href={"/privacy-policy.pdf"}
                target={"_blank"}
                className="animated-link self-start text-slate-400 before:bg-slate-400"
              >
                Privacy Policy
              </a>
              <a
                href={"mailto:contact@carbonsarhat.com"}
                className="animated-link"
              >
                contact@carbonsarhat.com
              </a>
            </div>
            <div
              className={
                "flex items-center justify-center gap-5 sm:justify-start"
              }
            >
              <ActionIcon
                component="a"
                href="https://www.linkedin.com/company/carbon-sarhat/"
                size={"lg"}
                variant="transparent"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label={"LinkedIn page"}
              >
                <IconBrandLinkedin
                  className={"h-10 w-10 text-white transition hover:scale-110"}
                />
              </ActionIcon>

              <ActionIcon
                component="a"
                href="https://twitter.com/CarbonSarhat"
                size={"lg"}
                variant="transparent"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label={"Twitter page"}
              >
                <IconBrandTwitter
                  className={"h-8 w-8 text-white transition hover:scale-110"}
                />
              </ActionIcon>
            </div>
          </div>
        </div>

        <div className="order-first self-center justify-self-center text-center sm:order-last sm:text-left">
          <h2 className="text-2xl font-thin uppercase tracking-wider md:text-3xl">
            Tokenized Private Markets
          </h2>
          <h2 className="text-2xl uppercase tracking-wider md:text-3xl">
            Powering Global Investments
          </h2>

          <div className={"mt-5 flex justify-center gap-5 sm:justify-normal"}>
            <NextLink
              href={"/login"}
              className={
                "rounded-md border-2 border-white px-4 py-1 text-lg font-bold mix-blend-lighten transition-colors duration-200 hover:border-white hover:bg-white hover:text-black active:translate-y-[1px]"
              }
            >
              Log In
            </NextLink>

            <Transition
              mounted={openModal}
              transition="fade"
              duration={100}
              onEntered={() => open()}
            >
              {() => (
                <GetEarlyAccessModal
                  opened={opened}
                  close={close}
                  setOpenModal={setOpenModal}
                />
              )}
            </Transition>

            <button
              onClick={() => setOpenModal(true)}
              className={
                "rounded-md border-2 border-white bg-white px-4 py-1 text-lg font-bold text-black mix-blend-lighten transition-colors duration-200 hover:bg-transparent hover:text-white active:translate-y-[1px]"
              }
            >
              Get Early Access
            </button>
          </div>
        </div>
      </IndexLayout>
    </>
  );
}
