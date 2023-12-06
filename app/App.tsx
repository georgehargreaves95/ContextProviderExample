import React, {useEffect, useState} from 'react';

import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {ExampleProvider} from './context/ExampleProvider';
import {MainStack} from './navigation/MainStack';
import {setTopLevelNavigator} from './services/navigationService';

export const App = () => {
  const [container, setContainer] =
    useState<NavigationContainerRef<ReactNavigation.RootParamList> | null>(
      null,
    );

  useEffect(() => {
    if (container) {
      setTopLevelNavigator(container);
    }
  }, [container]);

  return (
    <NavigationContainer ref={setContainer}>
      <ExampleProvider>
        <MainStack />
      </ExampleProvider>
    </NavigationContainer>
  );
};

let AppEntryPoint = App;

export default AppEntryPoint;
