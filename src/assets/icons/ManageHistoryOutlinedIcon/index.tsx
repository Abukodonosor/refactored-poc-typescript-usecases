import ManageHistoryOutlined from '@mui/icons-material/ManageHistoryOutlined';
import { ManageHistoryOutlinedInputProps } from './types';

export const ManageHistoryOutlinedIcon: React.FC<ManageHistoryOutlinedInputProps> = ({
  display,
  maxHeight,
}) => <ManageHistoryOutlined sx={{ display, maxHeight }} />;
