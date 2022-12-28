import Download from '@mui/icons-material/Download';
import { DownloadInputProps } from './types';

export const DownloadIcon: React.FC<DownloadInputProps> = ({ padding, fill }) => (
  <Download sx={{ padding, fill }} />
);
