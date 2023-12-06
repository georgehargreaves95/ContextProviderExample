import {TextStyle, ViewStyle} from 'react-native';

const root: ViewStyle = {
  backgroundColor: 'white',
  height: '100%',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
};

const text: TextStyle = {
  color: 'black',
  fontSize: 20,
};

const input: ViewStyle = {
  borderWidth: 1,
  borderRadius: 10,
  padding: 10,
};

const button = (disabled?: boolean): ViewStyle => ({
  backgroundColor: disabled ? 'grey' : 'green',
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'center',
  padding: 10,
  marginVertical: 20,
});

const textWrapper: ViewStyle = {
  marginVertical: 10,
  alignItems: 'center',
  justifyContent: 'center',
};

export const screenStyles = {
  root,
  text,
  button,
  textWrapper,
  input,
};
