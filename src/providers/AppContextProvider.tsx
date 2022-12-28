import * as React from 'react';

export interface AppState {
  created: string;
  modified: string;
  id: string;
  username: string;
  userRole: string;
  tenant: {
    created: string;
    modified: string;
    id: string;
    name: string;
    contactPersonName: string;
    mailAddress: string;
    street: string;
    city: string;
    postalCode: string;
  };
  mailAddress: string;
  lastLogin: number;
  firstName: string;
  lastName: string;
  externalKeycloakId: string;
  // TO REMOVE
  password: string;
  pinnedMenu: boolean;
  // *EXPERIMENTAL*
  monitoringDefaultOrder: string[];
  monitoringOrder: string[];
  monitoringOptions: Record<string, { name: string; favorites: boolean; visibility: boolean }>;
  privilegeMatrix: object;
  customUserStyles: object;
  //
}

type SetStateAction<S> = React.Dispatch<React.SetStateAction<S>>;

export type ContextValue = {
  appState: AppState;
  updateAppState: SetStateAction<AppState>;
};

export const AppContext = React.createContext<ContextValue>({} as any);

export const useAppContext = () => React.useContext(AppContext);

export interface AppProviderProps {
  children: React.ReactNode;
  defaultCode?: AppState;
}

export const AppProvider: React.FC<AppProviderProps> = props => {
  const [appState, updateAppState] = React.useState<AppState>({
    ...(props.defaultCode || SAMPLE_CODE),
  });

  const defaultContextValue: ContextValue = {
    appState: appState,
    updateAppState,
  };

  return <AppContext.Provider value={defaultContextValue}>{props.children}</AppContext.Provider>;
};

/**
 *
 * This represent application config by specific user
 * Demo code which hold the key points for our application rendering
 *
 */
const SAMPLE_CODE = {
  created: '2022-11-22T13:26:56.883Z',
  modified: '2022-11-22T13:26:56.883Z',
  id: 'uuid-uuid-uuid-uuid',
  username: 'test',
  userRole: 'client',
  tenant: {
    created: '2022-11-22T13:26:56.883Z',
    modified: '2022-11-22T13:26:56.883Z',
    id: 'uuid-uuid-uuid-uuid',
    name: 'BMW',
    contactPersonName: 'God_x_x_x',
    mailAddress: 'Wonderland 101',
    street: 'Red Rabbit 302',
    city: 'Neverland',
    postalCode: 'DOWN369',
  },
  mailAddress: 'test@compacer-demo.com',
  lastLogin: 0,
  firstName: 'Alice',
  lastName: 'Wonderland',
  externalKeycloakId: 'uuid-uuid-uuid-uuid',
  // TO REMOVE
  password: 'test',
  pinnedMenu: false,
  // default order of the user menu
  monitoringDefaultOrder: ['Vessel', 'Inbox', 'Tracking', 'Orders'],
  // active order of the main menu
  monitoringOrder: ['Vessel', 'Inbox', 'Tracking', 'Orders'], // this need to be array of monitoringIds (but for now lets keep this)
  // active data about specific monitoring order (When you change order, or make the option favorite => pls be sure that you have update data inside  'monitoringOptions' )
  monitoringOptions: {
    Vessel: {
      // this need to be id of the process
      name: 'Vessel',
      favorites: true,
      visibility: true,
    },
    Inbox: {
      name: 'Inbox',
      favorites: false,
      visibility: true,
    },
    Tracking: {
      name: 'Inbox',
      favorites: false,
      visibility: true,
    },
    Orders: {
      name: 'Inbox',
      favorites: false,
      visibility: true,
    },
  },
  // Privilege matrix options (granular)
  privilegeMatrix: {},
  // Custom user styles Matrix
  customUserStyles: {},
};
