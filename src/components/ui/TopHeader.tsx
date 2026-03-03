export const TopHeader = () => {
  return (
    <div className="w-full  text-white border-b border-slate-300 dark:border-slate-700 mb-4 sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left - Breadcrumb */}
        <div className="flex items-center gap-3 text-sm">
          <span className="font-semibold text-gray-700 dark:text-white">Scan</span>
          <span className="text-slate-500">/</span>
          <span className="text-gray-500 dark:text-slate-400">Private Assets</span>
          <span className="text-slate-500">/</span>
          <span className="text-teal-400 font-medium">New Scan</span>
        </div>

        {/* Right - Actions */}
        <div className="flex items-center gap-4">
          {/* Export Button */}
          <button className="px-4 py-2 rounded-lg border border-slate-500 text-gray-700 dark:text-white hover:bg-slate-800 transition-colors text-sm font-medium">
            Export Report
          </button>

          {/* Stop Scan Button */}
          <button className="px-4 py-2 rounded-lg bg-red-600/20 border border-red-600 text-red-500 hover:bg-red-600/30 transition-colors text-sm font-medium">
            Stop Scan
          </button>
        </div>
      </div>
    </div>
  );
};
