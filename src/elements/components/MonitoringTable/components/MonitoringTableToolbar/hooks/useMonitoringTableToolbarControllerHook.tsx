import { useEffect, useState } from 'react';
import { HeaderType } from '../../../types';
import {
  MonitoringTableToolbarControllerHookInputProps,
  MonitoringTableToolbarControllerHookOutput,
} from '../types';

export const useMonitoringTableToolbarControllerHook = ({
  selectedCount,
  numberOfEntries,
  rowsPerPage,
  page,
  emptyRows,
  isEditing,
  path,
  headers,
  hiddenColumns,
  setIsEditing,
  setHeaders,
  setHiddenColumns,
}: MonitoringTableToolbarControllerHookInputProps): MonitoringTableToolbarControllerHookOutput => {
  const [prevHeaders, setPrevHeaders] = useState<HeaderType[]>([]);
  const [prevHiddenColumns, setPrevHiddenColumns] = useState<string[]>([]);
  const currTenant = sessionStorage.getItem('tenant');
  const currTable = path[path.length - 1];

  let first = page * rowsPerPage + 1;
  let last = first + rowsPerPage - 1 - emptyRows;

  const handleReset = () => {
    setHeaders(headers.sort((a, b) => a.id.localeCompare(b.id)));
    setHiddenColumns([]);
  };

  const handleCancel = () => {
    setHeaders(prevHeaders);
    setHiddenColumns(prevHiddenColumns);
    setIsEditing(false);
  };

  const handleConfirm = () => {
    setPrevHeaders(headers);
    localStorage.setItem(`${currTable}Headers_${currTenant}`, JSON.stringify(headers));
    setPrevHiddenColumns(hiddenColumns);
    localStorage.setItem(`${currTable}HiddenColumns_${currTenant}`, JSON.stringify(hiddenColumns));
    setIsEditing(false);
  };

  useEffect(() => {
    setPrevHeaders(headers);
    setPrevHiddenColumns(hiddenColumns);
  }, []);

  return {
    selectedCount,
    numberOfEntries,
    rowsPerPage,
    isEditing,
    first,
    last,
    setIsEditing,
    handleReset,
    handleCancel,
    handleConfirm,
  };
};
