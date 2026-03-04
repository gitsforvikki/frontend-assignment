import type { Metadata } from "next";
import Dashboard from "@/components/dashboard/dashboard";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Overview of your account activity and analytics.",
};
export default function DashboardPage() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 dark:text-white">
          <Dashboard />
        </h1>
      </div>
    </>
  );
}
