import { hocWrap } from '../../../utils/hocWrapper';
import { useMenuBarControllerHook } from './hooks/useMenuBarControllerHook';
import { MenuBarView } from './MenuBarView';
import { MenuBarControllerHookInputProps } from './types';

export const MenuBar: React.FC<MenuBarControllerHookInputProps> = hocWrap(
  useMenuBarControllerHook,
  MenuBarView,
);
