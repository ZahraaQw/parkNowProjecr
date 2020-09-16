import React from 'react';
import{NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import Home from './home';
import ProfilScreen from './ProfilScreen';

const Drawer = createDrawerNavigator();
const App2 =()=>{
    return(
        <NavigationContainer>
        <Drawer.Navigator drawerContent={props=><DrawerContent{...props}/>}
        drawerStyle={
            {
             backgroundColor:"gray",
             opacity:0.85,
             borderTopRightRadius:180
           
            }
        }>
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="Profile" component={ProfilScreen}/>
           
        </Drawer.Navigator>
        </NavigationContainer>
    )
}
export default App2