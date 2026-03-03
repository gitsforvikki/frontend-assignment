"use client";
import { useState } from "react";
import {
  Search,
  Filter,
  Columns3,
  Plus,
  StopCircle,
  AlertTriangle,
} from "lucide-react";
import { scanData } from "@/constantData";
import Link from "next/link";
import { StatCard } from "../ui/StateCard";
import { ScaneTable } from "../scane/ScaneTable";
import { ProjectMeta } from "../ui/ProjectMeta";
import { TopHeader } from "../ui/TopHeader";

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  // Calculate stats
  const stats = {
    critical: scanData.reduce((sum, scan) => sum + scan.critical, 0),
    high: scanData.reduce((sum, scan) => sum + scan.high, 0),
    medium: scanData.reduce((sum, scan) => sum + scan.medium, 0),
    low: scanData.reduce((sum, scan) => sum + scan.low, 0),
  };

  const totalVulnerabilities =
    stats.critical + stats.high + stats.medium + stats.low;

  return (
    <div className="flex min-h-screen  text-foreground ml-6">
      {/* Main Content */}
      <div className="w-full md:ml-64 flex-1 overflow-auto space-y-5">
        {/* <TopHeader /> */}
        {/* Stats Bar */}
        <div className="bg-white dark:bg-[#0D1621] rounded p-4 md:p-6 ">
          <ProjectMeta />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <StatCard
              label="Critical Severity"
              value={stats.critical}
              icon={<StopCircle size={20} className="text-red-500" />}
              change={-7}
              severity="critical"
            />
            <StatCard
              label="High Severity"
              value={stats.high}
              icon={<AlertTriangle size={20} className="text-orange-500" />}
              change={5}
              severity="high"
            />
            <StatCard
              label="Medium Severity"
              value={stats.medium}
              icon={<AlertTriangle size={20} className="text-yellow-500" />}
              change={3}
              severity="medium"
            />
            <StatCard
              label="Low Severity"
              value={stats.low}
              icon={<Search size={20} className="text-blue-500" />}
              change={-2}
              severity="low"
            />
          </div>
        </div>

        {/* Table Section */}
        <div className="rounded bg-white dark:bg-[#0D1621] border border-slate-300 dark:border-slate-700">
          {/* Toolbar */}
          <div className="p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-3 mb-6">
            <div className="flex-1 relative w-full">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                size={18}
              />
              <input
                type="text"
                placeholder="Search scans..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg  focus:outline-none focus:ring-1 focus:ring-accent text-sm"
              />
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-secondary transition-colors text-sm">
                <Filter size={16} />
                <span className="hidden sm:inline text-gray-500">Filter</span>
              </button>
              <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-secondary transition-colors text-sm">
                <Columns3 size={16} />
                <span className="hidden sm:inline text-gray-500 dark:text-gray-400">
                  Columns
                </span>
              </button>
              <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-accent rounded-lg hover:bg-opacity-90 transition-colors font-semibold text-sm text-white bg-teal-500">
                <Plus size={16} />
                <span className="hidden sm:inline">New Scan</span>
              </button>
            </div>
          </div>

          {/* Table */}
          <ScaneTable />
        </div>
      </div>
    </div>
  );
}
