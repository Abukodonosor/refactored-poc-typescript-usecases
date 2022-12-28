import TuneOutlined from '@mui/icons-material/TuneOutlined';
import { TuneOutlinedInputProps } from './types';

export const TuneOutlinedIcon: React.FC<TuneOutlinedInputProps> = ({ fontSize, paddingTop }) => (
  <TuneOutlined sx={{ fontSize, paddingTop }} />
);
