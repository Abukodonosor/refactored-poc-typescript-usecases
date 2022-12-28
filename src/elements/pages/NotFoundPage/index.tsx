import { hocWrap } from '../../../utils/hocWrapper';
import { useNotFoundPageControllerHook } from './hooks/useNotFoundPageControllerHooks';
import { NotFoundPageView } from './NotFoundPageView';
import { NotFoundPageControllerHookInputProps } from './types';

export const NotFoundPage: React.FC<NotFoundPageControllerHookInputProps> = hocWrap(
  useNotFoundPageControllerHook,
  NotFoundPageView,
);
