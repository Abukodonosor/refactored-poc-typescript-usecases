import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchPageControllerHookInputProps, SearchPageControllerHookOutput } from '../types';
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle';
import { CalendarTodayOutlinedIcon } from '../../../../assets/icons';
import { compacerBlue } from '../style';
import { TextField } from '@mui/material';
import { Text } from 'elements/components';
import { useAppContext } from 'providers';

export const useSearchPageControllerHook =
  ({}: SearchPageControllerHookInputProps): SearchPageControllerHookOutput => {
    const navigate = useNavigate();
    const { appState } = useAppContext();

    const firstQueryParams = ['Date', 'Author', 'ID', 'Status'];
    const timeQueryParams = ['Range', 'Before', 'After', 'Not'];
    const textQueryParams = ['Not', 'Equals', 'Contains'];

    //uses id to track which row it should be in instead of the actual index
    const [dateRanges, setDateRanges]: any[] = useState([[]]);

    /* TODO: these need to be changed to be id based */
    const setFromDate =
      (box: any, row: any) => (event: { getTime: () => string | number | Date } | null) => {
        let date: any[] = [...dateRanges];
        const dateIndex = date[box].findIndex((obj: { id: any }) => obj.id === row);
        if (event === null) {
          date[box][dateIndex].from = null;
          setDateRanges(date);
        } else {
          date[box][dateIndex].from = new Date(event.getTime());
          setDateRanges(date);
        }
      };

    const setToDate =
      (box: any, row: any) => (event: { getTime: () => string | number | Date } | null) => {
        let date = [...dateRanges];
        const dateIndex = date[box].findIndex((obj: { id: any }) => obj.id === row);
        if (event === null) {
          date[box][dateIndex].to = null;
          setDateRanges(date);
        } else {
          date[box][dateIndex].to = new Date(event.getTime());
          setDateRanges(date);
        }
      };
    /* TODO: actually implement query parsing */

    //2D array of objects with queries per box (by position)
    const [firstQuery, setFirstQuery] = useState([[{ id: 0, param: '' }]]);

    const [secondQuery, setSecondQuery] = useState([[{ id: 0, param: '' }]]);

    const [queryBoxes, setQueryBoxes] = useState([0]); //TODO: fill it with references to the individual rows/boxes?

    const selectFirstParam = (event: any, child: any, box: any, row: any) => {
      let data = [...firstQuery];
      let date: any[] = [...dateRanges];
      const objIndex = data[box].findIndex(obj => obj.id === child.props.id);
      const dateIndex = date[box].findIndex((obj: { id: any }) => obj.id === row);
      data[box][objIndex].param = event.target.value;
      setFirstQuery(data);
      if (dateIndex === -1) {
        if (data[box][row].param === 'Date') {
          date[box].push({ id: row, from: new Date(), to: new Date() });
          setDateRanges(date);
        }
      }
    };

    const selectSecondParam = (event: any, child: any, box: any) => {
      let data = [...secondQuery];
      const objIndex = data[box].findIndex(obj => obj.id === child.props.id);
      data[box][objIndex].param = event.target.value;
      setSecondQuery(data);
    };

    function addRow(box: any, row: any) {
      let data = [...firstQuery];
      let data2 = [...secondQuery];
      data[box].push({ id: row + 1, param: '' });
      data2[box].push({ id: row + 1, param: '' });
      setFirstQuery(data);
      setSecondQuery(data2);
    }

    function removeRow(box: any, row: any) {
      let data = [...firstQuery];
      let data2 = [...secondQuery];
      let date: any[] = [...dateRanges];
      const rowParam = data[box][row].param;
      if (data[box].length > 1) {
        data[box].splice(row, 1);
        data2[box].splice(row, 1);
        data[box].forEach((d, i) => (d.id = i));
        data2[box].forEach((d, i) => (d.id = i));
        setFirstQuery(data);
        setSecondQuery(data2);

        if (rowParam === 'Date') {
          const objIndex = date[box].findIndex((obj: { id: any }) => obj.id === row);
          date[box].splice(objIndex, 1);
          setDateRanges(date);
        }
      }
    }

    function addBox(box: any) {
      let data = [...firstQuery];
      let data2 = [...secondQuery];
      let date = [...dateRanges];
      let boxData = [...queryBoxes];
      data.push([{ id: 0, param: '' }]);
      data2.push([{ id: 0, param: '' }]);
      date.push([]);
      boxData.push(box + 1);
      setFirstQuery(data);
      setSecondQuery(data2);
      setDateRanges(date);
      setQueryBoxes(boxData);
    }

    const removeBox = (box: any) => {
      let data = [...firstQuery];
      let data2 = [...secondQuery];
      let date = [...dateRanges];
      let boxData = [...queryBoxes];
      if (queryBoxes.length > 1) {
        data.splice(box, 1);
        data2.splice(box, 1);
        date.splice(box, 1);
        boxData.splice(box, 1);
        setFirstQuery(data);
        setSecondQuery(data2);
        setDateRanges(date);
        setQueryBoxes(boxData);
      }
    };

    /* TODO: eventually save/parse the values somehow? */
    function queryValues(box: any, row: any) {
      const firstParam = firstQuery[box][row].param;
      const prevParam = secondQuery[box][row].param;

      /* TODO: need to put in constraints like to cannot be > from for ranges */
      if (firstParam === 'Date' && prevParam === 'Range') {
        const objIndex = dateRanges[box].findIndex((obj: { id: any }) => obj.id === row);
        return (
          <div style={{ display: 'inline-flex' }}>
            <Text variant="subtitle2" marginTop="7px" marginRight={2}>
              From:
            </Text>
            <DateTimePicker
              disableClock
              onChange={setFromDate(box, row)}
              value={dateRanges[box][objIndex].from}
              format={'dd.MM.yyyy HH:mm:ss'}
              calendarIcon={<CalendarTodayOutlinedIcon fill={compacerBlue} />}
            />
            <Text variant="subtitle2" marginTop="7px" marginRight={2} marginLeft="24px">
              To:
            </Text>
            <DateTimePicker
              disableClock
              onChange={setToDate(box, row)}
              value={dateRanges[box][objIndex].to}
              format={'dd.MM.yyyy HH:mm:ss'}
              calendarIcon={<CalendarTodayOutlinedIcon fill={compacerBlue} />}
            />
          </div>
        );
      }

      if (
        firstParam === 'Date' &&
        (prevParam === 'Before' || prevParam === 'After' || prevParam === 'Not')
      ) {
        const objIndex = dateRanges[box].findIndex((obj: { id: any }) => obj.id === row);
        return (
          <DateTimePicker
            disableClock
            onChange={setFromDate(box, row)}
            value={dateRanges[box][objIndex].from}
            format={'dd.MM.yyyy HH:mm:ss'}
            calendarIcon={<CalendarTodayOutlinedIcon fill={compacerBlue} />}
          />
        );
      }

      if (textQueryParams.includes(prevParam)) {
        return (
          <TextField
            sx={{
              '.MuiInputBase-root': { height: '34px', mt: '2px' },
              backgroundColor: '#F5F8FA',
              '.MuiOutlinedInput-notchedOutline': { border: 'none' },
              width: '42.5vw',
            }}
          />
        );
      }
    }

    const parseQueries = () => {
      // console.log(firstQuery[0][0].param + secondQuery[0][0].param + fromDate.toLocaleDateString() + " " + fromDate.getTime())
      console.log('Box 1:');
      console.log(dateRanges);
    };

    function findDateID(box: any, row: any) {
      const rowIndex = dateRanges[box].findIndex((obj: { id: any }) => obj.id === row);
    }

    useEffect(() => {
      if (!sessionStorage.getItem('authenticated') && !localStorage.getItem('authenticated')) {
        navigate('/');
      }
    }, []);

    return {
      pinned: appState.pinnedMenu,
      firstQuery: firstQuery,
      secondQuery: secondQuery,
      queryBoxes: queryBoxes,
      timeQueryParams: timeQueryParams,
      firstQueryParams: firstQueryParams,
      textQueryParams: textQueryParams,

      selectFirstParam: selectFirstParam,
      selectSecondParam: selectSecondParam,
      queryValues: queryValues,
      addRow: addRow,
      addBox: addBox,
      removeRow: removeRow,
      removeBox: removeBox,
      parseQueries: parseQueries,
    };
  };
