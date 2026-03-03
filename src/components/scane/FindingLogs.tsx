import { findings } from "@/constantData";
import { AlertCircle, Info } from "lucide-react";

export const FindingLogs = () => {
  return (
    <div className="w-full md:w-96 flex flex-col bg-white dark:bg-[#0F0F0F] border border-slate-300 dark:border-slate-700 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="border-b border-b-slate-200 dark:border-b-slate-700 px-4 py-3 bg-secondary">
        <h3 className="font-semibold text-sm text-foreground">Finding Log</h3>
      </div>

      {/* Findings List */}
      <div className="flex-1 overflow-y-auto">
        {findings.map((finding) => (
          <div
            key={finding.id}
            className="border-b border-b-slate-200 dark:border-b-slate-700 p-4 hover:bg-secondary/50 transition-colors"
          >
            {/* Severity Badge */}
            <div className="flex items-start justify-between mb-2">
              <span
                className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-bold text-white ${
                  finding.severity === "Critical"
                    ? "bg-red-500"
                    : finding.severity === "High"
                      ? "bg-orange-500"
                      : finding.severity === "Medium"
                        ? "bg-yellow-500"
                        : "bg-green-500"
                }`}
              >
                {finding.severity === "Critical" ? (
                  <AlertCircle size={12} />
                ) : (
                  <Info size={12} />
                )}
                {finding.severity}
              </span>
              <span className="text-xs text-muted-foreground">
                {finding.timestamp}
              </span>
            </div>

            {/* Title */}
            <h4 className="font-semibold text-sm text-foreground mb-2">
              {finding.title}
            </h4>

            {/* Endpoint */}
            <div className="mb-2">
              <span className="text-xs text-teal-400 font-mono">
                {finding.endpoint}
              </span>
            </div>

            {/* Description */}
            <p className="text-xs text-muted-foreground leading-relaxed">
              {finding.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
