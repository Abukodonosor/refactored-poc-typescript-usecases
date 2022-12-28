import RefreshOutlined from '@mui/icons-material/RefreshOutlined';
import { RefreshOutlinedInputProps } from './types';

export const RefreshOutlinedIcon: React.FC<RefreshOutlinedInputProps> = ({ display, height }) => (
  <RefreshOutlined sx={{ display, height }} />
);
