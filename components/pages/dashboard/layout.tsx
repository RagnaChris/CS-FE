import Shell from "@/components/pages/dashboard/shell";
import AppHeader from "@/components/pages/dashboard/header/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Shell>
      <AppHeader />
      {children}
    </Shell>
  );
}
