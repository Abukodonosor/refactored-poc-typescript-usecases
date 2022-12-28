import { columns, rows } from '../mockedData';
import { DataTableControllerProps, DataTableViewProps } from '../types';

export const useDataTableController = (props: DataTableControllerProps): DataTableViewProps => {
  return { columns, rows };
};
