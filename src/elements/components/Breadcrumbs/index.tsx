import { Breadcrumbs as MaterialBreadcrumbs, Stack } from '@mui/material';
import {
  ManageAccountsIcon,
  HomeOutlinedIcon,
  DvrOutlinedIcon,
  HelpOutlineIcon,
  SearchOutlinedIcon,
  InsertChartOutlinedOutlinedIcon,
  DescriptionOutlinedIcon,
} from '../../../assets/icons';
import { useLocation } from 'react-router-dom';
import { Text } from '../Text';

const renderIcon = (pathPart: string) => {
  switch (pathPart.toLocaleLowerCase()) {
    default:
      return null;
    case 'settings':
      return <ManageAccountsIcon marginRight={0.5} />;
    case 'dashboard':
      return <HomeOutlinedIcon marginRight={0.5} />;
    case 'monitoring':
      return <DvrOutlinedIcon marginRight={0.5} />;
    case 'help':
      return <HelpOutlineIcon marginRight={0.5} />;
    case 'search':
      return <SearchOutlinedIcon marginRight={0.5} />;
    case 'statistics':
      return <InsertChartOutlinedOutlinedIcon marginRight={0.5} />;
    case 'reports':
      return <DescriptionOutlinedIcon marginRight={0.5} />;
  }
};

/* TODO: actually have it as links (if needed) */
const handleClick = (event: React.MouseEvent<HTMLSpanElement>) => {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
};

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const path = location.pathname.split('/');

  const breadcrumbs = [
    path.map((pathPart, index) => (
      <Text
        key={index}
        display="flex"
        alignItems="center"
        fontSize="26px"
        color="text.primary"
        onClick={handleClick}
      >
        {index === 0 ? (
          sessionStorage.getItem('tenant')
        ) : (
          <>
            {renderIcon(pathPart)}
            {pathPart.charAt(0).toUpperCase() + pathPart.slice(1)}
          </>
        )}
      </Text>
    )),
  ];

  return (
    <Stack spacing={2}>
      <MaterialBreadcrumbs separator="|" aria-label="breadcrumb" sx={{ fontSize: '25px' }}>
        {breadcrumbs}
      </MaterialBreadcrumbs>
    </Stack>
  );
};

/* This is how you make it a link */
{
  /*
  <Link
    underline="hover"
    key="2"
    color="inherit"
    href="/material-ui/getting-started/installation/"
    onClick={handleClick}
  >
    Core
  </Link>;
  */
}
