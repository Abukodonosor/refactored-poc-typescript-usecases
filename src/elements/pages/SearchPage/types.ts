//controller types
export interface SearchPageControllerHookInputProps {}

export interface SearchPageControllerHookOutput {
  pinned: boolean;
  firstQuery: {
    id: number;
    param: string;
  }[][];
  secondQuery: {
    id: number;
    param: string;
  }[][];
  queryBoxes: number[];
  timeQueryParams: string[];
  firstQueryParams: string[];
  textQueryParams: string[];
  selectFirstParam: (event: any, child: any, box: any, row: any) => void;
  selectSecondParam: (event: any, child: any, box: any) => void;
  queryValues: (box: any, row: any) => any;
  addRow: (box: any, row: any) => void;
  addBox: (box: any) => void;
  removeRow: (box: any, row: any) => void;
  removeBox: (box: any) => void;
  parseQueries: () => void;
}

export interface SearchPageInputProps {
  pinned: boolean;
  firstQuery: {
    id: number;
    param: string;
  }[][];
  secondQuery: {
    id: number;
    param: string;
  }[][];
  queryBoxes: number[];
  timeQueryParams: string[];
  firstQueryParams: string[];
  textQueryParams: string[];
  selectFirstParam: (event: any, child: any, box: any, row: any) => void;
  selectSecondParam: (event: any, child: any, box: any) => void;
  queryValues: (box: any, row: any) => any;
  addRow: (box: any, row: any) => void;
  addBox: (box: any) => void;
  removeRow: (box: any, row: any) => void;
  removeBox: (box: any) => void;
  parseQueries: () => void;
}
