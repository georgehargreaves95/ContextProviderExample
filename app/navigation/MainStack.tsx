import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {ExampleContext} from '../context/ExampleProvider';
import {ScreenOne} from '../screens/ScreenOne';
import {ScreenTwo} from '../screens/ScreenTwo';

export enum ScreenName {
  screen1 = 'screen1',
  screen2 = 'screen2',
}

type MainStackParams = {
  [ScreenName.screen1]: undefined;
  [ScreenName.screen2]: undefined;
};

const Stack = createStackNavigator<MainStackParams>();

export const MainStack = () => {
  return (
    <ExampleContext.Consumer>
      {({permitNavigation}) => (
        <Stack.Navigator>
          <Stack.Screen name={ScreenName.screen1} component={ScreenOne} />
          {permitNavigation ? (
            <Stack.Screen name={ScreenName.screen2} component={ScreenTwo} />
          ) : null}
        </Stack.Navigator>
      )}
    </ExampleContext.Consumer>
  );
};
