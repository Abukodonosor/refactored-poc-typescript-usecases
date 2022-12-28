import { HeaderType } from '../../../../types';

export interface MonitoringTableContentHeadControllerHookInputProps {
  order: string;
  orderBy: string;
  numSelected: number;
  rowCount: number;
  headers: HeaderType[];
  tableElement: React.RefObject<HTMLTableElement>;
  columns: string[];
  isEditing: boolean;
  hiddenColumns: string[];
  onRequestSort: (property: string) => void;
  onSelectAllClick: React.ChangeEventHandler<HTMLInputElement>;
  setHeaders: React.Dispatch<React.SetStateAction<HeaderType[]>>;
  setHiddenColumns: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface MonitoringTableContentHeadControllerHookOutput {
  activeIndex: number | null;
  order: string;
  orderBy: string;
  numSelected: number;
  rowCount: number;
  headers: HeaderType[];
  isEditing: boolean;
  isDragging: boolean;
  hiddenColumns: string[];
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
  onRequestSort: (property: string) => void;
  onSelectAllClick: React.ChangeEventHandler<HTMLInputElement>;
  handleDragStart: (id: string) => void;
  handleDragOver: (event: React.DragEvent<HTMLTableCellElement>) => void;
  handleDragEnd: (event: React.DragEvent<HTMLTableCellElement>) => void;
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>;
  handleVisibilityChange: (id: string) => void;
}

export interface MonitoringTableContentHeadInputProps {
  activeIndex: number | null;
  order: string;
  orderBy: string;
  numSelected: number;
  rowCount: number;
  headers: HeaderType[];
  isEditing: boolean;
  isDragging: boolean;
  hiddenColumns: string[];
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
  onRequestSort: (property: string) => void;
  onSelectAllClick: React.ChangeEventHandler<HTMLInputElement>;
  handleDragStart: (id: string) => void;
  handleDragOver: (event: React.DragEvent<HTMLTableCellElement>) => void;
  handleDragEnd: (event: React.DragEvent<HTMLTableCellElement>) => void;
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>;
  handleVisibilityChange: (id: string) => void;
}
