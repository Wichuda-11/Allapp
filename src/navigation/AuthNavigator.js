import React from 'react'

import { createNativeStackNavigator, TransitionPresets } from '@react-navigation/native-stack'
import AuthSignWelcome from '../screens/AuthScreens/AuthSignWelcome';
import AuthSignin from '../screens/AuthScreens/AuthSignin';
import AuthSignUp from '../screens/AuthScreens/AuthSignUp';


const Auth = createNativeStackNavigator();

export default function AuthStack(){
    return (
      <Auth.Navigator>
        <Auth.Screen
          name="AuthSignWelcome"
          component={AuthSignWelcome}
          options={{
            headerShown: false,
            ...TransitionPresets,
          }}
        />
        <Auth.Screen
          name="AuthSignin"
          component={AuthSignin}
          options={{
            headerShown: false,
            ...TransitionPresets,
          }}
        />
        <Auth.Screen
          name="AuthSignUp"
          component={AuthSignUp}
          options={{
            headerShown: false,
            ...TransitionPresets,
          }}
        />
        
      </Auth.Navigator>
    );
}