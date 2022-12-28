import React, { useContext } from 'react';

import { DependencyManager } from '../services/DependencyManager';
import { UseCaseCore } from '../useCases/core/useCaseCore';

export const UseCaseManagerContext = React.createContext<UseCaseCore>(
  new UseCaseCore(new DependencyManager()),
);

interface useCaseManagerDependencyOutput {
  execute: () => void;
  api: any; // to be removed
  useCase: any;
}

export function useUseCaseManagerHook<T>(
  abstraction?: string | null,
): useCaseManagerDependencyOutput {
  //T
  const coreManager = useContext<UseCaseCore>(UseCaseManagerContext);

  // extract all api services
  let apiServices = coreManager.getRequestedServices();
  // extract all useCases
  let useCases = coreManager.getRequestedUseCases();

  return {
    execute: () => {
      // this function need to execute:
      // -multi useCases in single event loop tick
      // -single useCase in single event loop tick
      console.log('execute');
    },
    api: apiServices,
    useCase: useCases,
  };
}

interface UseCaseManagerProviderProps {
  managerInstance: UseCaseCore; /// There dependency injection type need to go there
  children: React.ReactNode;
}

export const UseCaseManagerProvider: React.FC<UseCaseManagerProviderProps> = ({
  managerInstance,
  children,
}) => {
  return (
    <UseCaseManagerContext.Provider value={managerInstance}>
      {children}
    </UseCaseManagerContext.Provider>
  );
};
