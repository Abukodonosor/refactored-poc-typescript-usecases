export interface DashboardPageControllerHookInputProps {}

export interface DashboardPageControllerHookOutput {
  pinned: boolean;
  value: number;
  widgetTitles: { title: string; caption: string }[];
  position: number[];
  position2: number[];
  widgets1: JSX.Element[];
  widgets2: JSX.Element[];
  a11yProps: (index: number) => { id: string; 'aria-controls': string };
  setValue: React.Dispatch<React.SetStateAction<number>>;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
  setTriggerID: React.Dispatch<React.SetStateAction<string | null>>;
}

export type DashboardPageInputProps = {
  pinned: boolean;
  value: number;
  widgetTitles: { title: string; caption: string }[];
  position: number[];
  position2: number[];
  widgets1: JSX.Element[];
  widgets2: JSX.Element[];
  a11yProps: (index: number) => { id: string; 'aria-controls': string };
  setValue: React.Dispatch<React.SetStateAction<number>>;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
  setTriggerID: React.Dispatch<React.SetStateAction<string | null>>;
};
