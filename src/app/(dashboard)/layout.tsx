import Sidebar from "@/components/sidebar/SideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen justify-between">
      <Sidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
