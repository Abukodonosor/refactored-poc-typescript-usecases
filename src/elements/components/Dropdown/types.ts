import { ReactNode } from 'react';
import { SelectChangeEvent } from '@mui/material';

export interface DropdownInputProps {
  options: { value: string; label: string; icon?: JSX.Element }[];
  value?: string;
  height?: string;
  onChange?: (event: SelectChangeEvent, child: ReactNode) => void;
}
