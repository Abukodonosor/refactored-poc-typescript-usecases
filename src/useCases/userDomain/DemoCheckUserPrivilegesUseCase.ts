import { UseCaseBase } from 'useCases/core/useCaseBase';
import { UResult } from 'utils/utilityTypes';
import { ResultFailure, ResultSuccess } from 'utils/utils';
import { inputDemoCheckUserPrivileges, outputDemoCheckUserPrivileges } from './types';

export class DemoCheckUserPrivilegesUseCase extends UseCaseBase<
  inputDemoCheckUserPrivileges,
  outputDemoCheckUserPrivileges
> {
  public static useCaseName: string = 'DemoCheckUserPrivileges';

  constructor(depInj: any) {
    super(depInj);
  }

  execute({}: inputDemoCheckUserPrivileges): UResult<outputDemoCheckUserPrivileges> {
    try {
      return ResultSuccess({
        data: true,
        message: 'User have granted correct privileges',
      });
    } catch (e) {
      return ResultFailure({
        error: e as Error,
        message: (e as Error).message,
      });
    }
  }
}
