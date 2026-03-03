import { scanData } from "@/constantData";
import Link from "next/link";

export const ScaneTable = () => {
  return (
    <div className="rounded-lg overflow-x-auto">
      <table className="w-full min-w-max md:min-w-0">
        <thead>
          <tr className="border-b border-b-slate-300 dark:border-b-slate-700 bg-secondary">
            <th className="px-3 md:px-6 py-3 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
              Scan Name
            </th>
            <th className="hidden md:table-cell px-6 py-3 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
              Type
            </th>
            <th className="px-3 md:px-6 py-3 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
              Status
            </th>
            <th className="hidden sm:table-cell px-6 py-3 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
              Progress
            </th>
            <th className="px-3 md:px-6 py-3 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
              Vulnerability
            </th>
            <th className="hidden lg:table-cell px-6 py-3 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
              Last Scan
            </th>
          </tr>
        </thead>
        <tbody>
          {scanData.map((scan) => (
            <tr
              key={scan.id}
              className="hover:bg-secondary transition-colors cursor-pointer"
            >
              <td className="px-3 md:px-6 py-4 text-xs md:text-sm font-medium text-foreground">
                <Link href={`/scan/${scan.id}`} className="hover:text-accent">
                  {scan.name}
                </Link>
              </td>
              <td className="hidden md:table-cell px-6 py-4 text-sm text-foreground">
                {scan.type}
              </td>
              <td className="px-3 md:px-6 py-4 text-xs md:text-sm">
                <span
                  className={`inline-block px-2 md:px-3 py-1 rounded-full text-xs font-semibold ${
                    scan.status === "Completed"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      : scan.status === "Scheduled"
                        ? "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                        : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                  }`}
                >
                  {scan.status}
                </span>
              </td>
              <td className="hidden sm:table-cell px-6 py-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden w-20 md:w-32">
                    <div
                      className="h-full bg-teal-500 rounded-full transition-all duration-300"
                      style={{ width: `${scan.progress}%` }}
                    />
                  </div>
                  <span className="text-xs font-semibold text-foreground w-8">
                    {scan.progress}%
                  </span>
                </div>
              </td>
              <td className="px-3 md:px-6 py-4 text-sm">
                <div className="flex gap-0.5 md:gap-1">
                  {scan.critical > 0 && (
                    <span className="inline-flex items-center justify-center w-5 md:w-7 h-5 md:h-7 rounded bg-red-500 text-white text-xs font-bold">
                      {scan.critical}
                    </span>
                  )}
                  {scan.high > 0 && (
                    <span className="inline-flex items-center justify-center w-5 md:w-7 h-5 md:h-7 rounded bg-orange-500 text-white text-xs font-bold">
                      {scan.high}
                    </span>
                  )}
                  {scan.medium > 0 && (
                    <span className="inline-flex items-center justify-center w-5 md:w-7 h-5 md:h-7 rounded bg-yellow-500 text-white text-xs font-bold">
                      {scan.medium}
                    </span>
                  )}
                  {scan.low > 0 && (
                    <span className="inline-flex items-center justify-center w-5 md:w-7 h-5 md:h-7 rounded bg-blue-500 text-white text-xs font-bold">
                      {scan.low}
                    </span>
                  )}
                </div>
              </td>
              <td className="hidden lg:table-cell px-6 py-4 text-sm text-muted-foreground">
                {scan.lastScan}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
