import Shell from "@/components/shell";
import AppHeader from "@/components/header/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Shell>
      <AppHeader />
      {children}
    </Shell>
  );
}
