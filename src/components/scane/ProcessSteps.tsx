const processData = [
  { label: "Scan Type", value: "Gray Box" },
  { label: "Targets", value: "google.com" },
  { label: "Started At", value: "Nov 22, 09:00AM" },
  { label: "Credentials", value: "2 Active" },
  { label: "Files", value: "Control.pdf" },
  { label: "Checklists", value: "40/350", highlight: true },
];

export const ProcessSteps = () => {
  return (
    <div className="mt-4 md:mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 text-xs md:text-sm border-t border-slate-300 dark:border-slate-700 pt-4">
      {processData.map((item) => (
        <div key={item.label}>
          <div className="text-xs text-muted-foreground font-semibold uppercase">
            {item.label}
          </div>
          <div
            className={`font-semibold ${
              item.highlight ? "text-accent" : "text-foreground"
            }`}
          >
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
};