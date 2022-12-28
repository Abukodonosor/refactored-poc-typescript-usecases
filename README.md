# Getting Started with `EDPEM` project POC

## Development scripts

```
EDPEM:

development:

yarn storybook -> for component development
yarn start -> running the development server


production:

yarn build

```

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm build`

Make the bundle of the exported code.

## Design Principles

This application will be developed with layered DDD and Clean Architecture.\
That will provide us possibility to change direction of the product itself and also lower cost of maintainence and code complexity.\
Every layer is fully decoupled.

## Project Structure

Tree overview of the project file structure

```
    src
    ├── elements
    │   ├── components
    │   │   └───────────────────── demoComponent (*structure of the component itself)
    │   │                          ├── component_style.tsx
    │   │                          ├── name_of_component_view.tsx
    │   │                          ├── hoc_hook_which_provide_functionality.tsx
    │   │                          ├── *types.tsx (* - optional)
    │   │                          ├── */components (* - optional if we have more component which are used)
    │   │                          └── *index.tsx (* - optional export the components)
    │   ├── pages
    │   ├── graphs
    │   ├── layout
    |   └── generic components
    |
    ├── service (folders)
    │   ├── AuthService
    │   ├── KeyCloakService
    │   ├── ...New services (3th party or some isolated functionalities)
    │   └── LocalStorageService
    │
    ├── hooks (global)
    │   ├── UserDetailHook.tsx
    │   ├── UserColumnsConfiguration.tsx
    │   ├── ...
    │   └──
    │
    ├── useCase (Business logic layer)
    │   ├── ChangeUserSettingsUseCase.ts
    │   ├── ChangeUserPasswordUseCase.ts
    │   └── LoginUserUseCase.ts
    │
    ├── theme (styleguide configuration place)
    │   └── styleguide_theme_1.json
    │
    ├── translations (place where we keep our translation keys)
    │   └── edpem_EN.json
    │
    ├── utils (helper functions for parsing and mapping)
    |   ├── hocWrapper.tsx
    │   └── localStorageHelper.ts
    │
    ├── api (API layer is generated by Swagger documentation)
    │   ├── types
    │   └── generated_code
    │
    └── providers (There we wrapUp every 3th party component and make our own wrapper for usage)
        ├── ThemeProvider
        ├── TranslationProvider
        ├── SnackBarProvider
        └── ...

```

## Preferred libs:

- Material UI (use just one implementation of it instead of 3)
- Redux/Context for globalStates
- ReactQuery or Fetcher (browser native implementation) API layer
- Business logic will be placed inside useCase folder (DDD and Clean Architecture)
- React dependency injection (for bussines logic and api layer)
- WebPack or Turbopack for build processes (https://nextjs.org/docs/advanced-features/turbopack)
- React component pure (dump) [functional] preference

## Things to change:

- Folder with Images and Fonts need to be placed inside PUBLIC FOLDER
- Refactor the components from `components_old` to elements folder
- Trim the unused @mui libraries
- -
