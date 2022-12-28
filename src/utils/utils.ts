import { Result, UResult } from './utilityTypes';

export const ResultSuccess = (value: any) => {
  return {
    ...value,
    status: true,
  };
};

export const ResultFailure = (value: any) => {
  return {
    ...value,
    status: false,
  };
};

export const destructureObject = (obj: { [key: string]: any }) => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const camelCasedKey = key.replace(/-([a-z])/g, (match, group) => group.toUpperCase());
    acc[camelCasedKey] = value;
    return acc;
  }, {} as { [key: string]: any });
};

export const isNotEmpty = <T>(value: T | null | undefined): value is T => {
  if (value === null || value === undefined) {
    return false;
  }

  if (typeof value === 'string' && value.length === 0) {
    return false;
  }

  if (Array.isArray(value) && value.length === 0) {
    return false;
  }

  if (typeof value === 'object' && Object.keys(value).length === 0) {
    return false;
  }

  return true;
};

export const isResultSuccessful = (inputData: UResult<any>) => inputData.status === true;

export const isSuccess = (inputData: Result<any>) => Boolean(inputData.status);
export const isFailure = (inputData: Result<any>) => Boolean(!inputData.status);
export const isNull = (inputData: any) => (inputData === null ? true : false);
export const isIntNumber = () => {};
export const isFloatNumber = () => {};
/** Write generic solutions to those examples */
