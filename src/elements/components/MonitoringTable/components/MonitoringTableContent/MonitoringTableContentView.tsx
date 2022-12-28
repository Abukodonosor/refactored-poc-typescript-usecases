import { Checkbox, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { MonitoringTableContentHead } from './components/MonitoringTableContentHead';
import { MonitoringTableContentInputProps } from './types';

export const MonitoringTableContentView: React.FC<MonitoringTableContentInputProps> = ({
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
}) => (
  <TableContainer sx={{ maxHeight: '68vh' }}>
    <Table
      sx={{ minWidth: 750, maxWidth: '99%' }}
      aria-labelledby="tableTitle"
      size={'small'}
      ref={tableElement}
    >
      <>
        {headers.map((_, i) => {
          colGroupId.push(headers[i].id);
        })}
        <colgroup>
          {colGroupId.map((h, index) => {
            return <col key={index + '_col_key'} className={`col-${h}`} />;
          })}
        </colgroup>

        <MonitoringTableContentHead
          headers={headers}
          columns={colGroupId}
          numSelected={selected.length}
          order={order}
          orderBy={orderBy}
          rowCount={data.length}
          tableElement={tableElement}
          isEditing={isEditing}
          hiddenColumns={hiddenColumns}
          setHeaders={setHeaders}
          onSelectAllClick={event => handleSelectAllClick(event.target.checked)}
          onRequestSort={handleRequestSort}
          setHiddenColumns={setHiddenColumns}
        />
        <TableBody>
          {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                   rows.slice().sort(getComparator(order, orderBy)) */}
          {stableSort(data, getComparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row: any, index: number) => {
              const isItemSelected = isSelected(index);

              return (
                <TableRow
                  hover
                  onClick={() => {
                    toDetails(row);
                  }}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.id + '_custom_id_' + index}
                  selected={isItemSelected}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isItemSelected}
                      key={index + 'check_box'}
                      onClick={event => handleClick(event, index)}
                      size="small"
                      inputProps={{
                        'aria-labelledby': `enhanced-table-checkbox-${index}`,
                      }}
                    />
                  </TableCell>

                  {headers.map((h, i) => {
                    return (
                      ((!isEditing && !hiddenColumns.includes(h.id)) || isEditing) && (
                        <TableCell
                          align="left"
                          sx={{
                            padding: i > 0 ? '0px 10px 0px 5px' : '1px 0px 0px 15px',
                            fontSize: '12px',
                          }}
                        >
                          {headers.length > 0 ? row[h.id] : 'N/A'}
                        </TableCell>
                      )
                    );
                  })}
                </TableRow>
              );
            })}
          {emptyRows > 0 && (
            <TableRow
              style={{
                height: 25 * emptyRows,
              }}
            >
              <TableCell colSpan={headers.length + 1} />
            </TableRow>
          )}
        </TableBody>
      </>
    </Table>
  </TableContainer>
);
