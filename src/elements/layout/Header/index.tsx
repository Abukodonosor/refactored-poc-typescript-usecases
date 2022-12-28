import { hocWrap } from '../../../utils/hocWrapper';
import { useHeaderBarControllerHook } from './hooks/useHeaderBarControllerHook';
import { HeaderBarView } from './HeaderBarView';
import { HeaderHookInputProps } from './types';

export const HeaderBar: React.FC<HeaderHookInputProps> = hocWrap<any, any>(
  useHeaderBarControllerHook,
  HeaderBarView,
);
