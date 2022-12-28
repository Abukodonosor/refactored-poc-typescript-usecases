import ForwardToInboxOutlined from '@mui/icons-material/ForwardToInboxOutlined';
import { ForwardToInboxOutlinedInputProps } from './types';

export const ForwardToInboxOutlinedIcon: React.FC<ForwardToInboxOutlinedInputProps> = ({
  display,
  maxHeight,
  fill,
}) => <ForwardToInboxOutlined sx={{ display, maxHeight, fill }} />;
