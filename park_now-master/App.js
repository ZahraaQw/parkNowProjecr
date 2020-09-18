import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfilScreen from "./screens/ProfilScreen";
import NotificationScreen from "./screens/NotifiactionScreen";
import SettingScreen from "./screens/SettingScreen";
import MainScreen from "./screens/MainScreen";
import  DrawerContent  from './screens/DrawerContent';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SignInScreen from "./screens/SignInScreen"
import Signup from "./screens/Signup"
import EditProfileScreen from './screens/EditProfileScreen';
import App2 from "./screens/App2";
import mainScreen from './screens/MainScreen';
import ForgetPassword from "./screens/ForgetPassword";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App=()=>{
  return(

    <NavigationContainer>

      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={MainScreen} />
        <Drawer.Screen name="Notification" component={NotificationScreen} />
        <Drawer.Screen name="Profile" component={ProfilScreen} />
        <Drawer.Screen name="Setting" component={SettingScreen} />
      </Drawer.Navigator>
    
 
  </NavigationContainer>

  );
}
export default App;
