import { StyleSheet, Text, View } from 'react-native'
import React,{useLayoutEffect} from 'react'
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreen';
import SearchResult from '../screens/SearchResult';
import RestaurantHome from '../screens/RestaurantHome';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import MenuProduct from '../screens/MenuProduct';
import PreferenceScreen from '../screens/PreferenceScreen';


const clientSearch = createStackNavigator()

export function ClientStack({navigation, route}) {

useLayoutEffect(() => {
  const routeName = getFocusedRouteNameFromRoute(route);
  if (routeName === 'RestaurantHome' || 'MenuProduct') {
    navigation.setOptions({tabBarVisible: false});
  } else {
    navigation.setOptions({tabBarVisible: true});
  }
}, [navigation, route]);

  return (
    <clientSearch.Navigator>
      <clientSearch.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={() => ({
          headerShown: false,
        })}
      />

      <clientSearch.Screen
        name="SearchResult"
        component={SearchResult}
        options={() => ({
          headerShown: false,
        })}
      />

      <clientSearch.Screen
        name="RestaurantHome"
        component={RestaurantHome}
        options={() => ({
          headerShown: false,
        })}
      />

      <clientSearch.Screen
        name="MenuProduct"
        component={MenuProduct}
        options={() => ({
          headerShown: false,
        })}
      />

      <clientSearch.Screen
        name="PreferenceScreen"
        component={PreferenceScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </clientSearch.Navigator>
  );
}

const styles = StyleSheet.create({})