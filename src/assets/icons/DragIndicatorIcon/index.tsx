import DragIndicator from '@mui/icons-material/DragIndicator';
import { DragIndicatorInputProps } from './types';

export const DragIndicatorIcon: React.FC<DragIndicatorInputProps> = ({ fill }) => (
  <DragIndicator sx={{ fill }} />
);
