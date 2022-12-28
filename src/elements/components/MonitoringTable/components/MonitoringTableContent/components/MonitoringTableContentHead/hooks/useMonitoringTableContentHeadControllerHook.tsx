import { useDragging } from '../../../../../../../../hooks/useDragging';
import { useCallback, useEffect, useState } from 'react';
import { HeaderType } from '../../../../../types';
import {
  MonitoringTableContentHeadControllerHookInputProps,
  MonitoringTableContentHeadControllerHookOutput,
} from '../types';

export const useMonitoringTableContentHeadControllerHook = ({
  order,
  orderBy,
  numSelected,
  rowCount,
  headers,
  tableElement,
  columns,
  isEditing,
  hiddenColumns,
  onRequestSort,
  onSelectAllClick,
  setHeaders,
  setHiddenColumns,
}: MonitoringTableContentHeadControllerHookInputProps): MonitoringTableContentHeadControllerHookOutput => {
  //resize columns part:
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const { handleDragStart, handleDragOver, handleDragEnd } = useDragging<HeaderType>(
    headers,
    setHeaders,
  );

  /* TODO: need to math better, it doesnt resize exactly on cursor */
  const mouseMove = useCallback(
    (event: MouseEvent) => {
      columns.map((column, index) => {
        if (index === activeIndex && tableElement.current) {
          let minWidth = parseInt(
            window
              .getComputedStyle(tableElement.current.children[1].children[0].children[index])
              .getPropertyValue('min-width'),
          );
          const width =
            event.clientX -
            tableElement.current.children[1].children[0].children[index].getBoundingClientRect()
              .left;
          if (width >= minWidth) {
            document.querySelector(`.col-${column}`)?.setAttribute('style', `${width}px`);
          }
        }
      });
    },
    [activeIndex, tableElement], //maybe? yes? dunno?
  );

  const removeListeners = useCallback(() => {
    window.removeEventListener('mousemove', mouseMove);
    window.removeEventListener('mouseup', removeListeners);
  }, [mouseMove]);

  const mouseUp = useCallback(() => {
    setActiveIndex(null);
    removeListeners();
  }, [setActiveIndex, removeListeners]);

  const handleVisibilityChange = (id: string) => {
    if (hiddenColumns.includes(id)) {
      const modifiedHiddenColumns = [...hiddenColumns];
      modifiedHiddenColumns.splice(modifiedHiddenColumns.indexOf(id), 1);
      setHiddenColumns(modifiedHiddenColumns);
    } else {
      setHiddenColumns([...hiddenColumns, id]);
    }
  };

  useEffect(() => {
    if (activeIndex !== null) {
      window.addEventListener('mousemove', mouseMove);
      window.addEventListener('mouseup', mouseUp);
    }

    return () => {
      removeListeners();
    };
  }, [activeIndex, mouseMove, mouseUp, removeListeners]);

  return {
    activeIndex,
    order,
    orderBy,
    numSelected,
    rowCount,
    headers,
    isEditing,
    isDragging,
    hiddenColumns,
    setActiveIndex,
    onRequestSort,
    onSelectAllClick,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
    setIsDragging,
    handleVisibilityChange,
  };
};
