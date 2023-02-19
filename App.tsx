import {View, Text, StyleSheet, StatusBar,} from 'react-native';
import React from 'react'

import {colors} from './src/global/styles';
import RootNavigatior from './src/navigation/RootNavigator';

import { SignInContextProvider } from './src/contexts/authContext';


export default function App (){
  return (
    <SignInContextProvider>
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.statusbar}
        />
        <RootNavigatior />
      </View>
    </SignInContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1}
})
