import { hocWrap } from '../../../utils/hocWrapper';
import { useLoginFooterControllerHook } from './hooks/useLoginFooterControllerHook';
import { LoginFooterView } from './LoginFooterView';
import { LoginFooterControllerHookInputProps } from './types';

export const LoginFooter: React.FC<LoginFooterControllerHookInputProps> = hocWrap(
  useLoginFooterControllerHook,
  LoginFooterView,
);
