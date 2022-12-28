import {
  Button,
  Divider,
  FormControl,
  IconButton,
  MenuItem,
  Paper,
  Select,
  Switch,
  Toolbar,
} from '@mui/material';
import { Box } from '@mui/system';
import FormControlLabel from '@mui/material/FormControlLabel';
import React from 'react';
import { SearchPageInputProps } from './types';
import { DeleteIcon, BookmarkBorderIcon, AddIcon, CodeIcon } from '../../../assets/icons';
import { SearchPageStyle } from './style';
import { Wrapper, Dropdown, Text } from 'elements/components';

export const SearchPageView: React.FC<SearchPageInputProps> = ({
  pinned,
  firstQuery,
  secondQuery,
  queryBoxes,
  timeQueryParams,
  firstQueryParams,
  textQueryParams,

  selectFirstParam,
  selectSecondParam,
  queryValues,
  addRow,
  addBox,
  removeRow,
  removeBox,
  parseQueries,
}) => {
  const styles = SearchPageStyle();

  if (!(sessionStorage.getItem('authenticated') || localStorage.getItem('authenticated'))) {
    return null;
  }

  return (
    <Wrapper pinned={pinned}>
      <Box className={styles.box}>
        <Paper className={styles.paper}>
          <Text padding="8px" fontSize="18px" color="#3A3952">
            Search conditions
          </Text>
          <Divider />
          {queryBoxes.map((t: any, i: any) => {
            return (
              <>
                <Box className={styles.searchQueryBox} id={i}>
                  {firstQuery[i].map((q: any, i2: any) => {
                    return (
                      <div className={styles.searchQueryRow} id={q}>
                        <FormControl size="small" className={styles.formLabel} sx={{ mt: '7px' }}>
                          <Dropdown
                            value={q.param}
                            options={firstQueryParams.map(param => ({
                              value: param,
                              label: param,
                            }))}
                            onChange={(event, child) => selectFirstParam(event, child, i, i2)}
                          />
                        </FormControl>
                        {/* TODO: these parameters need to change based on what was chosen before? need new states? */}
                        <FormControl size="small" className={styles.formLabel} sx={{ mt: '7px' }}>
                          <Dropdown
                            value={secondQuery[i][i2].param}
                            options={[
                              ...(q.param === 'Date' || q.param === 'Timestamp'
                                ? timeQueryParams
                                : textQueryParams),
                            ].map(param => ({ value: param, label: param }))}
                            onChange={(event, child) => selectSecondParam(event, child, i)}
                          />
                        </FormControl>
                        <div className="queryValues">{queryValues(i, i2)}</div>
                        <div className={styles.logicButton}>
                          {i2 < firstQuery[i].length - 1 ? (
                            <FormControl size="small" className={styles.logicSelect}>
                              {/* TODO: think about how to handle and/or, should it be saved as a state too? */}
                              <Dropdown
                                options={['And', 'Or'].map(el => ({ value: el, label: el }))}
                                height="30px"
                              />
                            </FormControl>
                          ) : (
                            <Button
                              onClick={() => addRow(i, i2)}
                              variant="contained"
                              size="small"
                              className={styles.addRow}
                              endIcon={<AddIcon />}
                            >
                              <Text variant="subtitle2">Add</Text>
                            </Button>
                          )}
                          <IconButton onClick={() => removeRow(i, i2)} sx={{ bottom: 2 }}>
                            <DeleteIcon fill="#ff0000" />
                          </IconButton>
                        </div>
                      </div>
                    );
                  })}
                  <div style={{ position: 'relative' }}>
                    <Button
                      color="error"
                      variant="contained"
                      onClick={() => removeBox(i)}
                      className={styles.deleteBox}
                    >
                      <DeleteIcon fill="#fff" width="18px" />
                    </Button>
                  </div>
                </Box>
                <div className="bindingButtons">
                  {i < queryBoxes.length - 1 ? (
                    <FormControl size="small" className={styles.formControl}>
                      <Dropdown
                        options={['And', 'Or'].map(el => ({ value: el, label: el }))}
                        height="30px"
                      />
                    </FormControl>
                  ) : (
                    <Button
                      onClick={() => addBox(i)}
                      variant="contained"
                      className={styles.addBox}
                      startIcon={<AddIcon bottom={5} />}
                    >
                      <Text variant="subtitle2">Add new</Text>
                    </Button>
                  )}
                </div>
              </>
            );
          })}
        </Paper>
        {/* TODO: toggle expert mode here, but there's nothing to toggle to yet */}
        <Toolbar variant="dense" className={styles.toolbar}>
          <FormControlLabel
            control={<Switch />}
            label={
              <Text variant="subtitle2">
                <CodeIcon maxHeight="16px" verticalAlign="text-top" />
                Expert Mode
              </Text>
            }
          />
          <Button className={styles.save} startIcon={<BookmarkBorderIcon />}>
            <Text variant="subtitle2">Save</Text>
          </Button>
          <Button onClick={parseQueries} variant="contained" sx={{ textTransform: 'none' }}>
            <Text variant="subtitle2">Show results (100)</Text>
          </Button>
        </Toolbar>
      </Box>
    </Wrapper>
  );
};
