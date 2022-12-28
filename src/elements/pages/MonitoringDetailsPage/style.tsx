import { Box, Card, styled, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const MonitoringDetailsStyles = makeStyles<Theme>(theme => ({
  monitoringDetails: {
    flexGrow: 1,
    marginLeft: theme.spacing(10),
    marginRight: theme.spacing(2),

    '& .MuiTypography-h6': {
      fontFamily: 'Roboto-Bold',
      fontSize: '18px',
    },
    '& .MuiTypography-h2': {
      fontFamily: 'Roboto-Bold',
      fontSize: '15px',
    },
  },
  events: {
    float: 'left',
    display: 'inline',
  },
  eventsHeader: {
    textAlign: 'left',
  },
  eventsContent: {
    padding: '0 !important',
  },
  eventsTableCell: {
    borderWidth: '0px 2px 0px 1.5px',
    borderStyle: 'solid',
    borderColor: '#EBEBED',
    fontSize: '16px',
    backgroundColor: '#F7F7F7',
  },
  rightBox: {
    position: 'absolute',
    display: 'inline',
    flexGrow: 1,
    marginLeft: theme.spacing(2),
  },
  buttonStyles: {
    width: '24px !important',
    height: '24px !important',
    minWidth: 'auto !important',
    minHeight: 'auto !important',
    marginLeft: '10px !important',
  },
  cellStyles: {
    padding: '2px 16px',
    textAlign: 'left',
    fontSize: '12px',
  },
  verticalDivider: {
    backgroundColor: '#000',
    marginRight: `${theme.spacing(1)} !important`,
    marginLeft: `${theme.spacing(1)} !important`,
  },
}));

export const StyledCard = styled(Card)<{ height: string; noPadding?: boolean }>`
  text-align: start;

  height: ${({ height }) => height};
  padding: ${({ theme, noPadding }) => (noPadding ? 0 : theme.spacing(1))};
  background-color: ${({ theme }) => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff')};
  ${({ theme }) => ({ ...theme.typography.body2 })};
`;

export const StyledList = styled('ul')<{ height?: string; listItemMargin?: string }>`
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-flow: column wrap;
  padding: 0;

  height: ${({ height }) => height || '15vh'};

  & li {
    margin: ${({ listItemMargin }) => listItemMargin || '0 0 15px 0'};
  }
`;

export const ListBox = styled(Box)<{ hasTopPadding?: boolean }>`
  display: inline;
  min-width: 80px
    ${({ hasTopPadding, theme }) => hasTopPadding && { 'padding-top': theme.spacing(2) }};
`;
