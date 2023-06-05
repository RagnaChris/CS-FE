import Shell from "@/components/shell";
import AppHeader from "@/components/header/header";

import { IBM_Plex_Sans, Inter, Roboto } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const ibm = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${roboto.className}`}>
      <Shell>
        <AppHeader />
        {children}
      </Shell>
    </div>
  );
}
