export interface ScanType {
  id: string;
  name: string;
  type: string;
  status: "Completed" | "Scheduled" | "Failed";
  progress: number;
  critical: number;
  high: number;
  medium: number;
  low: number;
  lastScan: string;
}
