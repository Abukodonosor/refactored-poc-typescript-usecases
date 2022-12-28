import HourglassEmpty from '@mui/icons-material/HourglassEmpty';
import { HourglassEmptyInputProps } from './types';

export const HourglassEmptyIcon: React.FC<HourglassEmptyInputProps> = ({ display, maxHeight }) => (
  <HourglassEmpty sx={{ display, maxHeight }} />
);
