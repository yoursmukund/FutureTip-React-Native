import { createAppContainer, createStackNavigator } from "react-navigation";
import AuthScreen from './src/screens/auth/auth';
import MainScreen from './src/screens/main/';
import ReadingScreen from './src/screens/reading/reading';

const AppNavigator = createStackNavigator(
  {
    Home: AuthScreen,
    MainScreen: MainScreen,
    ReadingScreen: ReadingScreen
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
