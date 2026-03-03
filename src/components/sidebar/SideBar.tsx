"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/utils/themeToggle";
import {
  LayoutDashboard,
  FolderKanban,
  ScanSearch,
  CalendarClock,
  Bell,
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
  { label: "Scan", href: "/scan/1", icon: ScanSearch },
  { label: "Schedule", href: "/Schedule", icon: CalendarClock },
  { label: "Notification", href: "/Notification", icon: Bell },
  { label: "Settings", href: "/Settings", icon: LucideSettings },
  { label: "Support", href: "/Support", icon: HelpingHandIcon },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname(); // ✅ Next.js way

  // Track active hash sections
  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg text-gray-700 font-bold dark:text-white transition"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-72 bg-white dark:bg-[#1A1A1A] text-white transform transition-transform duration-300 z-40 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <Icon />

          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {navItems.map((item) => {
              const IconComponent = item.icon;

              // ✅ Correct Active Logic
              const isActive = item.href.startsWith("#")
                ? activeHash === item.href
                : pathname === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-full transition-all duration-200 group ${
                    isActive
                      ? "bg-teal-100 text-teal-500"
                      : "text-slate-300 hover:bg-teal-100 hover:text-teal-500"
                  }`}
                >
                  <IconComponent
                    size={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="font-medium text-gray-500">
                    {item.label}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Theme Toggle */}
          <div className="p-4">
            <ThemeToggle />
          </div>
        </div>
      </aside>
    </>
  );
}
