"use client";

import { logEntries } from "@/constantData";
import { useState } from "react";

export const LiveScaneConsole = () => {
  const [activeTab, setActiveTab] = useState("activity");

  return (
    <div className="flex-1 flex flex-col bg-card border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
      {/* Console Header */}
      <div className="flex items-center justify-between border-b border-b-slate-200 dark:border-b-slate-700 px-4 py-3 bg-secondary">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
          <span className="font-semibold text-sm text-foreground">
            Live Scan Console
          </span>
          <span className="text-xs text-muted-foreground ml-2">Running</span>
        </div>
        <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <span>✕</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-b-slate-200 dark:border-b-slate-700 px-4 bg-background">
        <button
          onClick={() => setActiveTab("activity")}
          className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
            activeTab === "activity"
              ? "border-teal-400 text-teal-400"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          Activity Log
        </button>
        <button
          onClick={() => setActiveTab("verification")}
          className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
            activeTab === "verification"
              ? "border-teal-400 text-teal-400"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          Verification Loops
        </button>
      </div>

      {/* Console Content */}
      <div className="flex-1 overflow-y-auto p-4 bg-background font-mono text-sm">
        {logEntries.map((log, index) => (
          <div key={index} className="mb-2 flex gap-3">
            <span className="text-muted-foreground shrink-0">
              {log.timestamp}
            </span>
            <span className="text-foreground">
              {log.message}
              {log.highlights &&
                log.highlights.map((h, i) => (
                  <span key={i} className={h.color}>
                    {h.text}
                  </span>
                ))}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
