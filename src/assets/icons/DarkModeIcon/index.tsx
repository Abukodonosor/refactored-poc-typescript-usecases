import DarkMode from '@mui/icons-material/DarkMode';
import { DarkModeInputProps } from './types';

export const DarkModeIcon: React.FC<DarkModeInputProps> = ({ fontSize }) => (
  <DarkMode sx={{ fontSize }} />
);
