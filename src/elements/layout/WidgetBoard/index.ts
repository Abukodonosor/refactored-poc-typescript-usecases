import { hocWrap } from '../../../utils/hocWrapper';
import { WidgetBoardController } from './hooks/WidgetBoardController';
import { WidgetBoardProps } from './types';
import { WidgetBoardView } from './WidgetBoardView';

export const WidgetBoard: React.FC<WidgetBoardProps> = hocWrap(
  WidgetBoardController,
  WidgetBoardView,
);
