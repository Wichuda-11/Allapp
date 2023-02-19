import React from "react";

import {colors, parameters, title} from '../global/styles';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import SearchScreen from "../screens/SearchScreen";
import MyOrderScreen from "../screens/MyOrderScreen";
import MyAccount from "../screens/MyAccount";
import { ClientStack } from "./ClientStack";

const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs(){

    return (
      <ClientTabs.Navigator
        tabBarOptions={{
          activeTintColor: colors.buttons,
        }}>
        <ClientTabs.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="home" color={color} size={28} />
            ),
          }}
        />

        <ClientTabs.Screen
          name="SearchScreen"
          component={ClientStack}
          options={{
            headerShown: false,
            tabBarLabel: 'Search',
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="search" color={color} size={28} />
            ),
          }}
        />

        <ClientTabs.Screen
          name="MyOrderScreen"
          component={MyOrderScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'My Orders',
            tabBarIcon: ({color, size}) => (
              <Ionicons name="list" color={color} size={28} />
            ),
          }}
        />

        <ClientTabs.Screen
          name="MyAccount"
          component={MyAccount}
          options={{
            headerShown: false,
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <Ionicons name="person" color={color} size={28} />
            ),
          }}
        />

        
      </ClientTabs.Navigator>
    );
}