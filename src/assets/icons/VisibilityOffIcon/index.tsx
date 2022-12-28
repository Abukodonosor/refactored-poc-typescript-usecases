import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { VisibilityOffInputProps } from './types';

export const VisibilityOffIcon: React.FC<VisibilityOffInputProps> = ({ fill, opacity }) => (
  <VisibilityOff sx={{ fill, opacity }} />
);
