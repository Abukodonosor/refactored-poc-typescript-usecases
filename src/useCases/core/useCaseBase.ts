import { UseCaseManagerContext } from 'providers/UseCaseManagerProvider';
import { DependencyManager } from 'services/DependencyManager';
import { Result, UResult } from 'utils/utilityTypes';
import { destructureObject } from 'utils/utils';

export abstract class UseCaseBase<T, U> {
  // * Name of the class/useCase which will be displayed in hook extractor
  public static useCaseName: string;

  protected apiService: any;
  protected useCases: any;

  /**
   *
   * @param depInj - replace depInj with specific service and useCase calls
   */
  constructor(depInj: DependencyManager) {
    if (UseCaseManagerContext === null) {
      throw new Error(
        'UseCase context not found. Make sure you have wrapped your component with the UseCaseProvider.',
      );
    }
    this.apiService = destructureObject(depInj.getApiDependencies());
    this.useCases = destructureObject(depInj.getUseCaseDependencies());
  }

  /**
   *
   * @param input is responsible for passing the input data to specific useCase
   */
  abstract execute(input: T): Promise<UResult<U>> | UResult<U>;
}
