import Sidebar from "@/components/sidebar/SideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen justify-between bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
