import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile149318Navigator from '../features/UserProfile149318/navigator';
import Maps149299Navigator from '../features/Maps149299/navigator';
import Settings149277Navigator from '../features/Settings149277/navigator';
import Settings149262Navigator from '../features/Settings149262/navigator';
import NotificationList149261Navigator from '../features/NotificationList149261/navigator';
import Maps149260Navigator from '../features/Maps149260/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile149318: { screen: UserProfile149318Navigator },
Maps149299: { screen: Maps149299Navigator },
Settings149277: { screen: Settings149277Navigator },
Settings149262: { screen: Settings149262Navigator },
NotificationList149261: { screen: NotificationList149261Navigator },
Maps149260: { screen: Maps149260Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
