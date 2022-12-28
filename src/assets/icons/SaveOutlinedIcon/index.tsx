import SaveOutlined from '@mui/icons-material/SaveOutlined';
import { SaveOutlinedInputProps } from './types';

export const SaveOutlinedIcon: React.FC<SaveOutlinedInputProps> = ({ fill, verticalAlign }) => (
  <SaveOutlined sx={{ fill, verticalAlign }} />
);
