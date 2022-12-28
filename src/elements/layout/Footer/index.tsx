import { hocWrap } from '../../../utils/hocWrapper';
import { FooterView } from './FooterView';
import { useFooterControllerHook } from './hooks/useFooterControllerHook';
import { FooterControllerHookInputProps } from './types';

export const Footer: React.FC<FooterControllerHookInputProps> = hocWrap(
  useFooterControllerHook,
  FooterView,
);
