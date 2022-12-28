import { ListItemIcon, MenuItem } from '@mui/material';
import { Text } from '../Text';
import { DropdownStyles, StyledSelect } from './style';
import { DropdownInputProps } from './types';

export const Dropdown: React.FC<DropdownInputProps> = ({ value, options, height, onChange }) => {
  const styles = DropdownStyles();

  return (
    <StyledSelect
      inputProps={{ className: styles.selectInput }}
      height={height}
      value={value}
      onChange={onChange}
    >
      {options.map(option => (
        <MenuItem value={option.value}>
          {option.icon && <ListItemIcon className={styles.icon}>{option.icon}</ListItemIcon>}
          <Text>{option.label}</Text>
        </MenuItem>
      ))}
    </StyledSelect>
  );
};
