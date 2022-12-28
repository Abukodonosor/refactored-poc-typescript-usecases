import * as React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {
  EdpemLogo,
  EdpemLogoWhite,
  HomeOutlinedIcon,
  DvrOutlinedIcon,
  SearchOutlinedIcon,
  InsertChartOutlinedOutlinedIcon,
  DescriptionOutlinedIcon,
  StarRateRoundedIcon,
  StarBorderRoundedIcon,
  TuneOutlinedIcon,
  SettingsOutlinedIcon,
  HelpOutlineIcon,
  PushPinOutlinedIcon,
} from '../../../assets/icons';
import { DrawerHeader, Drawer, MenuStyles } from './style';
import { MenuBarInputProps } from './types';
import { MenuListItem } from '../../components/MenuListItem/MenuListItem';
import { MenuListItemChild } from '../../components';
import { useTranslationHook } from 'hooks';

export const MenuBarView: React.FC<MenuBarInputProps> = ({
  open,
  active,
  monitorList,
  favs,
  heightMatch,
  firstPath,

  viewsFilter,
  handleClick,
  handleFav,
  handleDrawerClose,
  handleDrawerOpen,
  pinMenu,
}) => {
  const { translationKey } = useTranslationHook();
  const styles = MenuStyles();

  return (
    <Box
      sx={{ display: 'flex' }}
      // On mouse enter and on mouse leave
      // Better to develop hover effect
      onMouseEnter={handleDrawerOpen}
      onMouseLeave={handleDrawerClose}
    >
      <CssBaseline />

      <Drawer variant="permanent" open={open} PaperProps={{ elevation: 12 }}>
        <DrawerHeader>
          {open ? <EdpemLogo minWidth="170px" /> : <EdpemLogoWhite minWidth="170px" />}
        </DrawerHeader>
        <Divider variant="middle" />
        <List>
          <MenuListItem
            open={open}
            name={translationKey('Dashboard')}
            id={'Dashboard'}
            toRedirect={'/dashboard'}
            active={active}
            icon={<HomeOutlinedIcon />}
            handleClick={() => handleClick('Dashboard')}
          />

          {/* TODO: Monitoring is the only list item that has to be done differently */}
          <ListItem key={'Monitoring'} disablePadding className={styles.monitoringHover}>
            <ListItemButton
              id="Monitoring"
              component={Link}
              to="/monitoring"
              onClick={() => handleClick('Monitoring')}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                boxShadow: active === 'Monitoring' ? `inset 5px 0 0 #00417d` : 'none',
                ':hover': {
                  background: '#D9E4EC',
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <DvrOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={translationKey('Monitoring')} sx={{ opacity: open ? 1 : 0 }} />
              {/* TODO: handle filtering/settings */}
              <IconButton
                size="small"
                onClick={viewsFilter}
                sx={{ display: open ? 'inline' : 'none' }}
              >
                <TuneOutlinedIcon fontSize="inherit" paddingTop={0.4} />
              </IconButton>
            </ListItemButton>

            {/* TODO: commented out for now, in case needed later */}
            {/* <ListItem sx={{ display: open ? 'block' : 'none', marginTop: -1 }}>
                <Input
                  startAdornment={<SearchOutlinedIcon sx={{ opacity: '40%', mr: 2 }} />}
                  placeholder="Search here..."
                  onChange={monitorSearch}
                />
              </ListItem> */}

            {!open
              ? null
              : monitorList.map((text: string) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      id="Monitoring"
                      component={Link}
                      to={`monitoring/${text.toLocaleLowerCase()}`}
                      onClick={() => handleClick('Monitoring')}
                      className={styles.monitoringListButtons}
                    >
                      <IconButton
                        id={text}
                        onClick={handleFav}
                        disableRipple
                        className={styles.monitoringIcon}
                      >
                        {/* not moving the styling on these for now beause the star might be removed completely */}
                        {favs.includes(text) ? (
                          <StarRateRoundedIcon
                            maxHeight={22}
                            fill={'#FFBD0A'}
                            verticalAlign={'-1px'}
                          />
                        ) : (
                          <StarBorderRoundedIcon maxHeight={22} verticalAlign={'-1px'} />
                        )}
                      </IconButton>
                      <ListItemText primary={text} sx={{ opacity: 1, maxWidth: 2, ml: -2 }} />
                    </ListItemButton>
                  </ListItem>
                ))}
          </ListItem>

          <MenuListItem
            open={open}
            name={translationKey('Search')}
            id={'Search'}
            toRedirect={'/search/tenants/BMW'}
            active={active}
            icon={<SearchOutlinedIcon />}
            handleClick={() => handleClick('Search')}
          >
            <MenuListItemChild
              open={open}
              name={translationKey('Last searches')}
              id={'Search'}
              toRedirect={'/last-search/'}
              handleClick={() => handleClick('Search')}
            />
            <MenuListItemChild
              open={open}
              name={translationKey('Saved searches')}
              id={'Search'}
              toRedirect={'/saved-search/'}
              handleClick={() => handleClick('Search')}
            />
            <MenuListItemChild
              open={open}
              name={translationKey('Shared searches')}
              id={'Search'}
              toRedirect={'/saved-search/'}
              handleClick={() => handleClick('Search')}
            />
          </MenuListItem>

          <MenuListItem
            open={open}
            name={translationKey('Statistics')}
            id={'Statistics'}
            active={active}
            toRedirect={'/statistics'}
            icon={<InsertChartOutlinedOutlinedIcon />}
            handleClick={() => handleClick('Statistics')}
          />

          <MenuListItem
            open={open}
            name={translationKey('Reports')}
            id={'Reports'}
            toRedirect={'/reports'}
            active={active}
            icon={<DescriptionOutlinedIcon />}
            handleClick={() => handleClick('Reports')}
          />
        </List>

        <List
          className="drawerSettings"
          sx={{
            display: heightMatch ? 'block' : 'flex',
            justifyContent: 'center',
            position: heightMatch ? 'absolute' : 'relative',
            bottom: 0,
            width: 'inherit',
          }}
        >
          {!open ? (
            <div>
              <ListItem>
                <HelpOutlineIcon fill="#6D7681" />
              </ListItem>
              <ListItem>
                <SettingsOutlinedIcon fill="#6D7681" />
              </ListItem>
            </div>
          ) : (
            <ListItem sx={{ display: 'flex' }}>
              <IconButton
                component={HashLink}
                to={`/help#${firstPath.toLocaleLowerCase()}`}
                onClick={() => handleClick('')}
              >
                <HelpOutlineIcon />
              </IconButton>
              <IconButton sx={{ left: '20%' }}>
                <SettingsOutlinedIcon />
              </IconButton>
              <IconButton onClick={pinMenu} sx={{ left: '40%' }}>
                <PushPinOutlinedIcon transform="rotate(45deg)" />
              </IconButton>
            </ListItem>
          )}
        </List>
      </Drawer>
    </Box>
  );
};
