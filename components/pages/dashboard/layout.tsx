import Shell from "@/components/pages/dashboard/shell";
import AppHeader from "@/components/pages/dashboard/header/header";

import styles from "./dashboard.module.css";

import { useState } from "react";

import {
  MantineProvider,
  ColorSchemeProvider,
  type ColorScheme,
} from "@mantine/core";
import { emotionCache } from "@/src/lib/emotionCache";

import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        emotionCache={emotionCache}
        theme={{
          colorScheme,
          fontFamily: font.style.fontFamily,
          headings: { fontFamily: font.style.fontFamily },
        }}
      >
        <div className={`dark ${styles.dashboard}`}>
          <Shell>
            <AppHeader />
            {children}
          </Shell>
        </div>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
