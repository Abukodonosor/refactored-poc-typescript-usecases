import Edit from '@mui/icons-material/Edit';
import { EditInputProps } from './types';

export const EditIcon: React.FC<EditInputProps> = ({ minHeight, maxHeight }) => (
  <Edit sx={{ minHeight, maxHeight }} />
);
