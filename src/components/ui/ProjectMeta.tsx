import { projectMeta } from "@/constantData";

export const ProjectMeta = () => {
  return (
    <div className="flex justify-between items-center gap-4 pb-4 mb-4">
      {projectMeta.map((meta, index) => (
        <div
          key={index}
          className="flex items-center gap-2 text-sm text-muted-foreground border-r last:border-0 pr-4  border-gray-700 dark:border-gray-500"
        >
          <span className="font-medium">{meta.title}:</span>
          <span className="text-lg">{meta.subtitle}</span>
        </div>
      ))}
    </div>
  );
};
