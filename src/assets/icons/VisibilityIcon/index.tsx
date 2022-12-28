import Visibility from '@mui/icons-material/Visibility';
import { VisibilityInputProps } from './types';

export const VisibilityIcon: React.FC<VisibilityInputProps> = ({ fill }) => (
  <Visibility sx={{ fill }} />
);
