import { DependencyManager } from 'services/DependencyManager';
import { UseCaseBase } from './useCaseBase';

// interface to dynamically extract useCase from DepInjection
interface UseCaseMap {
  [key: string]: new (injector: DependencyManager) => UseCaseBase<any, any>;
}

interface DependencyMap {
  [key: string]: any;
}

interface UseCaseClass {}
interface apiService {}

export class UseCaseCore {
  // * Instance of DepInjection
  private injector: DependencyManager;

  /**
   *
   * @param dependencyManager - dependency injection instance
   */
  constructor(dependencyManager: DependencyManager) {
    this.injector = dependencyManager;
  }

  /**
   * Register useCase to depManager (depInjection)
   *
   * @param key - name of useCase inside depInjection
   * @param useCaseClass - instance of the useCase
   */
  registerUseCase(key: string, useCaseClass: UseCaseClass) {
    this.injector.registerUseCaseDependency(key, useCaseClass);
  }

  /**
   * Register apiService to depManager (depInjection)
   *
   * @param key - name of service inside depInjection
   * @param service - service instance
   */
  registerService(key: string, service: apiService) {
    this.injector.registerApiDependency(key, service);
  }

  /**
   *
   * @returns The map of all services
   */
  getRequestedServices(): DependencyMap {
    return this.injector.getApiDependencies();
  }

  /**
   *
   * @returns The map of all useCases
   */
  getRequestedUseCases(): DependencyMap {
    return this.injector.getUseCaseDependencies();
  }
}

export default UseCaseCore;
