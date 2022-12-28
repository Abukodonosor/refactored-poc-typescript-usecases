import { UserOperationsService } from 'gen/user-management';
import { UseCaseBase } from 'useCases/core/useCaseBase';
import { UResult } from 'utils/utilityTypes';
import { isNotEmpty, isResultSuccessful, ResultFailure, ResultSuccess } from 'utils/utils';
import { inputCheckUserCredentials, outputCheckUserCredentials } from './types';
import { DemoCheckUserPrivilegesUseCase } from './DemoCheckUserPrivilegesUseCase';

export class CheckUserCredentialsUseCase extends UseCaseBase<
  inputCheckUserCredentials,
  outputCheckUserCredentials
> {
  public static useCaseName: string = 'CheckUserCredentials';

  // * reference of api layer instance of userManagement
  private userOperations: UserOperationsService;
  private privilegesUseCase: DemoCheckUserPrivilegesUseCase;

  constructor(depInj: any) {
    super(depInj);
    const {
      userManagement: { userOperations },
    } = this.apiService;
    const { DemoCheckUserPrivileges } = this.useCases;

    this.userOperations = userOperations;
    this.privilegesUseCase = DemoCheckUserPrivileges;
  }

  async execute({
    email,
    password,
  }: inputCheckUserCredentials): Promise<UResult<outputCheckUserCredentials>> {
    try {
      if (!isNotEmpty(email) || !isNotEmpty(password)) {
        throw new Error('The email and password are empty');
      }

      // * This is just demo example how to call another useCase in this scope
      // ps: note this is sync calling of useCase, also others useCases can be async also
      const privilegesUseCaseResult = this.privilegesUseCase.execute({});

      if (!isResultSuccessful(privilegesUseCaseResult)) {
        throw new Error('User do not have correct privileges');
      }

      // * This is just demo example, how things should look like
      const getUsersData = await this.userOperations.getUserById('tenantName', 'id');

      if (!getUsersData) {
        throw new Error('User data was unable to fetch');
      }

      return ResultSuccess({
        data: true,
        message: 'You have successfully logged in',
      });
    } catch (e) {
      return ResultFailure({
        error: e as Error,
        message: (e as Error).message,
      });
    }
  }
}
