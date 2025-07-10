import {
  Home,
  Settings,
  MessageCircleCode,
  LineSquiggle,
  Goal,
  BookOpen,
  Terminal,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Pathname from "@/app/route/Pathname";

// Menu items.
const items = [
  {
    title: "Home",
    url: Pathname.home,
    icon: Home,
  },
  {
    title: "Goals",
    url: Pathname.goals,
    icon: Goal,
  },
  {
    title: "Resources",
    url: Pathname.resources,
    icon: BookOpen,
  },
  {
    title: "Roadmaps",
    url: Pathname.roadmaps,
    icon: LineSquiggle,
  },
  {
    title: "LeetCode Tracker",
    url: Pathname.leetcodeTracker,
    icon: Terminal,
  },
  {
    title: "Settings",
    url: Pathname.settings,
    icon: Settings,
  },
];

export default function CustomSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <MessageCircleCode className="!size-5" />
                <span className="text-base font-semibold">MStudy</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <Avatar className="h-8 w-8 rounded-lg grayscale">
            <AvatarImage src={`https://github.com/shadcn.png`} alt={`ChiNN`} />
            <AvatarFallback className="rounded-lg">CN</AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">{`ChiNN`}</span>
            <span className="text-muted-foreground truncate text-xs">
              {`nguyenngocc0800@gmail.com`}
            </span>
          </div>
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
}
