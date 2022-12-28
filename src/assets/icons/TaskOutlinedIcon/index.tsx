import TaskOutlined from '@mui/icons-material/TaskOutlined';
import { TaskOutlinedInputProps } from './types';

export const TaskOutlinedIcon: React.FC<TaskOutlinedInputProps> = ({
  display,
  maxHeight,
  height,
  fill,
}) => <TaskOutlined sx={{ display, maxHeight, height, fill }} />;
