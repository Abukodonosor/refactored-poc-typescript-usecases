import Code from '@mui/icons-material/Code';
import { CodeInputProps } from './types';

export const CodeIcon: React.FC<CodeInputProps> = ({ maxHeight, verticalAlign }) => (
  <Code sx={{ maxHeight, verticalAlign }} />
);
