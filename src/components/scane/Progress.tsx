import { ProcessSteps } from "./ProcessSteps";

const steps = [
  { name: "Spidering", completed: true },
  { name: "Mapping", completed: true },
  { name: "Testing", completed: true, active: true },
  { name: "Validating", completed: false },
  { name: "Reporting", completed: false },
];

export const Progress = () => {
  const progress = 0;
  return (
    <div className="border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0F0F0F] p-4 md:p-6 overflow-y-auto rounded-lg">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
        {/* Circular Progress */}
        <div className="flex flex-col items-center border-b border-r-0  md:border-b-0 md:border-r border-slate-300 dark:border-slate-700 pr-4 md:pr-6 pb-6 md:pb-0">
          <div className="relative w-20 md:w-24 h-20 md:h-24 rounded-full border-2 border-secondary flex items-center justify-center bg-black">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-teal-400">
                {progress}%
              </div>
              <div className="text-xs text-white">In Progress</div>
            </div>
          </div>
        </div>

        {/* Step Tracker */}
        <div className="flex-1 w-full">
          <div className="w-full">
            <div className="flex items-center justify-between gap-1">
              {steps.map((step, index) => (
                <div
                  key={step.name}
                  className="flex items-center flex-1 min-w-0"
                >
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div
                      className={`w-8 md:w-10 h-8 md:h-10 rounded-full flex items-center justify-center font-semibold text-xs md:text-sm transition-colors flex-shrink-0 ${
                        step.active
                          ? "border border-teal-400 text-accent-foreground"
                          : step.completed
                            ? "bg-teal-400 text-accent border-2 border-accent"
                            : "border border-gray-700 text-muted-foreground"
                      }`}
                    >
                      {step.completed && !step.active ? "✓" : index + 1}
                    </div>
                    <div className="text-xs font-semibold text-foreground mt-1 md:mt-2 text-center whitespace-nowrap leading-tight">
                      <div>{step.name.split(" ")[0]}</div>
                      {step.name.split(" ")[1] && (
                        <div className="text-xs">{step.name.split(" ")[1]}</div>
                      )}
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`flex-1 h-px mx-1 md:mx-3 shrink-0 ${
                        step.completed ? "bg-gray-300" : "bg-secondary"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          <ProcessSteps />
        </div>
      </div>
    </div>
  );
};
