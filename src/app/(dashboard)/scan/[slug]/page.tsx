import { Progress } from "@/components/scane/Progress";
import { TopHeader } from "@/components/ui/TopHeader";

export default async function ScanDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div className="flex min-h-screen  text-foreground ml-6">
      {/* Main Content */}
      <div className="w-full md:ml-64 flex-1 overflow-auto space-y-5">
        {/* <TopHeader /> */}
        <Progress />
        {/* Stats Bar */}
      </div>
    </div>
  );
}
