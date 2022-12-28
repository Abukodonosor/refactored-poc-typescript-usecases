import { Button, Card, CardActions, CardContent } from '@mui/material';
import { Text } from '../Text';
import { CookieModalStyles } from './style';
export interface CookieModalInputProps {
  open: boolean;
  accepted: boolean;
  handleAgree: () => void;
  handleDetails: () => void;
}

export const CookieModal: React.FC<CookieModalInputProps> = ({
  open,
  accepted,
  handleAgree,
  handleDetails,
}) => {
  const style = CookieModalStyles({ open, accepted });

  return (
    <Card className={style.loginCard}>
      <CardContent sx={{ height: 100 }}>
        <Text variant="h5">This website uses Cookies</Text>
        <Text variant="body2" color="text.secondary">
          You can't enter without accepting.
        </Text>
      </CardContent>
      <CardActions>
        <Button
          color="secondary"
          variant="outlined"
          className={style.showDetailsButtonStyle}
          onClick={handleDetails}
        >
          Show Details
        </Button>
        {/* TODO: accept cookies shouldnt pop up every log in, use actual cookie? */}
        <Button
          variant="contained"
          onClick={handleAgree}
          className={style.acceptCookiesButtonStyle}
        >
          Accept Cookies
        </Button>
      </CardActions>
    </Card>
  );
};
