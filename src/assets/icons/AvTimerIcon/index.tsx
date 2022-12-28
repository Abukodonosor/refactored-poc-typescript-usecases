import AvTimer from '@mui/icons-material/AvTimer';
import { AvTimerInputProps } from './types';

export const AvTimerIcon: React.FC<AvTimerInputProps> = ({ minHeight, maxHeight }) => (
  <AvTimer sx={{ minHeight, maxHeight }} />
);
