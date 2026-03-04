import { Metadata } from "next";
import { FindingLogs } from "@/components/scane/FindingLogs";
import { LiveScaneConsole } from "@/components/scane/LiveScaneConsole";
import { Progress } from "@/components/scane/Progress";
import { ScaneFooter } from "@/components/scane/ScaneFooter";
import { TopHeader } from "@/components/ui/TopHeader";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `Scan ${slug} - Live Console`,
    description:
      "Monitor real-time scan progress, vulnerability findings, and verification logs.",
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function ScanDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div className="flex flex-col items-center min-h-screen gap-y-6">
      <div className="flex  max-h-screen md:ml-6">
        {/* Main Content */}
        <div className="w-full md:ml-64 flex-1 overflow-auto space-y-5">
          <TopHeader />
          <Progress />
          {/* Stats Bar */}
          <div className="flex-1 flex flex-col md:flex-row gap-4 md:gap-6 overflow-hidden">
            <LiveScaneConsole />
            <FindingLogs />
          </div>
        </div>
      </div>
      <ScaneFooter />
    </div>
  );
}
