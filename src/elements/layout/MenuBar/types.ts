export interface MenuBarControllerHookInputProps {}

export interface MenuBarHookOutput {
  open: boolean;
  active: string;
  monitorList: never[];
  favs: any;
  heightMatch: boolean;
  firstPath: string;

  viewsFilter: (event: { stopPropagation: () => void; preventDefault: () => void }) => void;
  handleFav: (event: {
    stopPropagation: () => void;
    preventDefault: () => void;
    currentTarget: { id: any };
  }) => void;
  handleClick: (itemId: string) => void;
  handleDrawerClose: () => void;
  handleDrawerOpen: () => void;
  pinMenu: () => void;
}

export type MenuBarInputProps = {
  open: boolean;
  active: string;
  monitorList: never[];
  favs: any;
  heightMatch: boolean;
  firstPath: string;

  viewsFilter: (event: { stopPropagation: () => void; preventDefault: () => void }) => void;
  handleFav: (event: {
    stopPropagation: () => void;
    preventDefault: () => void;
    currentTarget: { id: any };
  }) => void;
  handleClick: (itemId: string) => void;
  handleDrawerClose: () => void;
  handleDrawerOpen: () => void;
  pinMenu: () => void;
};
