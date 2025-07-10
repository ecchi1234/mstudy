import { SidebarProvider } from "@/components/ui/sidebar";
import CustomSidebar from "@/app/components/CustomSidebar";
import Header from "@/app/components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <CustomSidebar />
      <main className="w-full">
        <Header />
        {children}
      </main>
    </SidebarProvider>
  );
}
