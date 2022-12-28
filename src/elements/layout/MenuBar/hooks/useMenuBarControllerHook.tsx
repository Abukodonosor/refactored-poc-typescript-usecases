import { useMediaQuery } from '@mui/material';
import { useAppContext } from 'providers';
import React from 'react';
import { ChangeEventHandler, KeyboardEventHandler, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MenuBarControllerHookInputProps, MenuBarHookOutput } from '../types';

export const useMenuBarControllerHook =
  ({}: MenuBarControllerHookInputProps): MenuBarHookOutput => {
    const location = useLocation();
    const firstPath = location.pathname.split('/')[1];
    const { appState, updateAppState } = useAppContext();
    const [active, setActive] = React.useState(firstPath); //TODO: change default state based on set homepage? or is homepage always dashboard?
    const [menuOpen, setMenuOpen] = useState(appState.pinnedMenu || false);

    const [searchField, setSearchField] = React.useState('');
    const heightMatch = useMediaQuery('(min-height:600px)');

    const handleDrawerOpen = () => {
      setMenuOpen(appState.pinnedMenu || true);
    };

    const handleDrawerClose = () => {
      setMenuOpen(appState.pinnedMenu || false);
    };

    const pinMenu = () => {
      updateAppState({ ...appState, pinnedMenu: !appState.pinnedMenu });
    };

    /* for favorites: */
    /* TODO: unsure if this should be a localStorage or cookie, have to check and change accordingly */
    let monitoringList = JSON.parse(
      localStorage.getItem('monitorList') || JSON.stringify(appState.monitoringDefaultOrder),
    ); // Added default values so it works until we get real data
    let favList = JSON.parse(localStorage.getItem('favorites') || '[]');
    let viewsList = favList.concat(monitoringList);
    const [monitorList, setMonitorList] = useState([]);
    const [favs, setFav] = useState(favList);

    useEffect(() => {
      setMonitorList(viewsList);
    }, [favs]);

    const handleFav = (event: {
      stopPropagation: () => void;
      preventDefault: () => void;
      currentTarget: { id: any };
    }) => {
      event.stopPropagation();
      event.preventDefault();
      let inList = favList.includes(event.currentTarget.id);
      if (inList) {
        const newFavList = favList.filter((f: any) => f !== event.currentTarget.id);
        localStorage.setItem('favorites', JSON.stringify(newFavList));
        monitoringList.push(event.currentTarget.id);
        localStorage.setItem('monitorList', JSON.stringify(monitoringList));
      }
      if (!inList) {
        favList.unshift(event.currentTarget.id);
        localStorage.setItem('favorites', JSON.stringify(favList));
        const newMonitorList = monitoringList.filter((f: any) => f !== event.currentTarget.id);
        localStorage.setItem('monitorList', JSON.stringify(newMonitorList));
      }
      setFav(localStorage.getItem('favorites'));
    };

    const viewsFilter = (event: { stopPropagation: () => void; preventDefault: () => void }) => {
      event.stopPropagation();
      event.preventDefault();
      /* TODO: handle what pops up when filtering */
    };

    //TODO: ids are hard coded right now, might need to revise?
    const handleClick = (itemId: string) => {
      setActive(itemId);
    };

    //handling the search

    const monitorSearch = (event: { target: { value: string } }) => {
      const searchString = event.target.value.toLocaleLowerCase();
      setSearchField(searchString);
    };

    useEffect(() => {
      const newList = viewsList.filter((f: string) => {
        return f.toLocaleLowerCase().includes(searchField);
      });
      setMonitorList(newList);
    }, [searchField]);

    return {
      open: menuOpen,
      active: active,
      monitorList: monitorList,
      favs: favs,
      heightMatch: heightMatch,
      firstPath: firstPath,

      viewsFilter: viewsFilter,
      handleFav: handleFav,
      handleClick: handleClick,
      handleDrawerClose: handleDrawerClose,
      handleDrawerOpen: handleDrawerOpen,
      pinMenu: pinMenu,
    };
  };
