import StarBorderRounded from '@mui/icons-material/StarBorderRounded';
import { StarBorderRoundedInputProps } from './types';

export const StarBorderRoundedIcon: React.FC<StarBorderRoundedInputProps> = ({
  maxHeight,
  verticalAlign,
}) => <StarBorderRounded sx={{ maxHeight, verticalAlign }} />;
