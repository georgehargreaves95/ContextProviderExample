import {CommonActions, NavigationContainerRef} from '@react-navigation/native';
import {ScreenName} from '../navigation/MainStack';

let navigator: NavigationContainerRef<ReactNavigation.RootParamList>;

export const setTopLevelNavigator = (
  navRef: NavigationContainerRef<ReactNavigation.RootParamList>,
) => (navigator = navRef);

export const navigate = (name: ScreenName, params?: Object) => {
  if (!navigator) {
    return;
  }

  navigator.dispatch(CommonActions.navigate({name, params}));
};
