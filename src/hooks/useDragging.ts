import React, { useState } from 'react';

export const useDragging = <T extends { id: string; [K: string]: any }>(
  dragArray: T[],
  setDragArray: React.Dispatch<React.SetStateAction<T[]>>,
) => {
  const [lastOverId, setLastOverId] = useState<string>();
  const [draggingElement, setDraggingElement] = useState<T>();

  const handleDragStart = (id: string) => {
    setDraggingElement(dragArray.find(el => el.id === id));
  };

  const handleDragOver = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();

    const overId = (event.currentTarget.closest('[draggable]') as HTMLElement).dataset.dragId;

    if (draggingElement && draggingElement.id !== overId && lastOverId !== overId) {
      const reorderedArray = [...dragArray];
      const draggingIndex = reorderedArray.findIndex(el => el.id === draggingElement.id);
      const overIndex = reorderedArray.findIndex(el => el.id === overId);

      setLastOverId(overId);

      reorderedArray.splice(draggingIndex, 1);
      reorderedArray.splice(overIndex, 0, draggingElement);

      setDragArray(reorderedArray);
    }

    if (draggingElement && draggingElement.id === overId) {
      setLastOverId(undefined);
    }
  };

  const handleDragEnd = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();

    setDraggingElement(undefined);
    setLastOverId(undefined);
  };

  return {
    handleDragStart,
    handleDragOver,
    handleDragEnd,
  };
};
