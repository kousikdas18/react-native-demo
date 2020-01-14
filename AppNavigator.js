import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import MainScreen from './MainScreen';
import {Easing, Animated} from 'react-native';

const RootStack = createStackNavigator(
  {
    Main: MainScreen,
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: 'Main',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      }
    })
  }
);

const AppNavigator = createAppContainer(RootStack);

export default AppNavigator;