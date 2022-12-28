import { Nullable, NullableBool } from '../utils/utilityTypes';

export enum userTokens {
  JWT_TOKEN = 'jwt',
  USER_DETAILS = 'user-data',
  LANG = 'lang',
  KEYCLOAK = '',
  // OLD IMPLEMENTATION TOKEN KEYS (*TO BE REMOVED)
  jwt = '',
  keycloak = '',
  selectedLang = 'en',
  user = '',
  tenant = '',
}

interface LocalStorage {
  // This is the way how this need to work (string will be removed and just enums will be used)
  getToken<T>(tokenName: string | userTokens): Nullable<T>;
  setToken<NullableBool>(tokenName: string | userTokens, tokenData: any): Nullable<boolean>;
  setJsonToken<T>(tokenName: string | userTokens, tokenData: T): Nullable<boolean>;
  removeToken<NullableBool>(tokenName: string | userTokens): Nullable<boolean>;
  extractKeyData<T>(tokenName: string | userTokens): Nullable<T>;
  clearStorage<T extends any>(): void;
}

export function LocalStorage(): LocalStorage {
  // Window reference to localStorage api
  const localStorage: Storage = window.localStorage;

  const getToken = <T>(tokenName: string): Nullable<T> => {
    try {
      const tokenData = localStorage.getItem(tokenName);

      if (!tokenData) {
        throw Error(`there is no token with tokenName: '${tokenName}'`);
      }

      return JSON.parse(tokenData);
    } catch (e) {
      console.error(e);
      return null;
    }
  };

  const setToken = <NullableBool>(tokenName: string, tokenData: any): Nullable<boolean> => {
    try {
      localStorage.setItem(tokenName, tokenData);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  const setJsonToken = <T>(tokenName: string, tokenData: T): Nullable<boolean> => {
    try {
      localStorage.setItem(tokenName, JSON.stringify(tokenData));
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  const removeToken = <NullableBool>(tokenName: string): Nullable<boolean> => {
    try {
      tokenName && localStorage.removeItem(tokenName);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  const extractKeyData = <T>(name: string): Nullable<T> => {
    try {
      let data = localStorage.getItem(name);
      if (!data) {
        throw Error('extractKeyData is empty');
      }
      return JSON.parse(data);
    } catch (e) {
      console.error(e);
      return null;
    }
  };

  const clearStorage = <T>(): void => {
    localStorage.clear();
  };

  return {
    getToken,
    setToken,
    setJsonToken,
    removeToken,
    extractKeyData,
    clearStorage,
  };
}
