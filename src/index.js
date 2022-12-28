import React from 'react';
import ReactDOM from 'react-dom/client';

// Newly created Providers
import { VesselProvider, AppProvider, AlertProvider } from 'providers';
import { MaterialThemeProvider } from 'providers/ThemeProvider';

import { EdpemApp } from 'App';

// Translation initialized
import 'services/i18nTranslationService';
import { UseCaseManagerProvider } from 'providers';
import { ManagerService } from 'services/ManagerService';

const managerInstance = ManagerService();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <MaterialThemeProvider>
      <UseCaseManagerProvider managerInstance={managerInstance}>
        <AppProvider>
          <AlertProvider>
            <VesselProvider>
              <EdpemApp />
            </VesselProvider>
          </AlertProvider>
        </AppProvider>
      </UseCaseManagerProvider>
    </MaterialThemeProvider>
  </>,
);
