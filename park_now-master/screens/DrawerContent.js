import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import Home from './home';


import LinearGradient from 'react-native-linear-gradient';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Switch
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerContent=(props)=>{

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView{...props}>
              
   
             <TouchableOpacity style={ styles.container }>
             <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row'}}>
                        <Avatar.Image 
                                 source={require('./avatar.png')} 
                                size={55}
                            />
                           
                      
                       </View>
                       <View style={ {flexDirection:'column'}}>
                                <Title style={styles.title}>Zahraa QW</Title>
                                <Caption style={styles.caption}>@j_doe</Caption>
                            </View>
                       </View>
                       </View>

             </TouchableOpacity>
     
         
               <Drawer.Section style={styles.drawerSection}>
             <DrawerItem 
             icon={()=>(
             <Icon
             name="home-outline" 
             color="#e8d8e8"
             size={24} /> )
             }
             label="Home"
             labelStyle={styles.lable}
             onPress={() => {props.navigation.navigate('Home')}}
             />
            
            <DrawerItem 
             icon={()=>(
             <Icon
             name="account-outline"
             color="#e8d8e8"
             size={24} /> )
             }
             label="Profile"
             labelStyle={styles.lable}
             onPress={() => {props.navigation.navigate('ProfilScreen')}}
             />
              
            <DrawerItem 
             icon={()=>(
             <Icon
             name="account-outline"
             color="#e8d8e8"
             size={24} /> )
             }
             label="Enterance Scanning"
             labelStyle={styles.lable}
          //  onPress={() => {props.navigation.navigate('NotificationScreen')}}
             />
               <DrawerItem 
             icon={()=>(
             <Icon
             name="account-outline"
             color="#e8d8e8"
             size={24} /> )
             }
             label="Exit Scanning"
             labelStyle={styles.lable}
             />

             <DrawerItem activeBackgroundColor="#e8d8e8"
             
             icon={()=>(
             <Icon
             name="account-outline"
             color="#e8d8e8"
             size={24} /> )
             }
             label="Parking Timer"
             labelStyle={styles.lable}
            //   onPress={() => {props.navigation.navigate('ProfilScreen')}}
             />

           <DrawerItem 
             icon={()=>(
             <Icon
             name="globe"
             color="#e8d8e8"
             size={24} /> )
             }
             label="Find My Position"
             labelStyle={styles.lable}
             //   onPress={() => {props.navigation.navigate('ProfilScreen')}}
             />
         
         </Drawer.Section>

            </DrawerContentScrollView>
         <Drawer.Section style={styles.bottomDrawerSection}>
             <DrawerItem
             icon={()=>(
             <Icon
             name="exit-to-app"
             color="#401147"
             size={24}
             />
             )
             }
             label="Sign out"
             labelStyle={{
               color:"#e8d8e8",
               fontSize:15,
               fontWeight:"bold",
             }}
             />
         </Drawer.Section>
        </View>
    );

}

const styles = StyleSheet.create({

  container: {
      paddingLeft:20,
      paddingBottom:30,
      paddingTop:30,
      backgroundColor:"#290529",
      
      borderTopRightRadius:180,
 
},

    drawerContent: {
      flex: 1,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
      color:"#c49fc4",
      
    },
     
    caption: {
      fontSize: 14,
      lineHeight: 14,
      color:"#c49fc4",
    },
    drawerSection: {
      marginTop: 5,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: "#e8d8e8",
        borderTopWidth: 1
    },
   lable:{
     color:"#401147",
     fontSize:14,
     fontWeight:"bold",


   },
   icon:{
       color:'white',
 
   },

    header:{
   
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:'white',
     borderTopRightRadius:100,
 
      
  },

  drawer_items:{
    padding:0.1,
    
  }
  });

export default DrawerContent;