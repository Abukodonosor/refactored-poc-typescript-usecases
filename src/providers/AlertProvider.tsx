import { useState, createContext, useContext, useRef } from 'react';
import { Box, Stack } from '@mui/material';
import { SlideAlert } from 'elements/components/SlideAlert';
import { SlideAlertType } from 'elements/components/SlideAlert/types';

interface AlertProviderInputProps {
  children: React.ReactNode;
}

interface SlideAlertContextValue {
  createSlideAlert: ({ type, text }: SlideAlertType) => void;
}

export const SlideAlertContext = createContext<SlideAlertContextValue>({} as any);

export const useSlideAlert = () => useContext(SlideAlertContext);

export const AlertProvider = ({ children }: AlertProviderInputProps) => {
  const [alerts, setAlerts] = useState<SlideAlertType[]>([]);
  const stackRef = useRef<HTMLDivElement>();

  const createSlideAlert = ({ type, text }: SlideAlertType) => {
    const id = String(Math.round(Math.random() * Date.now()));
    setAlerts(prevValue => [...prevValue, { id, type, text }]);
  };

  return (
    <SlideAlertContext.Provider value={{ createSlideAlert }}>
      <Box position="fixed" right="0" bottom="0" zIndex="9999">
        <Stack ref={stackRef}>
          {alerts.map(({ id, type, text }) => (
            <SlideAlert
              key={id}
              type={type}
              text={text}
              handleAnimationEnd={event => event.currentTarget.remove()}
            />
          ))}
        </Stack>
      </Box>
      {children}
    </SlideAlertContext.Provider>
  );
};
