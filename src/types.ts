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
export interface LogEntryType {
  timestamp: string;
  message: string;
  type: "info" | "warning" | "error" | "success";
  highlights?: { text: string; color: string }[];
}

export interface FindingType {
  id: string;
  severity: "Critical" | "High" | "Medium" | "Low";
  title: string;
  timestamp: string;
  endpoint: string;
  description: string;
}