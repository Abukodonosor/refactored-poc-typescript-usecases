import ManageAccounts from '@mui/icons-material/ManageAccounts';
import { ManageAccountsInputProps } from './types';

export const ManageAccountsIcon: React.FC<ManageAccountsInputProps> = ({
  marginRight,
  fontSize,
  verticalAlign,
}) => <ManageAccounts sx={{ marginRight, fontSize, verticalAlign }} />;
