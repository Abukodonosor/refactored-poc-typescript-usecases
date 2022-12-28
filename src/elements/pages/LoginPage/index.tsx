import { hocWrap } from '../../../utils/hocWrapper';
import { useLoginPageControllerHook } from './hooks/useLoginPageControllerHook';
import { LoginPageView } from './LoginPageView';
import { LoginPageControllerHookInputProps } from './types';

export const LoginPage: React.FC<LoginPageControllerHookInputProps> = hocWrap(
  useLoginPageControllerHook,
  LoginPageView,
);
