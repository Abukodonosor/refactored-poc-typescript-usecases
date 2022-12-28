import { hocWrap } from '../../../utils/hocWrapper';
import { useUserSettingsPageControllerHook } from './hooks/useUserSettingsPageControllerHook';
import { UserSettingsControllerHookInputProps } from './types';
import { UserSettingsPageView } from './UserSettingsPageView';

export const UserSettingsPage: React.FC<UserSettingsControllerHookInputProps> = hocWrap(
  useUserSettingsPageControllerHook,
  UserSettingsPageView,
);
