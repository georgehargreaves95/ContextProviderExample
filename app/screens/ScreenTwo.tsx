import React from 'react';
import {screenStyles} from './Screen.styles';
import {View, Pressable, Text} from 'react-native';
import {ExampleContext} from '../context/ExampleProvider';
import {navigate} from '../services/navigationService';
import {ScreenName} from '../navigation/MainStack';

export const ScreenTwo: React.FC = () => {
  return (
    <ExampleContext.Consumer>
      {({clearState, foo}) => (
        <View style={screenStyles.root}>
          <View style={screenStyles.textWrapper}>
            <Text style={screenStyles.text}>This is Screen Two</Text>
          </View>
          <View style={screenStyles.textWrapper}>
            <Text
              style={
                screenStyles.text
              }>{`This is the current value of foo: ${foo}`}</Text>
          </View>
          <Pressable
            style={screenStyles.button()}
            onPress={() => {
              navigate(ScreenName.screen1);
              clearState?.();
            }}>
            <Text style={screenStyles.text}>
              Press to return to Screen One and reset state
            </Text>
          </Pressable>
        </View>
      )}
    </ExampleContext.Consumer>
  );
};
