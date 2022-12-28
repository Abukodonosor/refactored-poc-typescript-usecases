import { WidgetBoardProps, WidgetBoardViewProps } from '../types';

export const WidgetBoardController = ({
  setRefresh,
  index,
  widgets,
  pos,
  title,
}: WidgetBoardProps): WidgetBoardViewProps => {
  const defaultProps = {
    isDraggable: true,
    isResizable: true,
    rowHeight: 30,
    preventCollision: true, //this changes if widgets "hit and move" each other
    compactType: null,
    cols: 12,
  };

  const refresh: WidgetBoardViewProps['refresh'] = event => {
    setRefresh(true);
    if (event) {
      index(event.currentTarget.id);
    }
  };

  return { defaultProps, refresh, widgets, pos, title };
};
