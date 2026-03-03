import { TrendingDown, TrendingUp } from "lucide-react";

export const StatCard = ({
  label,
  value,
  icon,
  change,
  severity,
}: {
  label: string;
  value: number;
  icon: React.ReactNode;
  change: number;
  severity: "critical" | "high" | "medium" | "low";
}) => {
  const isPositive = change > 0;

  return (
    <div className="bg-card border-slate-300 dark:border-slate-700 rounded-lg p-4">
      <div className="flex items-start justify-between mb-2">
        <div className="text-lg text-muted-foreground mt-1">{label}l</div>
        <div className="text-2xl bg-amber-100 p-1 rounded">{icon}</div>
      </div>
      <div className="flex items-center gap-1 text-sm">
        <div className="flex gap-x-3 items-center">
          <div className="text-2xl font-bold text-foreground">{value}</div>
          <div
            className={isPositive ? "text-red-500" : "text-green-500"}
          >
            <span className={"flex items-center gap-x-2"}>
              {isPositive ? (
                <TrendingUp size={14} className="text-red-500" />
              ) : (
                <TrendingDown size={14} className="text-green-500" />
              )}{" "}
              {Math.abs(change)}% change from yesterday
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
