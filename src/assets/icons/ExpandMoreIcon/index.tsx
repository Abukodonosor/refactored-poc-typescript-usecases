import ExpandMore from '@mui/icons-material/ExpandMore';
import { ExpandMoreInputProps } from './types';

export const ExpandMoreIcon: React.FC<ExpandMoreInputProps> = ({ minHeight, maxHeight }) => (
  <ExpandMore sx={{ minHeight, maxHeight }} />
);
