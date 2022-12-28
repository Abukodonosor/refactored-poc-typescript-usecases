import {
  Box,
  Checkbox,
  IconButton,
  SortDirection,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import { MonitoringTableContentHeadInputProps } from './types';
import { MonitoringTableContentHeadStyles, StyledTableCell } from './style';
import {
  DragIndicatorIcon,
  VisibilityIcon,
  VisibilityOffIcon,
} from '../../../../../../../assets/icons';

export const MonitoringTableContentHeadView: React.FC<MonitoringTableContentHeadInputProps> = ({
  activeIndex,
  order,
  orderBy,
  numSelected,
  rowCount,
  headers,
  isEditing,
  isDragging,
  hiddenColumns,
  setActiveIndex,
  onRequestSort,
  onSelectAllClick,
  handleDragStart,
  handleDragOver,
  handleDragEnd,
  setIsDragging,
  handleVisibilityChange,
}) => {
  const styles = MonitoringTableContentHeadStyles();

  return (
    <TableHead>
      <TableRow>
        <TableCell
          padding="checkbox"
          sx={{
            borderStyle: 'solid',
            borderWidth: '1px 2px 1px 0px',
            borderColor: 'rgba(0, 0, 0, 0.2)',
            backgroundColor: '#F7F7F7',
          }}
        >
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            size="small"
            inputProps={{
              'aria-label': 'select all vessels',
            }}
          />
        </TableCell>
        {headers.map(
          (headCell, i) =>
            ((!isEditing && !hiddenColumns.includes(headCell.id)) || isEditing) && (
              <StyledTableCell
                key={headCell.id}
                align={'left'}
                sortDirection={orderBy === headCell.id ? (order as SortDirection) : false}
                onDragStart={() => handleDragStart(headCell.id)}
                onDragOver={handleDragOver}
                onDragEnd={handleDragEnd}
                data-drag-id={headCell.id}
                draggable={isDragging && isEditing}
              >
                <Box display="flex" alignItems="center">
                  {isEditing && (
                    <Box display="flex" alignItems="center">
                      <IconButton
                        onMouseDown={() => setIsDragging(true)}
                        onMouseLeave={() => setIsDragging(false)}
                      >
                        <DragIndicatorIcon fill="#6d6d6d" />
                      </IconButton>
                      <IconButton
                        sx={{ padding: 0, mr: 1 }}
                        onClick={() => handleVisibilityChange(headCell.id)}
                      >
                        {hiddenColumns.find(hiddenColumn => hiddenColumn === headCell.id) ? (
                          <VisibilityOffIcon fill="#00417d" opacity={0.2} />
                        ) : (
                          <VisibilityIcon fill="#00417d" />
                        )}
                      </IconButton>
                    </Box>
                  )}

                  <div
                    onMouseDown={() => setActiveIndex(i + 1)}
                    className={`${styles.resizeHandle} ${
                      activeIndex === i + 1 ? 'active' : 'idle'
                    }`}
                  />

                  {i > 0 && !isEditing ? (
                    <TableSortLabel
                      active={orderBy === headCell.id}
                      direction={orderBy === headCell.id ? (order as 'desc' | 'asc') : 'asc'}
                      onClick={() => onRequestSort(headCell.id)}
                    >
                      {headCell.label}
                      {orderBy === headCell.id && (
                        <Box component="span" sx={visuallyHidden}>
                          {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                        </Box>
                      )}
                    </TableSortLabel>
                  ) : (
                    headCell.label
                  )}
                </Box>
              </StyledTableCell>
            ),
        )}
      </TableRow>
    </TableHead>
  );
};
