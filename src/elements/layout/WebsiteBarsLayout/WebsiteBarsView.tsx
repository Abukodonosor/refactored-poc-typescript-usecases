import React from 'react';
import { Outlet } from 'react-router';
import { Footer } from '../Footer';
import { HeaderBar } from '../Header';
import { MenuBar } from '../MenuBar';
import { WebsiteBarsInputProps } from './types';

export const WebsiteBarsView: React.FC<WebsiteBarsInputProps> = () => {
  return (
    <>
      <HeaderBar />
      <MenuBar />
      <Outlet />
      <Footer />
    </>
  );
};
