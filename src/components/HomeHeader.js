import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {colors, parameters} from '../global/styles';

import {Button, SocialIcon, withBadge} from '@rneui/themed';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialIcons';

export default function HomeHeader({navigation}) {

    const BadgeIcon = withBadge(0)(Ionicons);

  return (
    <View style={styles.header}>
      <View
        style={{
          marginLeft: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Material
          name="menu"
          color={colors.Cardbackground}
          size={36}
          onPress={() => {
            navigation.toggleDrawer()
          }}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        
        <Text
          style={{
            color: colors.Cardbackground,
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          JeepFood
        </Text>
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 20,
        }}>
        <BadgeIcon
          name ="md-cart"
          color={colors.Cardbackground}
          size={36}
          onPress={() => {}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height: parameters.headerHight,
    justifyContent: 'space-between',
  },
  headerText: {
    color: colors.headertext,
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: 30,
    marginTop: 10,
  },
});
