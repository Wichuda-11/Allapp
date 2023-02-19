import React,{useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthNavigator';
import AppStack from './AppStack';
import { SignInContext } from '../contexts/authContext';

export default function RootNavigatior(){

    const {signedIn} = useContext(SignInContext);

    return (
      <NavigationContainer>
        {signedIn.userToken === null? <AuthStack /> : <AppStack />}
      </NavigationContainer>
    );
}
