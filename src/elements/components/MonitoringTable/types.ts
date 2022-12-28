export interface MonitoringTableControllerHookInputProps {
  data: any[];
}

export interface MonitoringTableControllerHookOutput {
  data: any[]; // TODO: Refactor
  emptyError: boolean;
  selected: any[];
  rowsPerPage: number;
  page: number;
  emptyRows: number;
  isEditing: boolean;
  path: string[];
  headers: HeaderType[];
  hiddenColumns: string[];
  handleClose: () => void;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  setSelected: React.Dispatch<React.SetStateAction<any[]>>;
  handleChangePageCustom: (page: number) => void;
  setToPage: React.Dispatch<React.SetStateAction<number>>;
  handleInputFocus: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  handleChangePage: (page: number) => void;
  handleChangeRowsPerPage: (rowsPerPage: number) => void;
  setHeaders: React.Dispatch<React.SetStateAction<HeaderType[]>>;
  setHiddenColumns: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface MonitoringTableInputProps {
  data: any[]; // TODO: Refactor
  emptyError: boolean;
  selected: any[];
  rowsPerPage: number;
  page: number;
  emptyRows: number;
  isEditing: boolean;
  path: string[];
  headers: HeaderType[];
  hiddenColumns: string[];
  handleClose: () => void;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  setSelected: React.Dispatch<React.SetStateAction<any[]>>;
  handleChangePageCustom: (page: number) => void;
  setToPage: React.Dispatch<React.SetStateAction<number>>;
  handleInputFocus: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  handleChangePage: (page: number) => void;
  handleChangeRowsPerPage: (rowsPerPage: number) => void;
  setHeaders: React.Dispatch<React.SetStateAction<HeaderType[]>>;
  setHiddenColumns: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface HeaderType {
  id: string;
  label: string;
}
