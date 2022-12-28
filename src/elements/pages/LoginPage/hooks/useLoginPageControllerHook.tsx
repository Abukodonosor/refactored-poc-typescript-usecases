import { Alert } from '@mui/material';
import { useLocalStorageHook, useTranslationHook, useUserDetailsDemoDataHook } from 'hooks';
import { useAppContext } from 'providers';
import { useUseCaseManagerHook } from 'providers/UseCaseManagerProvider';
import { ChangeEventHandler, KeyboardEventHandler, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginPageControllerHookInputProps, LoginPageControllerHookOutput } from '../types';

// TO-DO: Make generic type which extract keys from the URL and give it as argument of the function
export const useLoginPageControllerHook = ({
  // Parameters as arguments for this controllerHook should be query parames from the URL
  // like: (tenantID, userID, processID, some necessary data and etc)
  status,
}: LoginPageControllerHookInputProps): LoginPageControllerHookOutput => {
  const { translationKey } = useTranslationHook();
  const [errorMessages, setErrorMessages] = useState({ message: '', name: '' });
  const [_, setAuthenticated] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [open, setOpen] = useState(true);
  const [keepLogged, setKeepLogged] = useState(false);
  const navigate = useNavigate();

  const storageManipulation = useLocalStorageHook();

  const { appState, updateAppState } = useAppContext();
  // TEST of DepInj mechanism
  const {
    useCase: { CheckUserCredentials },
  } = useUseCaseManagerHook();
  // END_TEST

  useEffect(() => {
    if (storageManipulation.getToken('cookies') !== null) {
      setAccepted(true);
    }
  }, [accepted]);

  /* TODO: set cookies accordingly, and maybe details should do something */
  const handleDetails = () => {};

  const handleKeepLogged = () => {
    if (keepLogged) {
      setKeepLogged(false);
    } else {
      setKeepLogged(true);
    }
  };

  // User Login info
  const database = [appState];

  const errors = {
    uname: translationKey('Username error'),
    pass: translationKey('Password error'),
  };

  useEffect(() => {
    if (localStorage.getItem('authenticated')) {
      navigate('/dashboard');
    }
  }, []);

  /* TODO: check if cookie set properly */
  const handleSubmit = async (event: { preventDefault: () => void }) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    /**************DEMO of USE_CASE */
    const credentialsTestResult = await CheckUserCredentials.execute({
      email: 'testuser@gmail.com',
      password: 'testPassword',
    });
    console.log('++++++++++++++++', credentialsTestResult, '++++++++++++++++++');
    /**************END_DEMO of USE_CASE */

    // Find user login info
    const userData = database.find(user => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: 'pass', message: errors.pass });
      }

      if (userData.password === pass.value) {
        if (keepLogged) {
          setAuthenticated(true);
          localStorage.setItem('authenticated', 'true');
          navigate('/dashboard');
        }
        setAuthenticated(true);
        sessionStorage.setItem('authenticated', 'true');
        navigate('/dashboard');
      }
      sessionStorage.setItem('tenant', userData.tenant.name);
      if (localStorage.getItem('favorites') === null) {
        localStorage.setItem('favorites', JSON.stringify([]));
      }
      /* TODO: fetch list from API eventually */
      if (localStorage.getItem('monitorList') === null) {
        localStorage.setItem('monitorList', JSON.stringify(userData.monitoringOrder));
      }
    } else {
      // Username not found
      setErrorMessages({ name: 'uname', message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name: string) =>
    name === errorMessages.name && <Alert severity="error">{errorMessages.message}</Alert>;

  // const keepMeLoginInCheckboxHandler: ChangeEventHandler<HTMLInputElement> = e => {
  //   console.log(e);
  // };
  // const loginWithKeyboard: KeyboardEventHandler<HTMLButtonElement> = e => {
  //   console.log('Take enter event');
  // };

  return {
    open: open,
    accepted: accepted,
    //
    handleDetails: handleDetails,
    handleKeepLogged: handleKeepLogged,
    handleSubmit: handleSubmit,
    renderErrorMessage: renderErrorMessage,
  };
};
