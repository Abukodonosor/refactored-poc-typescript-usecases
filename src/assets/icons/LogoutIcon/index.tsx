import Logout from '@mui/icons-material/Logout';
import { LogoutInputProps } from './types';

export const LogoutIcon: React.FC<LogoutInputProps> = ({ fontSize, verticalAlign }) => (
  <Logout sx={{ fontSize, verticalAlign }} />
);
