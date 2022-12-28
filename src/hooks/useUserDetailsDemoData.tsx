// This hook need to have Provider (Context) so the data will be present among other pages
// This will be state for our user inside our application
export const useUserDetailsDemoDataHook = () => {
  // User operations
  // /api/v1/user-management/tenants/{tenant}/users/{id}

  // DEMO CODE PLAYGROUND
  const userDemoData = {
    created: '2022-11-22T13:26:56.883Z',
    modified: '2022-11-22T13:26:56.883Z',
    id: 'uuid-uuid-uuid-uuid',
    username: 'test',
    userRole: 'client',
    tenant: {
      created: '2022-11-22T13:26:56.883Z',
      modified: '2022-11-22T13:26:56.883Z',
      id: 'uuid-uuid-uuid-uuid',
      name: 'BMW',
      contactPersonName: 'God_x_x_x',
      mailAddress: 'Wonderland 101',
      street: 'Red Rabbit 302',
      city: 'Neverland',
      postalCode: 'DOWN369',
    },
    mailAddress: 'test@compacer-demo.com',
    lastLogin: 0,
    firstName: 'Alice',
    lastName: 'Wonderland',
    externalKeycloakId: 'uuid-uuid-uuid-uuid',
    // TO REMOVE
    password: 'test',
    // *EXPERIMENTAL*
    monitoringOptions: ['Vessel', 'Inbox', 'Tracking', 'Orders'],
  };

  // This code will leave as it is.. will use it as boilerplate for mapping structures
  return {
    userDemoData,
  };
};
