import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { WebsiteBarsControllerHookInputProps, WebsiteBarsHookOutput } from '../types';

export const useWebsiteBarsControllerHook =
  ({}: WebsiteBarsControllerHookInputProps): WebsiteBarsHookOutput => {
    const navigate = useNavigate();
    // This peace of code Navigates and forbid access to the Layout page and all content which is require Auth
    useEffect(() => {
      if (!sessionStorage.getItem('authenticated') && !localStorage.getItem('authenticated')) {
        navigate('/login');
      }
    }, []);

    return {};
  };
