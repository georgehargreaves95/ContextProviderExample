import React, {useState} from 'react';
import {screenStyles} from './Screen.styles';
import {View, Pressable, Text, TextInput} from 'react-native';
import {ExampleContext} from '../context/ExampleProvider';
import {navigate} from '../services/navigationService';
import {ScreenName} from '../navigation/MainStack';

export const ScreenOne: React.FC = () => {
  const [updateInput, setUpdatInput] = useState('');
  return (
    <ExampleContext.Consumer>
      {({permitNavigation, updateFoo, permitNav}) => {
        return (
          <View style={screenStyles.root}>
            <View style={screenStyles.textWrapper}>
              <Text style={screenStyles.text}>This is Screen One</Text>
            </View>
            <TextInput
              style={screenStyles.input}
              placeholder={'Enter a value to update Foo'}
              onChangeText={value => setUpdatInput(value)}
            />
            <Pressable
              style={screenStyles.button()}
              onPress={() => updateFoo?.(updateInput)}>
              <Text style={screenStyles.text}>Press to update Foo value</Text>
            </Pressable>

            <Pressable
              style={screenStyles.button()}
              onPress={() => {
                console.log('permit nav to 2 pressed');
                permitNav?.(true);
                console.log('permit navigation: ', permitNavigation);
              }}>
              <Text style={screenStyles.text}>
                Press to allow navigation to Screen Two
              </Text>
            </Pressable>

            <Pressable
              style={screenStyles.button(!permitNavigation)}
              onPress={() => {
                console.log('press on navigate to screen 2');
                navigate(ScreenName.screen2);
              }}
              disabled={!permitNavigation}>
              <Text style={screenStyles.text}>Go to Screen Two</Text>
            </Pressable>
          </View>
        );
      }}
    </ExampleContext.Consumer>
  );
};
