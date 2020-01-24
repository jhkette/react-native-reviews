import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';



const screens = {
    Home: {
      navigationOptions: {
          title: 'GameZone'
      },
      screen: Home,
    },
    ReviewDetails: {
        navigationOptions: {
            title: 'Review Details'
        },
      screen: ReviewDetails,
    },
  };

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {backgroundColor: '#cce0ff', height: 80}
    }
});

export default createAppContainer(HomeStack);