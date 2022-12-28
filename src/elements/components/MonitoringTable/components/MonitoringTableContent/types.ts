import { HeaderType } from '../../types';

export interface MonitoringTableContentControllerHookInputProps {
  data: any[];
  isEditing: boolean;
  page: number;
  rowsPerPage: number;
  emptyRows: number;
  selected: any[];
  headers: HeaderType[];
  hiddenColumns: string[];
  setSelected: React.Dispatch<React.SetStateAction<any[]>>;
  setHeaders: React.Dispatch<React.SetStateAction<HeaderType[]>>;
  setHiddenColumns: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface MonitoringTableContentControllerHookOutput {
  data: any[];
  tableElement: React.RefObject<HTMLTableElement>;
  headers: HeaderType[];
  colGroupId: string[];
  selected: any[];
  order: string;
  orderBy: string;
  page: number;
  rowsPerPage: number;
  emptyRows: number;
  isEditing: boolean;
  hiddenColumns: string[];
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, name: number) => void;
  handleSelectAllClick: (checked: boolean) => void;
  handleRequestSort: (property: string) => void;
  stableSort: (array: any[], comparator: ComparatorType) => any;
  getComparator: (order: string, orderBy: string) => ComparatorType;
  isSelected: (name: number) => boolean;
  toDetails: (row: any) => void;
  setHeaders: React.Dispatch<React.SetStateAction<HeaderType[]>>;
  setHiddenColumns: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface MonitoringTableContentInputProps {
  data: any[];
  tableElement: React.RefObject<HTMLTableElement>;
  headers: HeaderType[];
  colGroupId: string[];
  selected: any[];
  order: string;
  orderBy: string;
  page: number;
  rowsPerPage: number;
  emptyRows: number;
  isEditing: boolean;
  hiddenColumns: string[];
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, name: number) => void;
  handleSelectAllClick: (checked: boolean) => void;
  handleRequestSort: (property: string) => void;
  stableSort: (array: any[], comparator: ComparatorType) => any;
  getComparator: (order: string, orderBy: string) => ComparatorType;
  isSelected: (name: number) => boolean;
  toDetails: (row: any) => void;
  setHeaders: React.Dispatch<React.SetStateAction<HeaderType[]>>;
  setHiddenColumns: React.Dispatch<React.SetStateAction<string[]>>;
}

export type ComparatorType = (a: any, b: any) => number;
