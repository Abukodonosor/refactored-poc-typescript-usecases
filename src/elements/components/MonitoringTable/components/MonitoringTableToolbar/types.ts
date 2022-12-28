import React from 'react';
import { HeaderType } from '../../types';

export interface MonitoringTableToolbarControllerHookInputProps {
  selectedCount: number;
  numberOfEntries: number;
  rowsPerPage: number;
  page: number;
  emptyRows: number;
  isEditing: boolean;
  path: string[];
  headers: HeaderType[];
  hiddenColumns: string[];
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  setHeaders: React.Dispatch<React.SetStateAction<HeaderType[]>>;
  setHiddenColumns: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface MonitoringTableToolbarControllerHookOutput {
  selectedCount: number;
  numberOfEntries: number;
  rowsPerPage: number;
  isEditing: boolean;
  first: number;
  last: number;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  handleReset: () => void;
  handleCancel: () => void;
  handleConfirm: () => void;
}

export interface MonitoringTableToolbarInputProps {
  selectedCount: number;
  numberOfEntries: number;
  rowsPerPage: number;
  isEditing: boolean;
  first: number;
  last: number;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  handleReset: () => void;
  handleCancel: () => void;
  handleConfirm: () => void;
}
