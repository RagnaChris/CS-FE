import styles from "./index.module.css";

import { Notifications } from "@mantine/notifications";
import { MantineProvider } from "@mantine/core";
import { emotionCache } from "@/src/lib/emotionCache";

import { Roboto } from "next/font/google";
const font = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
});

/*'@font-face': {
  fontFamily: 'Adjusted Arial Fallback',
      src: `local(Arial)`,
      sizeAdjust: "98%",
      ascentOverride: 'normal',
      descentOverride: 'normal',
      lineGapOverride: "normal"
},*/

export default function IndexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MantineProvider
      withGlobalStyles
      emotionCache={emotionCache}
      theme={{
        globalStyles: (theme) => ({
          "@font-face": {
            fontFamily: "ArialFallback",
            src: `local(Arial)`,
            sizeAdjust: "98%",
            ascentOverride: "normal",
            descentOverride: "normal",
            lineGapOverride: "normal",
          },
        }),
        fontFamily: `${font.style.fontFamily}, "ArialFallback"`,
        components: {
          Button: {
            styles: { root: { borderRadius: "0.375rem" } },
          },
          TextInput: {
            styles: {
              input: {
                background: "transparent",
                color: "white",
              },
              label: {
                color: "white",
                fontSize: "0.875rem",
              },
            },
          },
          Textarea: {
            styles: {
              input: {
                background: "transparent",
                color: "white",
              },
              label: {
                color: "white",
                fontSize: "0.875rem",
              },
            },
          },
        },
      }}
    >
      <section
        className={`grid min-h-screen gap-14 p-5 text-white sm:grid-cols-2 sm:gap-10 lg:px-20 lg:py-16 ${styles.index}`}
      >
        <Notifications position="top-center" autoClose={3000} />
        {children}
      </section>
    </MantineProvider>
  );
}
