import { AlertColor } from '@mui/material';

export interface SlideAlertType {
  id?: string;
  type: AlertColor;
  text: string;
}

export interface SlideAlertInputProps extends SlideAlertType {
  type: AlertColor;
  text: string;
  handleAnimationEnd: (event: React.AnimationEvent<HTMLDivElement>) => void;
}
