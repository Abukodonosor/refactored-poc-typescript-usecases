import Done from '@mui/icons-material/Done';
import { DoneInputProps } from './types';

export const DoneIcon: React.FC<DoneInputProps> = ({ display, maxHeight, height, fill }) => (
  <Done sx={{ display, maxHeight, height, fill }} />
);
