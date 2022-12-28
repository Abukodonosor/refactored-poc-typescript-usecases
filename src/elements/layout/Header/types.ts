export interface HeaderHookInputProps {}

export interface HeaderHookOutput {
  date: string;
  anchorElUser: any;
  pinned: boolean;

  handleCloseUserMenu: () => void;
  handleOpenUserMenu: (event: { currentTarget: any }) => void;
  handleUserMenu: (event: { currentTarget: { id: string } }) => void;
}

export type HeaderInputProps = {
  date: string;
  anchorElUser: any;
  pinned: boolean;

  handleCloseUserMenu: () => void;
  handleOpenUserMenu: (event: { currentTarget: any }) => void;
  handleUserMenu: (event: { currentTarget: { id: string } }) => void;
};
