import StarRateRounded from '@mui/icons-material/StarRateRounded';
import { StarRateRoundedInputProps } from './types';

export const StarRateRoundedIcon: React.FC<StarRateRoundedInputProps> = ({
  maxHeight,
  fill,
  verticalAlign,
}) => <StarRateRounded sx={{ maxHeight, fill, verticalAlign }} />;
