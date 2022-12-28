//controller types
export interface LoginPageControllerHookInputProps {
  status?: string;
}

export interface LoginPageControllerHookOutput {
  open: boolean;
  accepted: boolean;
  //
  handleDetails: () => void;
  handleKeepLogged: () => void;
  handleSubmit: (event: { preventDefault: () => void }) => void;
  renderErrorMessage: (name: string) => void;
}

//view types

export type LoginPageInputProps = {
  open: boolean;
  accepted: boolean;
  //
  handleDetails: () => void;
  handleKeepLogged: () => void;
  handleSubmit: (event: { preventDefault: () => void }) => void;
  renderErrorMessage: (name: string) => void;
};
