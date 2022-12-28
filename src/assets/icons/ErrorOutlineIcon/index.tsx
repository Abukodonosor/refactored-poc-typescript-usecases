import ErrorOutline from '@mui/icons-material/ErrorOutline';
import { ErrorOutlineInputProps } from './types';

export const ErrorOutlineIcon: React.FC<ErrorOutlineInputProps> = ({
  display,
  maxHeight,
  fill,
}) => <ErrorOutline sx={{ display, maxHeight, fill }} />;
