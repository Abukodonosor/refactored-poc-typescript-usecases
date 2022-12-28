import React from 'react';
import { FooterStyles } from './style';
import { FooterPageInputProps } from './types';

export const FooterView: React.FC<FooterPageInputProps> = () => {
  const styles = FooterStyles();

  return (
    <div className={styles.footer}>
      <p className={styles.footerText}>Version 2022102b</p>
    </div>
  );
};
