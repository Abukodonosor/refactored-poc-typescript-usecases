import { useContext } from 'react';
import { createContext } from 'react';

const VesselContext = createContext<any>({
  rowData() {
    throw new Error('Missing provider');
  },
  registerMonitor() {
    throw new Error('Missing provider');
  },
  setRowData() {
    throw new Error('Missing provider');
  },
});

const vesselContextValue = () => {
  const internal = {
    monitors: new Set(),
    rowData: null,
  };

  return {
    get rowData() {
      return internal.rowData;
    },
    registerMonitor(handler: any) {
      internal.monitors.add(handler);
      return () => internal.monitors.delete(handler);
    },
    setRowData(rowData: any) {
      internal.rowData = rowData;
      // eslint-disable-next-line
      for (const monitor of internal.monitors) {
        console.log(monitor);
      }
    },
  };
};

export const useVessel = () => useContext(VesselContext);

// Think this is not used anywhere to provide data correctly
export const VesselProvider = ({ children }: any): JSX.Element => {
  return <VesselContext.Provider value={vesselContextValue()}>{children}</VesselContext.Provider>;
};
