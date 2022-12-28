import { useEffect, useRef, useState } from 'react';
import { generatePath, useLocation, useNavigate } from 'react-router-dom';
import { useVessel } from '../../../../../../providers';
import { HeaderType } from '../../../types';
import {
  ComparatorType,
  MonitoringTableContentControllerHookInputProps,
  MonitoringTableContentControllerHookOutput,
} from '../types';

export const useMonitoringTableContentControllerHook = ({
  data,
  isEditing,
  page,
  rowsPerPage,
  emptyRows,
  selected,
  headers,
  hiddenColumns,
  setSelected,
  setHeaders,
  setHiddenColumns,
}: MonitoringTableContentControllerHookInputProps): MonitoringTableContentControllerHookOutput => {
  const [order, setOrder] = useState<string>('asc');
  const [orderBy, setOrderBy] = useState<string>('Id');
  const [checkAllActive, setCheckAllActive] = useState<boolean>(false);
  const tableElement = useRef<HTMLTableElement>(null);
  const navigate = useNavigate();
  const { setRowData } = useVessel();
  const location = useLocation();
  const path = location.pathname.split('/');
  const currTable = path[path.length - 1];

  const colGroupId = ['checkbox'];

  const descendingComparator = (a: any, b: any, orderBy: string) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };

  const getComparator = (order: string, orderBy: string): ComparatorType => {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };

  // This method is created for cross-browser compatibility, if you don't
  // need to support IE11, you can use Array.prototype.sort() directly
  const stableSort = (array: any[], comparator: ComparatorType) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
  };

  const handleRequestSort = (property: string) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (checked: boolean) => {
    if (checked && !checkAllActive) {
      const newSelected = data
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((n, i) => i);
      setSelected(newSelected);
      setCheckAllActive(true);
      return;
    }
    setSelected([]);
    setCheckAllActive(false);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, name: number) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: any[] = [];
    event.stopPropagation();
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (name: number) => selected.indexOf(name) !== -1;

  const toDetails = (row: any) => {
    setRowData(row);
    navigate(generatePath(`/monitoring/${currTable}/details/${row.ID}`));
  };

  return {
    data,
    tableElement,
    headers,
    colGroupId,
    selected,
    order,
    orderBy,
    page,
    rowsPerPage,
    emptyRows,
    isEditing,
    hiddenColumns,
    handleClick,
    handleSelectAllClick,
    handleRequestSort,
    stableSort,
    getComparator,
    isSelected,
    toDetails,
    setHeaders,
    setHiddenColumns,
  };
};
