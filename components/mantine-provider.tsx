import { useState } from "react";

import { Notifications } from "@mantine/notifications";
import {
  MantineProvider,
  ColorSchemeProvider,
  type ColorScheme,
} from "@mantine/core";

import { emotionCache } from "@/src/lib/emotionCache";

import { Archivo } from "next/font/google";

const font = Archivo({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function MainMantineProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
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
          components: {
            Button: {
              styles: { root: { borderRadius: "0.375rem" } },
            },
            TextInput: {
              styles: {
                input: {
                  transition: "0.15s border-color",
                  borderBottom: "2px solid #4b5563",
                  ":focus": {
                    borderBottom: "2px solid #3b82f6",
                  },
                },
                label: {
                  fontSize: "0.875rem",
                },
              },
            },
            PasswordInput: {
              styles: {
                input: {
                  transition: "0.15s border-color",
                  borderBottom: "2px solid #4b5563",
                  ":focus-within": {
                    borderBottom: "2px solid #3b82f6",
                  },
                },
                innerInput: {
                  paddingLeft: 0,
                },
                label: {
                  fontSize: "0.875rem",
                },
              },
            },
            DateInput: {
              styles: {
                input: {
                  transition: "0.15s border-color",
                  borderBottom: "2px solid #4b5563",
                  ":focus": {
                    borderBottom: "2px solid #3b82f6",
                  },
                },
                label: {
                  fontSize: "0.875rem",
                },
              },
            },
            FileInput: {
              styles: {
                input: {
                  transition: "0.15s border-color",
                  borderBottom: "2px solid #4b5563",
                  ":focus": {
                    borderBottom: "2px solid #3b82f6",
                  },
                },
                label: {
                  fontSize: "0.875rem",
                },
                description: { fontSize: "0.875rem" },
              },
            },
            Select: {
              styles: {
                input: {
                  transition: "0.15s border-color",
                  borderBottom: "2px solid #4b5563",
                  ":focus": {
                    borderBottom: "2px solid #3b82f6",
                  },
                },
                label: {
                  fontSize: "0.875rem",
                },
              },
            },
            MultiSelect: {
              styles: {
                input: {
                  transition: "0.15s border-color",
                  borderBottom: "2px solid #4b5563",
                  ":focus-within": {
                    borderBottom: "2px solid #3b82f6",
                  },
                },
                defaultValue: {
                  paddingTop: "7px",
                  paddingBottom: "4px",
                },
                label: {
                  fontSize: "0.875rem",
                },
              },
            },
            Radio: {
              styles: {
                labelWrapper: {
                  fontSize: "1rem",
                },
              },
            },
            Checkbox: {
              styles: {
                labelWrapper: {
                  fontSize: "1rem",
                },
              },
            },
          },
        }}
      >
        <Notifications position="top-center" autoClose={3000} />
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
