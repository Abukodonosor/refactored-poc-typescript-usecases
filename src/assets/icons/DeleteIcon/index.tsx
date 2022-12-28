import Delete from '@mui/icons-material/Delete';
import { DeleteInputProps } from './types';

export const DeleteIcon: React.FC<DeleteInputProps> = ({ width, fill }) => (
  <Delete sx={{ width, fill }} />
);
