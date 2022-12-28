import CalendarTodayOutlined from '@mui/icons-material/AccessTimeOutlined';
import { CalendarTodayOutlinedInputProps } from './types';

export const CalendarTodayOutlinedIcon: React.FC<CalendarTodayOutlinedInputProps> = ({
  maxHeight,
  marginRight,
  marginBottom,
  fontSize,
  fill,
}) => <CalendarTodayOutlined sx={{ maxHeight, marginRight, marginBottom, fontSize, fill }} />;
