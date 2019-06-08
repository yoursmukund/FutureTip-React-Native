import { createAppContainer, createStackNavigator } from "react-navigation";
import MainScreen from './src/screens/main/';
import ReadingScreen from './src/screens/reading/reading';

const AppNavigator = createStackNavigator(
  {
    MainScreen: MainScreen,
    ReadingScreen: ReadingScreen
  },
  {
    initialRouteName: "MainScreen"
  }
);

export default createAppContainer(AppNavigator);
