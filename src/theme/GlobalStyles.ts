import { createStyles, makeStyles } from '@mui/styles';
import RobotoCondensedRegular from '../assets/fonts/Roboto_Condensed/RobotoCondensed-Regular.ttf';
import OpenSansRegular from '../assets/fonts/open-sans/OpenSans-Regular.ttf';
import OpenSansSemibold from '../assets/fonts/open-sans/OpenSans-Semibold.ttf';
import RalewayRegular from '../assets/fonts/raleway/Raleway-Regular.ttf';
import RobotoCondensedBold from '../assets/fonts/Roboto_Condensed/RobotoCondensed-Bold.ttf';
import reactGridStyles from './reactGridStyles';
import dateTimePickerStyles from './dateTimePickerStyles';
import calendarStyles from './calendarStyles';

export const useGlobalStyles = makeStyles(() =>
  createStyles({
    '@global': {
      '@font-face': [
        {
          fontFamily: 'OpenSans',
          src: `url(${OpenSansRegular}) format("truetype")`,
        },
        {
          fontFamily: 'OpenSans-semi',
          src: `url(${OpenSansSemibold}) format("truetype")`,
        },
        {
          fontFamily: 'Raleway',
          src: `url(${RalewayRegular}) format("truetype")`,
        },
        {
          fontFamily: 'Roboto-Condensed',
          src: `url(${RobotoCondensedRegular}) format("truetype")`,
        },
        {
          fontFamily: 'Roboto-Bold',
          src: `url(${RobotoCondensedBold}) format("truetype")`,
        },
      ],
      html: {
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
      },
      body: {
        position: 'block',
        height: '100%',
        width: '100%',
        margin: 0,
        backgroundColor: '#e4e4e4',
      },
      a: {
        textDecoration: 'none',
      },
      h1: {
        margin: 0,
      },
      ...reactGridStyles,
      ...dateTimePickerStyles,
      ...calendarStyles,
    },
  }),
);
