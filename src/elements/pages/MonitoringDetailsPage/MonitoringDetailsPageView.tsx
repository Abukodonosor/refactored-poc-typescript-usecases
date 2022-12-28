import {
  Box,
  Button,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import {
  CalendarTodayOutlinedIcon,
  DoneIcon,
  TaskOutlinedIcon,
  RefreshOutlinedIcon,
  PlayCircleFilledOutlinedIcon,
  DownloadIcon,
} from '../../../assets/icons';
import { MonitoringBar } from '../../components/MonitoringBar';
import { Text } from 'elements/components';
import { MonitoringDetailsPageInputProps } from './types';
import { ListBox, MonitoringDetailsStyles, StyledCard, StyledList } from './style';
import { Wrapper } from 'elements/components';
import { useTranslationHook } from 'hooks';

export const MonitoringDetailsPageView: React.FC<MonitoringDetailsPageInputProps> = ({
  rowData,
  header,
  dataKeys,
  pinned,
}) => {
  const { translationKey } = useTranslationHook();
  const styles = MonitoringDetailsStyles();

  const eventRows = [
    {
      Status: <DoneIcon height="20px" display="flex" fill="#008000" />,
      Event: 'Archived',
      Timestamp: '05.09.2022 15:12:20',
      Author: 'edbic',
    },
    {
      Status: <DoneIcon height="20px" display="flex" fill="#008000" />,
      Event: 'Secured',
      Timestamp: '04.09.2022 13:30:14',
      Author: 'edbic',
    },
    {
      Status: <RefreshOutlinedIcon height="20px" display="flex" />,
      Event: 'Converted',
      Timestamp: '04.09.2022 13:03:04',
      Author: 'edbic',
    },
    {
      Status: <PlayCircleFilledOutlinedIcon height="20px" display="flex" />,
      Event: 'Forwarded',
      Timestamp: '03.09.2022 11:01:43',
      Author: 'edbic',
    },
    {
      Status: <TaskOutlinedIcon height="20px" display="flex" fill="#008000" />,
      Event: 'Created',
      Timestamp: '03.09.2022 11:01:43',
      Author: 'edbic',
    },
  ];

  return (
    <Wrapper pinned={pinned}>
      <Box className={styles.monitoringDetails}>
        <MonitoringBar />
        <Box className={styles.events} sx={{ width: pinned ? '25vw' : '30vw' }}>
          <StyledCard height="78.1vh" noPadding>
            <CardHeader
              className={styles.eventsHeader}
              action={
                <Button aria-label="table option">
                  <CalendarTodayOutlinedIcon marginRight={0.5} marginBottom={0.5} />
                  <Text>{translationKey('Table options')}</Text>
                </Button>
              }
              title={
                <Text paddingBottom={2} variant="h6">
                  {translationKey('Process events')}
                </Text>
              }
            />
            <CardContent className={styles.eventsContent}>
              <Table size="small">
                <colgroup>
                  <col style={{ width: '5%' }} />
                  <col style={{ width: '25%' }} />
                  <col style={{ width: '40%' }} />
                  <col style={{ width: '30%' }} />
                </colgroup>
                <TableHead>
                  <TableRow>
                    {header.map((h, i) => (
                      <TableCell className={styles.eventsTableCell}>{header[i]}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {/* TODO: this isn't dynamic but probably should be */}
                  {eventRows.map(r => (
                    <TableRow>
                      <TableCell className={styles.cellStyles}>{r.Status}</TableCell>
                      <TableCell className={styles.cellStyles}>{r.Event}</TableCell>
                      <TableCell className={styles.cellStyles}>{r.Timestamp}</TableCell>
                      <TableCell className={styles.cellStyles}>{r.Author}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </StyledCard>
        </Box>
        <Box className={styles.rightBox} sx={{ width: pinned ? '59vw' : '64.2vw' }}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={12}>
              <StyledCard height="30vh">
                <CardHeader
                  title={
                    <Box display="flex">
                      <Text variant="h6">Attributes</Text>
                      <Divider className={styles.verticalDivider} orientation="vertical" flexItem />
                      <Text variant="h6">File information</Text>
                    </Box>
                  }
                />
                <CardContent>
                  <StyledList height="20vh" listItemMargin="0 0 10px 0">
                    {dataKeys
                      .filter(v => v !== 'status' && v !== 'ID')
                      .map(d => (
                        <li key={d}>
                          <Box display="flex">
                            <ListBox width="10%">
                              <Text variant="h2">{d.charAt(0).toUpperCase() + d.slice(1)}</Text>
                            </ListBox>
                            <ListBox>
                              <Text variant="body2">{rowData[d]}</Text>
                            </ListBox>
                          </Box>
                        </li>
                      ))}
                  </StyledList>
                </CardContent>
              </StyledCard>
            </Grid>
            <Grid item xs={6} md={6}>
              <StyledCard height="30vh">
                <CardHeader
                  title={
                    <Box display="flex">
                      <Text variant="h6">Attributes</Text>
                      <Divider className={styles.verticalDivider} orientation="vertical" flexItem />
                      <Text variant="h6">Source File</Text>
                    </Box>
                  }
                />
                <CardContent>
                  <StyledList>
                    <li>
                      <Box display="flex">
                        <ListBox width="20%" hasTopPadding>
                          <Text variant="h2">Output file</Text>
                        </ListBox>
                        <ListBox width="10%" hasTopPadding>
                          <Text variant="body2">600B</Text>
                        </ListBox>
                        <Button className={styles.buttonStyles} variant="contained" size="small">
                          <DownloadIcon padding={0.4} fill="#fff" />
                        </Button>
                      </Box>
                    </li>
                    <li>
                      <Box display="flex">
                        <ListBox width="20%" hasTopPadding>
                          <Text variant="h2">Extra file</Text>
                        </ListBox>
                        <ListBox width="10%" hasTopPadding>
                          <Text variant="body2">5929B</Text>
                        </ListBox>
                        <Button className={styles.buttonStyles} variant="contained" size="small">
                          <DownloadIcon padding={0.4} fill="#fff" />
                        </Button>
                      </Box>
                    </li>
                  </StyledList>
                </CardContent>
              </StyledCard>
            </Grid>
            <Grid item xs={6} md={6}>
              <StyledCard height="30vh">
                <CardHeader
                  title={
                    <Box display="flex">
                      <Text variant="h6">Attributes</Text>
                      <Divider className={styles.verticalDivider} orientation="vertical" flexItem />
                      <Text variant="h6">Attachment</Text>
                    </Box>
                  }
                />
                <CardContent>
                  <StyledList>
                    <li>
                      <Box display="flex">
                        <ListBox width="20%" hasTopPadding>
                          <Text variant="h2">File</Text>
                        </ListBox>
                        <ListBox width="10%" hasTopPadding>
                          <Text fontSize="15px" variant="body2">
                            326B
                          </Text>
                        </ListBox>
                        <Button className={styles.buttonStyles} variant="contained" size="small">
                          <DownloadIcon padding={0.4} fill="#fff" />
                        </Button>
                      </Box>
                    </li>
                    <li>
                      <Box display="flex">
                        <ListBox width="20%" hasTopPadding>
                          <Text variant="h2">LOGO</Text>
                        </ListBox>
                        <ListBox width="10%" hasTopPadding>
                          <Text fontSize="15px" variant="body2">
                            300MB
                          </Text>
                        </ListBox>
                        <Button className={styles.buttonStyles} variant="contained" size="small">
                          <DownloadIcon padding={0.4} fill="#fff" />
                        </Button>
                      </Box>
                    </li>
                  </StyledList>
                </CardContent>
              </StyledCard>
            </Grid>
            <Grid item xs={6} md={12}>
              <StyledCard height="14.8vh">
                <CardHeader
                  title={
                    <Box display="flex">
                      <Text variant="h6">Attributes</Text>
                      <Divider className={styles.verticalDivider} orientation="vertical" flexItem />
                      <Text variant="h6">Extra</Text>
                    </Box>
                  }
                />
                <CardContent>Placeholder</CardContent>
              </StyledCard>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Wrapper>
  );
};
