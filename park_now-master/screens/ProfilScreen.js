import React from 'react';

import {View, SafeAreaView, StyleSheet,ScrollView} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';



const ProfilScreen=({navigation})=>{
    return (
        <ScrollView style={styles.container}>
    
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image 
                source={{
                  uri: 'https://developers.google.com/web/images/contributors/no-photo.jpg',
                }}
                size={80}
              />
              <View style={{marginLeft: 20}}>
                <Title style={[styles.title, {
                  marginTop:15,
                  marginBottom: 5,
                }]}>Islam Mohammed</Title>
                <Caption style={styles.caption}>@I_moh</Caption>
              </View>
            </View>
          </View>
    
          <View style={styles.userInfoSection}>
            <View style={styles.row}>
            <FontAwesome name="globe"  color="#777777" size={20} />
              <Text style={{color:"#777777", marginLeft: 20}}>jalood, Nablus</Text>
            </View>
            <View style={styles.row}>
              <Icon name="phone" color="#777777" size={20}/>
              <Text style={{color:"#777777", marginLeft: 20}}>+91-900000009</Text>
            </View>
            <View style={styles.row}>
            <FontAwesome name="envelope-o"  color="#777777"  size={20} />
              <Text style={{color:"#777777", marginLeft: 20}}>islam_moh@email.com</Text>
            </View>
            <View style={styles.row}>
            <FontAwesome name="car"  color="#777777" size={20} />
              <Text style={{color:"#777777", marginLeft: 20}}>795-258-187</Text>
            </View>
          </View>
    
          <View style={styles.infoBoxWrapper}>
              <View style={[styles.infoBox, {
                borderRightColor: '#dddddd',
                borderRightWidth: 1
              }]}>
                <Title>10$</Title>
                <Caption>Price</Caption>
              </View>
              <View style={styles.infoBox}>
                <Title>2-3 PM</Title>
                <Caption>Booking Time</Caption>
              </View>
          </View>
    
          <View style={styles.menuWrapper}>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon name="car" color="#6f1282" size={25}/>
                <Text style={styles.menuItemText}>Find My Car</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon name="credit-card" color="#6f1282" size={25}/>
                <Text style={styles.menuItemText}>Payment</Text>
              </View>
            </TouchableRipple>
            
          </View>
        </ScrollView>
      );
    };
    
    export default ProfilScreen;
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
      },
      row: {
        flexDirection: 'row',
        marginBottom: 10,
      },
      infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
      },
      infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      menuWrapper: {
        marginTop: 10,
      },
      menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
      },
      menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
      },
    });
    