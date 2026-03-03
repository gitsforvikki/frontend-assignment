import { projectMeta } from "@/constantData";

export const ProjectMeta = () => {
  return (
    <div className="pb-4 mb-4 border-b border-border">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  lg:items-center lg:justify-between gap-4">
        {projectMeta.map((meta, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-sm text-muted-foreground 
                       lg:border-r lg:pr-6 last:lg:border-0"
          >
            <span className="font-medium">{meta.title}:</span>
            <span className="text-base sm:text-lg text-foreground">
              {meta.subtitle}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
