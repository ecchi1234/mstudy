import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

export default function Header() {
  return (
    <header className="w-full">
      <div className="flex items-center py-3 px-4 text-white w-full">
        <SidebarTrigger />
        <Separator
          orientation="vertical"
          className="mx-4 data-[orientation=vertical]:h-4"
        />
        <Input
          type="search"
          placeholder="Search..."
          className="w-64 bg-transparent text-white placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:border-none"
        />
      </div>
    </header>
  );
}
