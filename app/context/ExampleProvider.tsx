import React, {PropsWithChildren, createContext, useState} from 'react';

interface ExampleState {
  foo: string;
  permitNavigation: boolean;
  clearState?: () => void;
  updateFoo?: (newFoo: string) => void;
  permitNav?: (shouldAllowNav: boolean) => void;
}

const defaultState: ExampleState = {
  foo: '',
  permitNavigation: false,
};

export const ExampleContext = createContext(defaultState);

export const ExampleProvider: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [state, setState] = useState<ExampleState>(defaultState);

  const clearState = () => setState(defaultState);
  const updateFoo = (newFoo: string) => setState({...state, foo: newFoo});
  const permitNav = (shouldAllowNav: boolean) =>
    setState({...state, permitNavigation: shouldAllowNav});

  return (
    <ExampleContext.Provider
      value={{...state, clearState, updateFoo, permitNav}}>
      {children}
    </ExampleContext.Provider>
  );
};
