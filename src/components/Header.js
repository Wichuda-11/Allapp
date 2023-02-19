import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {colors, parameters} from '../global/styles';



export default function Header({title, type, navigation}) {
  return (
    <View style={styles.header}>
      <View style={{marginLeft: 20,marginTop: 10}}>
        <Ionicons
          name={type}
          color={colors.headertext}
          size={30}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height: parameters.headerHight,
  },

  headerText: {
    color: colors.headertext,
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: 30,
    marginTop: 10,
  },
});
