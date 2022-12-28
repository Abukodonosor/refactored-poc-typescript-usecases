import LocalShipping from '@mui/icons-material/LocalShipping';
import { LocalShippingInputProps } from './types';

export const LocalShippingIcon: React.FC<LocalShippingInputProps> = ({ display, maxHeight }) => (
  <LocalShipping sx={{ display, maxHeight }} />
);
