import { Box } from '@mui/system';
import { EdpemLogo } from 'assets/icons';
import { Text } from 'elements/components';
import React from 'react';
import notFound from '../../../assets/images/404.svg';
import { ColorButton, notFoundStyles } from './style';
import { NotFoundPageInputProps } from './types';

export const NotFoundPageView: React.FC<NotFoundPageInputProps> = ({ toHome }) => {
  const styles = notFoundStyles();

  return (
    <div className={styles.notFoundPage}>
      <div className={styles.logo}>
        <EdpemLogo />
      </div>
      <Box className={styles.content}>
        <img className="404" src={notFound} alt="404" />
        <Box className={styles.illustration}>
          <Text width="11vw" textAlign="center" fontSize="18px">
            We are sorry, page not found!
          </Text>
        </Box>
        <Box className={styles.errorContent}>
          <Text textAlign="center" fontSize="15px" marginBottom={2}>
            The page you are looking for might have been removed, had its name changed or is
            temporarily unavailable.
          </Text>
          <ColorButton onClick={toHome} variant="contained" className={styles.backButton}>
            <Text color="#fff">Back to homepage</Text>
          </ColorButton>
        </Box>
      </Box>
    </div>
  );
};
