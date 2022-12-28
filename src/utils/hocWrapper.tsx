import { ComponentPropsWithoutRef, FC } from 'react';

/**
 * Creates an implementation of a component using a Controller and the View
 * @param useController A controller hook, can be parametrized with an object parameter
 * @param View A view component
 *
 * Any parameters passed to controller will be passed as props to the resulting component,
 * resulting with creating new HOC component
 */
export const hocWrap =
  <V extends FC<any>, C extends (argsObj: any) => ComponentPropsWithoutRef<V>>(
    useController: C,
    View: V,
  ): FC<Parameters<C>[0]> =>
  ({ children, ...controllerArgs }) => {
    const AnyView = View as any;
    const controller = useController(controllerArgs);
    return <AnyView {...controller}>{children}</AnyView>;
  };
