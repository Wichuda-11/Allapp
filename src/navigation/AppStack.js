import React from 'react'

import { createNativeStackNavigator, TransitionPresets } from '@react-navigation/native-stack'
import MyDrawer from './DrawerNavigator';
import RestaurantsMap from '../screens/RestaurantsMap';

const App = createNativeStackNavigator();

export default function AppStack(){

return (
  <App.Navigator>
    <App.Screen
      name="App"
      component={MyDrawer}
      options={{
        headerShown: false,
        ...TransitionPresets,
      }}
    />
    <App.Screen
      name="RestaurantsMap"
      component={RestaurantsMap}
      options={{
        headerShown: false,
        ...TransitionPresets,
      }}
    />
  </App.Navigator>
);
}