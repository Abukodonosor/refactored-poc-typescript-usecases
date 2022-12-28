import Lock from '@mui/icons-material/Lock';
import { LockInputProps } from './types';

export const LockIcon: React.FC<LockInputProps> = ({ fill, verticalAlign }) => (
  <Lock sx={{ fill, verticalAlign }} />
);
