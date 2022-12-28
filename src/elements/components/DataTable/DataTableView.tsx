import { DataGrid } from '@mui/x-data-grid';
import { DataTableViewProps } from './types';
import { DataTableStyles } from './style';

/* 
  TODO: decide on datagrid or normal table (write everything by hand) 
  https://mui.com/x/react-data-grid/#commercial-version
*/

export const DataTableView: React.FC<DataTableViewProps> = ({ rows, columns }) => {
  const styles = DataTableStyles();

  return (
    <div className={styles.dataGridWrapper}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
};
