

import React from 'react';
//import {View,Text, Button} from 'react-native';
import SignInScreen from "./screens/SignInScreen"
import Signup from "./screens/Signup"
import EditProfileScreen from './screens/EditProfileScreen';
import App2 from "./screens/App2";
import mainScreen from './screens/mainScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfilScreen from "./screens/ProfilScreen";
import ForgetPassword from "./screens/ForgetPassword";
import { View } from 'react-native';


const Stack = createStackNavigator();


const App=()=>{
  return(

  
   <App2/>
   

  );
}
export default App;
