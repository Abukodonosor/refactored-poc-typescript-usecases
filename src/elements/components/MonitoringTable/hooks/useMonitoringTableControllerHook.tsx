import { useState, useEffect, FocusEventHandler } from 'react';
import { Tooltip } from '@mui/material';
import {
  HeaderType,
  MonitoringTableControllerHookInputProps,
  MonitoringTableControllerHookOutput,
} from '../types';
import {
  HourglassEmptyIcon,
  LocalShippingIcon,
  DoneIcon,
  ErrorOutlineIcon,
  ForwardToInboxOutlinedIcon,
  MarkEmailReadOutlinedIcon,
  TaskOutlinedIcon,
  ManageHistoryOutlinedIcon,
} from '../../../../assets/icons';
import { useLocation } from 'react-router-dom';

const currTenant = sessionStorage.getItem('tenant');

export const useMonitoringTableControllerHook = ({
  data,
}: MonitoringTableControllerHookInputProps): MonitoringTableControllerHookOutput => {
  const [selected, setSelected] = useState<any[]>([]);
  const [toPage, setToPage] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [emptyError, setEmptyError] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [headers, setHeaders] = useState<HeaderType[]>([]);
  const location = useLocation();
  const path = location.pathname.split('/');
  const currTable = path[path.length - 1];
  const [hiddenColumns, setHiddenColumns] = useState<string[]>(
    JSON.parse(localStorage.getItem(`${currTable}HiddenColumns_${currTenant}`) || '[]'),
  );
  const headerStorage: HeaderType[] = JSON.parse(
    localStorage.getItem(`${currTable}Headers_${currTenant}`) || '[]',
  );

  /* TODO: I think there's a bug here due to my "hack" rendering */
  useEffect(() => {
    data.forEach(row => {
      switch (row.status) {
        default:
          return row.status;
        case 'waiting':
          return (row.status = (
            <Tooltip title={row.status} placement="right-start" arrow>
              <HourglassEmptyIcon maxHeight="20px" display="flex" />
            </Tooltip>
          ));

        case 'in transit':
          return (row.status = (
            <Tooltip title={row.status} placement="right-start" arrow>
              <LocalShippingIcon maxHeight="20px" display="flex" />
            </Tooltip>
          ));

        case 'arrived':
        case 'resolved':
          return (row.status = (
            <Tooltip title={row.status} placement="right-start" arrow>
              <DoneIcon key={row.status} maxHeight="20px" display="flex" fill="green" />
            </Tooltip>
          ));

        case 'missing':
          return (row.status = (
            <Tooltip title={row.status} placement="right-start" arrow>
              <ErrorOutlineIcon maxHeight="20px" display="flex" fill="red" />
            </Tooltip>
          ));

        case 'sent':
          return (row.status = (
            <Tooltip title={row.status} placement="right-start" arrow>
              <ForwardToInboxOutlinedIcon maxHeight="20px" display="flex" fill="blue" />
            </Tooltip>
          ));

        case 'read':
          return (row.status = (
            <Tooltip title={row.status} placement="right-start" arrow>
              <MarkEmailReadOutlinedIcon maxHeight="20px" display="flex" fill="green" />
            </Tooltip>
          ));

        case 'created':
          return (row.status = (
            <Tooltip title={row.status} placement="right-start" arrow>
              <TaskOutlinedIcon maxHeight="20px" display="flex" fill="green" />
            </Tooltip>
          ));

        case 'modified':
          return (row.status = (
            <Tooltip title={row.status} placement="right-start" arrow>
              <ManageHistoryOutlinedIcon maxHeight="20px" display="flex" />
            </Tooltip>
          ));
      }
    });
  }, [data]);

  /* this one for the built in */
  const handleChangePage = (page: number) => {
    setPage(page);
  };

  /* this one for our own */
  const handleChangePageCustom = (page: number) => {
    setPage(page - 1);
  };

  let maxPage = Math.floor((data.length + rowsPerPage - 1) / rowsPerPage);

  const handlePageInput = (value: number) => {
    if (value > maxPage) {
      setEmptyError(true);
    } else if (value === 0 || value === null) {
      setPage(0);
      setEmptyError(false);
    } else {
      setPage(value);
      setEmptyError(false);
    }
  };

  const handleInputFocus: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> = event => {
    event.currentTarget.select();
  };

  const handleChangeRowsPerPage = (rowsPerPage: number) => {
    setRowsPerPage(rowsPerPage);
    setPage(0);
  };

  const handleClose = () => {
    setEmptyError(false);
  };

  useEffect(() => {
    const timeOutId = setTimeout(() => handlePageInput(toPage), 300);
    return () => clearTimeout(timeOutId);
  }, [toPage]);

  useEffect(() => {
    if (
      localStorage.getItem(`${currTable}Headers_${currTenant}`) === null &&
      !headerStorage.length
    ) {
      const headerArray: HeaderType[] = [];

      Object.keys(data[0]).forEach(k => {
        headerArray.push({
          id: k,
          label: k.charAt(0).toUpperCase() + k.slice(1),
        });
      });
      localStorage.setItem(`${currTable}Headers_${currTenant}`, JSON.stringify(headerArray));
      localStorage.setItem(`${currTable}DefaultHeaders_${currTenant}`, JSON.stringify(headerArray));
    }

    setHeaders(headerStorage);
  }, [headerStorage.length]);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  return {
    data,
    emptyError,
    selected,
    rowsPerPage,
    page,
    emptyRows,
    isEditing,
    path,
    headers,
    hiddenColumns,
    handleClose,
    setIsEditing,
    setSelected,
    handleChangePageCustom,
    setToPage,
    handleInputFocus,
    handleChangePage,
    handleChangeRowsPerPage,
    setHeaders,
    setHiddenColumns,
  };
};
