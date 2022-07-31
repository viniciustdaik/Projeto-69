import React, { Component } from "react";
import { Image, View, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";


import RideScreen from "../screens/Ride";
import RideHistoryScreen from "../screens/RideHistory";

import historicoimg from '../assets/historicoimg2.png';

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
          tabBarOptions={{
            //tabBarOptions //screenOptions
            style:{
              backgroundColor: 'darkblue', 
              borderTopColor: 'transparent', 
            }, 
            activeTintColor: 'orange', 
            inactiveTintColor: 'red', 
            tabStyle:{
              paddingBottom: 5, 
              paddingTop: 0, 
            }, 
            showLabel: true, 
            /*"tabBarActiveTintColor": "orange", //nao fez nada
            //"tabBarShowLabel": false, 
            "tabBarInactiveTintColor": "red", //nao fez nada
            "tabBarItemStyle": {
              "paddingBottom": 5, 
              "paddingTop": 0, 
            }, 
            "tabBarStyle": [
              {
                "display": "flex", 
                "backgroundColor": 'darkblue', 
                "borderTopColor": 'transparent', 
              }, 
              null
            ], */
          }}>
            {/*
            <TabScreen name="Alugue uma Bicicleta" component={RideScreen} />
            <TabScreen name="Histórico de Locações" component={RideHistoryScreen} />
            */}

            {/*
            <Tab.Screen name="Alugue uma Bicicleta" />
            <Tab.Screen name="Histórico de Locações" />
            */}

            {/*
            <Screen name="Alugue uma Bicicleta" component={RideScreen} />
            <Screen name="Histórico de Locações" component={RideHistoryScreen} />
            */}

            
            <Tab.Screen name="Alugue uma Bicicleta" component={RideScreen}  
            options={{
              tabBarIcon: ({ focused }) =>(
                <View style={{alignItems: 'center', justifyContent: 'center', top: 0 /* 0 */}}>
                  <Image source={require('../assets/bicycle.png')}
                    resizeMode="contain"
                    style={{
                      width: 35,  
                      height: 35, 
                    }}/>
                    {/*<Text style={{ color: focused ? '#FFA500' : 'lightblue', fontSize: 25 }}>Transação</Text>*/}
                </View>
              ), 
            }}/>
            <Tab.Screen name="Histórico de Locações" component={RideHistoryScreen}
            options={{
              tabBarIcon: ({ focused }) =>(
                <View style={{alignItems: 'center', justifyContent: 'center', bottom: 0 /* 0 */}}>
                  <Image source={historicoimg}
                    resizeMode="contain"
                    style={{
                      width: 30,  
                      height: 30, 
                    }}/>
                    {/*<Text style={{ color: focused ? '#FFA500' : 'lightblue', fontSize: 25 }}>Transação</Text>*/}
                </View>
              ), 
            }}/>
            
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}
