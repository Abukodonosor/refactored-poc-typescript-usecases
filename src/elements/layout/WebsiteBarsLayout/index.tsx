import { hocWrap } from '../../../utils/hocWrapper';
import { useWebsiteBarsControllerHook } from './hooks/useWebsiteBarsControllerHook';
import { WebsiteBarsControllerHookInputProps } from './types';
import { WebsiteBarsView } from './WebsiteBarsView';

export const WebsiteBars: React.FC<WebsiteBarsControllerHookInputProps> = hocWrap(
  useWebsiteBarsControllerHook,
  WebsiteBarsView,
);
