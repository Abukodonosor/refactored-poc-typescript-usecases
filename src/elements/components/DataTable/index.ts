import { hocWrap } from '../../../utils/hocWrapper';
import { useDataTableController } from './hooks/useDataTableController';
import { DataTableView } from './DataTableView';
import { DataTableControllerProps } from './types';

export const DataTable: React.FC<DataTableControllerProps> = hocWrap(
  useDataTableController,
  DataTableView,
);
