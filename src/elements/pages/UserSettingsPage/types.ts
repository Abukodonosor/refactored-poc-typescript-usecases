import { SelectChangeEvent } from '@mui/material';

export interface UserSettingsControllerHookInputProps {}

export interface UserSettingsControllerHookOutput {
  pinned: boolean;
  theme: string;
  themeOptions: { value: string; label: string; icon?: JSX.Element }[];
  selectTheme: (event: SelectChangeEvent) => void;
}

export type UserSettingsInputProps = {
  pinned: boolean;
  theme: string;
  themeOptions: { value: string; label: string; icon?: JSX.Element }[];
  selectTheme: (event: SelectChangeEvent) => void;
};
