import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  HelpCardItems,
  HelpPageControllerHookInputProps,
  HelpPageControllerHookOutput,
} from '../types';
import { faker } from '@faker-js/faker';
import { useAppContext } from 'providers';
import { useTranslationHook } from 'hooks';

export const useHelpPageControllerHook =
  ({}: HelpPageControllerHookInputProps): HelpPageControllerHookOutput => {
    const navigate = useNavigate();
    const location = useLocation();
    const hash = location.hash;
    const { appState } = useAppContext();
    const [active, setActive] = useState(hash);
    const { translationKey } = useTranslationHook();
    useEffect(() => {
      setActive(hash);
    }, [hash]);

    useEffect(() => {
      if (!sessionStorage.getItem('authenticated') && !localStorage.getItem('authenticated')) {
        navigate('/');
      }
    }, []);

    const ListOfCardOptions: HelpCardItems[] = [
      {
        itemId: 'general',
        title: 'General',
        description: faker.lorem.paragraphs(8),
      },
      {
        itemId: 'dashboard',
        title: translationKey('Dashboard'),
        description: faker.lorem.paragraphs(8),
      },
      {
        itemId: 'monitoring',
        title: translationKey('Monitoring'),
        description: faker.lorem.paragraphs(8),
      },
      {
        itemId: 'search',
        title: translationKey('Search'),
        description: faker.lorem.paragraphs(8),
      },
      {
        itemId: 'statistics',
        title: translationKey('Statistics'),
        description: faker.lorem.paragraphs(8),
      },
      {
        itemId: 'reports-info',
        title: translationKey('Reports'),
        description: faker.lorem.paragraphs(8),
      },
      {
        itemId: 'settings',
        title: 'Settings',
        description: faker.lorem.paragraphs(8),
      },
    ];

    return {
      active: active,
      cardData: ListOfCardOptions,
      pinned: appState.pinnedMenu,
    };
  };
