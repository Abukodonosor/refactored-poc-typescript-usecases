/**
 * BASIC IDEA: (this text exist before the service is implemented, may be outDated!!!)
 *
 * If we want to build depInjManager, we need to decide which kind of dep we want to distribute and where.
 *
 * 1st. API layer to be present inside depInjManager
 * 2nd. UseCases to be present inside depInjManager ()
 *
 * Usage of this depManager will be inside every useCase....
 *
 *
 * BASE (closure):
 * *depInjManager will have all instances of every useCase and every API service,
 * we will use just references and call Execute methods inside useCases
 *
 *
 *
 * CALLER (function || hook):
 * customHook or executor function, which will declare which useCase to be used and there parameters
 * *after on executor we call .exec() function, which trigger function which is passed inside depInjManager
 *
 *
 */

interface DependencyMap {
  [key: string]: any;
}

export class DependencyManager {
  // * Map of all API service instances
  private apiDependencies: DependencyMap;
  // * Map of all useCases instances
  private useCaseDependencies: DependencyMap;

  // * Constructor to init empty maps or it can be done on the way like its defined above
  constructor() {
    this.apiDependencies = {};
    this.useCaseDependencies = {};
  }

  public registerUseCaseDependency(key: string, dependency: any) {
    this.useCaseDependencies[key] = dependency;
  }

  public registerApiDependency(key: string, dependency: any) {
    this.apiDependencies[key] = dependency;
  }

  /**
   *
   * @param key - name of the useCase inside depInjection
   * @returns the instance of specific useCase
   */
  public getUseCaseDependency(key: string) {
    if (!this.useCaseDependencies.has(key)) {
      throw new Error(`Dependency with key ${key} not found in use case dependencies map`);
    }

    return this.useCaseDependencies.get(key);
  }

  /**
   *
   * @param key - name of specific Service inside depInjection
   * @returns the instance of specific service
   */
  public getApiDependency(key: string) {
    if (!this.apiDependencies.has(key)) {
      throw new Error(`Dependency with key ${key} not found in API dependencies map`);
    }

    return this.apiDependencies.get(key);
  }

  public getApiDependencies(): DependencyMap {
    return this.apiDependencies;
  }

  public getUseCaseDependencies(): DependencyMap {
    return this.useCaseDependencies;
  }
}
