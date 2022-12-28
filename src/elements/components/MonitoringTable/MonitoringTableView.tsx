import { Box, Paper, TablePagination, Alert, Pagination, Snackbar, TextField } from '@mui/material';
import { MonitoringTableToolbar } from './components/MonitoringTableToolbar';
import { MonitoringTableContent } from './components/MonitoringTableContent';
import { MonitoringTableInputProps } from './types';
import { MonitoringTableStyles } from './style';
import { Text } from '../Text';

export const MonitoringTableView: React.FC<MonitoringTableInputProps> = ({
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
}) => {
  const styles = MonitoringTableStyles({ isEditing });

  return (
    <Box>
      <Snackbar
        open={emptyError}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={handleClose} variant="filled" severity="error">
          The requested page number does not exist!
        </Alert>
      </Snackbar>
      {headers.length && (
        <Paper>
          <MonitoringTableToolbar
            selectedCount={selected.length}
            numberOfEntries={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            emptyRows={emptyRows}
            isEditing={isEditing}
            path={path}
            headers={headers}
            hiddenColumns={hiddenColumns}
            setHeaders={setHeaders}
            setIsEditing={setIsEditing}
            setHiddenColumns={setHiddenColumns}
          />
          <Box className={styles.tableContentWrapper}>
            <MonitoringTableContent
              data={data}
              isEditing={isEditing}
              page={page}
              rowsPerPage={rowsPerPage}
              emptyRows={emptyRows}
              selected={selected}
              headers={headers}
              hiddenColumns={hiddenColumns}
              setHeaders={setHeaders}
              setSelected={setSelected}
              setHiddenColumns={setHiddenColumns}
            />
          </Box>
          <div className={styles.paginationWrapper}>
            <Box>
              <div className={styles.paginationPages}>
                <Pagination
                  color="primary"
                  page={page + 1}
                  count={Math.floor((data.length + rowsPerPage - 1) / rowsPerPage)}
                  shape="rounded"
                  onChange={(_, page) => handleChangePageCustom(page)}
                />
              </div>
              <div className={styles.goToWrapper}>
                <Text fontSize="14px" padding="10px 0 10px 10px">
                  Go to Page
                </Text>
                <TextField
                  className={styles.goToInput}
                  onChange={event => setToPage(Number(event.target.value))}
                  onFocus={handleInputFocus}
                  size="small"
                />
              </div>
            </Box>
            <TablePagination
              labelRowsPerPage={'Show: '}
              rowsPerPageOptions={[5, 10, 25, 50, 100]}
              component="div"
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={(_, page) => handleChangePage(page)}
              onRowsPerPageChange={event => handleChangeRowsPerPage(Number(event.target.value))}
              nextIconButtonProps={{ style: { display: 'none' } }}
              backIconButtonProps={{ style: { display: 'none' } }}
            />
          </div>
        </Paper>
      )}
    </Box>
  );
};
