"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import ThemeToggle from "@/utils/themeToggle";
import {
  LayoutDashboard,
  FolderKanban,
  ScanSearch,
  CalendarClock,
  Bell,
  LifeBuoy,
  HelpingHandIcon,
  LucideSettings,
  type LucideIcon,
} from "lucide-react";
import { Icon } from "../ui/Icon";

type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Projects", href: "/projects", icon: FolderKanban },
  { label: "Scane", href: "/scan/1", icon: ScanSearch },
  { label: "Schedule", href: "/schedule", icon: CalendarClock },
  { label: "Notification", href: "/notification", icon: Bell },
  { label: "Settings", href: "/settings", icon: LucideSettings },
  { label: "Support", href: "/support", icon: HelpingHandIcon },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg text-gray-700 font-bold dark:text-white transition"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed left-0 top-0 h-screen w-72 bg-white dark:bg-[#1A1A1A] transform transition-transform duration-300 z-40 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <Icon />

          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {navItems.map((item) => {
              const IconComponent = item.icon;

              const isActive =
                pathname === item.href || pathname.startsWith(item.href + "/");

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-full transition-all duration-200 group ${
                    isActive
                      ? "bg-teal-100 text-teal-600 font-semibold"
                      : "text-slate-500 hover:bg-teal-50 hover:text-teal-600"
                  }`}
                >
                  <IconComponent
                    size={20}
                    className={`transition-transform ${
                      isActive ? "scale-110" : "group-hover:scale-110"
                    }`}
                  />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="p-4">
            <ThemeToggle />
          </div>
        </div>
      </aside>
    </>
  );
}
