import { UseCaseCore } from '../useCases/core/useCaseCore';
import { DependencyManager } from './DependencyManager';

import { apiUserManagement } from '../gen/user-management/apiUserManagement';
import { apiSqlStorage } from '../gen/sql-storage-not-needed/apiSqlStorage';
import { apiExtractor } from '../gen/extractor/apiExtractor';
import { apiGateway } from '../gen/api-gateway/apiGateway';

import { CheckUserCredentialsUseCase } from 'useCases/userDomain/CheckUserCredentialsUseCase';
import { DemoCheckUserPrivilegesUseCase } from 'useCases/userDomain/DemoCheckUserPrivilegesUseCase';

export const ManagerService = (): UseCaseCore => {
  // * Initialize the dependencyInjector
  const DepInjectionManager = new DependencyManager();

  // * Init the Core
  const Instance = new UseCaseCore(DepInjectionManager);

  // * Register api layer services
  Instance.registerService('user-management', new apiUserManagement());
  Instance.registerService('storage', new apiSqlStorage());
  Instance.registerService('extractor', new apiExtractor());
  Instance.registerService('api-gateway', new apiGateway());

  // * DEMO useCases
  // * Register useCases initialization (new useCases need to be added on the top )
  // * priority of the useCases is *important for now
  Instance.registerUseCase(
    DemoCheckUserPrivilegesUseCase.useCaseName,
    new DemoCheckUserPrivilegesUseCase(DepInjectionManager),
  );
  Instance.registerUseCase(
    CheckUserCredentialsUseCase.useCaseName,
    new CheckUserCredentialsUseCase(DepInjectionManager),
  );

  // * load all useCases for Production

  // *TO*DO Dynamic insert useCases
  // *TO*DO Make Generator function to initialize useCases (ps: pass just class definition || keep the instance but make dependency much more strict)

  // to-be-removed: example of api call
  // console.log(DepInjectionManager.getUseCaseDependencies()['CheckUserCredentials'].execute({email:'asdasd', password: 'asdasd'}))

  return Instance;
};
