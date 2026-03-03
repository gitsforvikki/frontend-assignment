"use client";
import { useState } from "react";
// import { AppSidebar } from "../components/AppSidebar";
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
import { ScaneTable } from "../sance/ScaneTable";

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
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 text-foreground">
      {/* Sidebar */}
      {/* <AppSidebar /> */}

      {/* Main Content */}
      <div className="w-full md:ml-64 flex-1 overflow-auto">
        {/* Top Bar */}
        <div className="border-b border-b-slate-300 dark:border-slate-700 bg-background sticky top-0 z-10 p-4 md:p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground mb-1">
                <span className="">Scan</span>
                <span>/</span>
                <span>Private Assets</span>
                <span>/</span>
                <span className="text-accent font-semibold">New Scan</span>
              </div>
              <h1 className="text-xl md:text-2xl font-bold text-foreground">
                Project X
              </h1>
            </div>
            <div className="text-right text-sm w-full md:w-auto">
              <div className="text-muted-foreground mb-1">Owner: Nonprogit</div>
              <div className="grid grid-cols-2 md:flex md:gap-8 gap-2">
                <div>
                  <span className="text-muted-foreground">Total Issues:</span>
                  <span className="ml-2 font-semibold text-foreground">
                    {totalVulnerabilities}
                  </span>
                </div>
                <div>
                  <span className="text-muted-foreground">Scheduled:</span>
                  <span className="ml-2 font-semibold text-foreground">
                    1000
                  </span>
                </div>
                <div>
                  <span className="text-muted-foreground">Revenue:</span>
                  <span className="ml-2 font-semibold text-foreground">
                    100
                  </span>
                </div>
                <div>
                  <span className="text-muted-foreground">Failed Scans:</span>
                  <span className="ml-2 font-semibold text-foreground">
                    100
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 p-4 md:p-6 bg-background border-b border-slate-300 dark:border-slate-700">
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

        {/* Table Section */}
        <div className="p-4 md:p-6 rounded-lg">
          {/* Toolbar */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 mb-6">
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
