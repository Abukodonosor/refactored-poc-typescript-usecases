import { useNavigate } from 'react-router-dom';
import { NotFoundPageControllerHookInputProps, NotFoundPageControllerHookOutput } from '../types';

export const useNotFoundPageControllerHook =
  ({}: NotFoundPageControllerHookInputProps): NotFoundPageControllerHookOutput => {
    const navigate = useNavigate();
    const toHome = () => {
      navigate('/dashboard');
    };
    return {
      toHome: toHome,
    };
  };
