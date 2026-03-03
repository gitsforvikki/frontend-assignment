const leftContent = [
  {
    id: 1,
    title: "Sub Agents",
    value: "0",
  },
  {
    id: 2,
    title: "Parallel Executions",
    value: "2",
  },
  {
    id: 3,
    title: "Operations",
    value: "1",
  },
];
const rightContent = [
  {
    id: 1,
    title: "Critical",
    color: "text-red-700",
  },
  {
    id: 2,
    title: "High",
    color: "text-red-500",
  },
  {
    id: 3,
    title: "Medium",
    color: "text-yellow-500",
  },
  {
    id: 4,
    title: "Low",
    color: "text-green-500",
  },
];

export const ScaneFooter = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between items-center ml-0 border-t border-t-slate-200 dark:border-t-slate-700 px-4 py-3 gap-4 text-xs">
        <div className="flex items-center gap-6">
          {leftContent.map((item) => (
            <div className="flex items-center gap-2" key={item.id}>
              <div className="h-2 w-2 rounded-full bg-slate-400 dark:bg-slate-500 hidden lg:block" />
              <div className="text-right flex gap-x-1 items-center">
                <div className="text-xs text-muted-foreground">
                  {item.title}
                </div>
                <div className="font-semibold text-foreground">
                  {item.value}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-6 ">
          {rightContent.map((item) => (
            <div key={item.id} className="text-right flex gap-x-1 items-center">
              <div className={item.color}>{item.title}</div>
              <div className={`font-semibold ${item.color}`}>0</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
