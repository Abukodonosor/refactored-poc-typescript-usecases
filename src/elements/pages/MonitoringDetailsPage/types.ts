export interface MonitoringDetailsPageControllerHookInputProps {}

export interface MonitoringDetailsPageControllerHookOutput {
  rowData: any;
  header: string[];
  dataKeys: string[];
  pinned: boolean;
}

export type MonitoringDetailsPageInputProps = {
  rowData: any;
  header: string[];
  dataKeys: string[];
  pinned: boolean;
};
