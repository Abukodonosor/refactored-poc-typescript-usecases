import { useEffect, useState } from 'react';
import { useVessel } from '../providers/VesselProvider';

export const useVesselData = () => {
  const vesselContext = useVessel();
  const [rowData, setRowData] = useState(() => vesselContext.rowData);
  useEffect(() => vesselContext.registerMonitor(setRowData), [vesselContext]);

  return rowData;
};
