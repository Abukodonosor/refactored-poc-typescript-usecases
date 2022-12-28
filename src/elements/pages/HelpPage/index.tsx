import { hocWrap } from '../../../utils/hocWrapper';
import { HelpPageView } from './HelpPageView';
import { useHelpPageControllerHook } from './hooks/useHelpPageControllerHook';
import { HelpPageControllerHookInputProps } from './types';

export const HelpPage: React.FC<HelpPageControllerHookInputProps> = hocWrap(
  useHelpPageControllerHook,
  HelpPageView,
);
