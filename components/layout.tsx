import { Archivo } from "next/font/google";

import MantineProvider from "@/components/mantine-provider";

const font = Archivo({
  subsets: ["latin"],
  weight: ["400", "700"],
});

import Header from "@/components/header";
import Footer from "@/components/footer";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider>
      <div className={`flex min-h-screen flex-col ${font.className}`}>
        <Header />
        <main className={"container mx-auto my-20 px-5"}>{children}</main>
        {/*<Footer />*/}
      </div>
    </MantineProvider>
  );
}
