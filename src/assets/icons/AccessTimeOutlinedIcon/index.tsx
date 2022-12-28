import AccessTimeOutlined from '@mui/icons-material/AccessTimeOutlined';
import { AccessTimeOutlinedInputProps } from './types';

export const AccessTimeOutlinedIcon: React.FC<AccessTimeOutlinedInputProps> = ({
  maxHeight,
  fill,
}) => <AccessTimeOutlined sx={{ maxHeight, fill }} />;
