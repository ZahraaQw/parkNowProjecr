import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Title} from "react-native-paper";

import Home from "./home";
import notifiactionScreen from "./notifiactionScreen";
import ProfilScreen from "./ProfilScreen";
import EditProfileScreen from "./EditProfileScreen";

import settingScreen from "./settingScreen";

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
    screenOptions ={{
      headerStyle:{
        backgroundColor:"#6f1282",   
        borderBottomRightRadius:80,
        height:75,
      },
      
      headerTitleAlign: 'center',
      headerShown: true,
      headerTintColor:"#fff",
      headerTitleStyle:{
          fontWeight:"bold"
      }

   }}
    
    >
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}
const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator
    screenOptions ={{
      headerStyle:{
        backgroundColor:"#6f1282",   
        borderBottomRightRadius:80,
        height:80,
      },
      
      headerTitleAlign: 'center',
      headerShown: true,
      headerTintColor:"#fff",
      headerTitleStyle:{
          fontWeight:"bold"
      }

   }}
    >
      <SettingsStack.Screen name="Settings" component={settingScreen} />
     
    </SettingsStack.Navigator>
  );
}


const ProfilStackScreen = createStackNavigator();

function ProfStackScreen() {
  return (
    <ProfilStackScreen.Navigator
    screenOptions ={{
      headerStyle:{
        backgroundColor:"#6f1282",   
        borderBottomRightRadius:80,
        height:60, 
      },
      
      headerTitleAlign: 'center',
      headerShown: true,
      headerTintColor:"#fff",
      headerTitleStyle:{
          fontWeight:"bold"
      }

   }}
    >
      <ProfilStackScreen.Screen name="My Profile" component={EditProfileScreen} />
     
    </ProfilStackScreen.Navigator>
  );
}



const notificationStack = createStackNavigator();

function notifStack() {
  return (
    <notificationStack.Navigator
    screenOptions ={{
      headerStyle:{
          backgroundColor:"#6f1282",   
          borderBottomRightRadius:80,
          height:75,
      },
      
      headerTitleAlign: 'center',
      headerShown: true,
      headerTintColor:"#fff",
      headerTitleStyle:{
          fontWeight:"bold"
      }

   }}
    >
      <notificationStack.Screen name="Notification" component={notifiactionScreen} />
     
    </notificationStack.Navigator>
  );
}






const Tab = createMaterialBottomTabNavigator();

export default function mainScreen() {
  return (
   
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
       style={{
        marginBottom:0.1,  
        backgroundColor: 'tomato'
      }} 
      
     
       
      
      
    

      >
         <Tab.Screen
            name="Home"
            component={HomeStackScreen}
           
            options={{
                tabBarLabel: 'Home',
                tabBarColor:"#6f1282",
                tabBarIcon: ({ color }) => (
                <Icon name="home" color={color} size={26} />
                ),
            
            }}
            />
        
        <Tab.Screen
            name="Notifications"
            component={notifStack}
            options={{
                tabBarLabel: 'Notifications',
                tabBarColor:"#6f1282",
                tabBarIcon: ({ color }) => (
                <Icon name="bell" color={color} size={26} />
                ),
            }}
            />

         <Tab.Screen
            name="Profile"
            component={ProfStackScreen}
            options={{
                tabBarLabel: 'Profile',
                tabBarColor:"#6f1282",
                tabBarIcon: ({ color }) => (
                <Icon name="user" color={color} size={26} />
                ),
            }}
            />
        
        <Tab.Screen
            name="Setting"
            component={SettingsStackScreen}
            options={{
                tabBarLabel: 'Setting',
                tabBarColor:"#6f1282",
                
                tabBarIcon: ({ color }) => (
                    <Icon name="gear" color={color} size={26} />
                    ),
               
            }}
            />
     </Tab.Navigator>

  );
}