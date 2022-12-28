import { Check, Error, Info, Warning } from '@mui/icons-material';
import { Alert, Box } from '@mui/material';
import { SlideAlertStyles, StyledAlert } from './styles';
import { SlideAlertInputProps } from './types';

const icons = {
  success: <Check color="success" />,
  info: <Info />,
  warning: <Warning color="warning" />,
  error: <Error color="error" />,
};

export const SlideAlert = ({ type, text, handleAnimationEnd }: SlideAlertInputProps) => {
  const styles = SlideAlertStyles();

  return (
    <Box className={styles.slideAlert} onAnimationEnd={handleAnimationEnd}>
      <StyledAlert severity={type} icon={icons[type]}>
        {text}
      </StyledAlert>
    </Box>
  );
};
