import { LocalStorage } from 'services/LocalStorageService';

const storage = LocalStorage();

export const useLocalStorageHook = () => {
  const setToken = (tokenName: string, data: any) => {
    if (typeof data === 'object') {
      storage.setJsonToken<any>(tokenName, data);
    }
    storage.setToken<string>(tokenName, data);
  };

  const updateToken = (tokenName: string, data: any) => {
    if (typeof data === 'object') {
      storage.setJsonToken<any>(tokenName, data);
    }
    storage.setToken<string>(tokenName, data);
  };

  const deleteToken = (tokenName: string) => {
    storage.removeToken<any>(tokenName);
  };

  const getToken = (tokenName: string) => {
    const result = storage.getToken<string>(tokenName);
    return result;
  };

  return {
    setToken,
    updateToken,
    deleteToken,
    getToken,
  };
};
