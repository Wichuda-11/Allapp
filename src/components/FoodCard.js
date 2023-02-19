import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Pressable,
  Image,
} from 'react-native';
import React from 'react';
import {restaurantsData} from '../global/Data';

import {colors, parameters, title} from '../global/styles';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {Button} from '@rneui/themed';

export default function FoodCard({
  OnPressFoodCard,
  restaurantsName,
  deliveryAvailable,
  discountAvailable,
  discountPercent,
  numberOfReview,
  businessAddress,
  farAway,
  averageReview,
  images,
  screenWidth,
}) {
  return (
    <TouchableOpacity>
      <View style={{...styles.cardView, with: screenWidth}}>
        <Image
          style={{...styles.imageView, with: screenWidth}}
          source={{uri: images}}
        />

        <View>
          <View>
            <Text style={styles.restaurantName}>{restaurantsName}</Text>
          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={styles.distance}>
              <FontAwesome
                name="map-marker"
                color={colors.grey2}
                size={20}
                iconStyle={{marginTop: 3}}
              />
              <Text style={styles.Min}> {farAway} Min </Text>
            </View>

            <View style={{flex: 9, flexDirection: 'row'}}>
              <Text style={styles.address}>{businessAddress}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.review}>
        <Text style={styles.average}>{averageReview}</Text>
        <Text style={styles.numberOfReview}> {numberOfReview} reviews </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardView: {
    marginHorizontal: 9,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderWidth: 1,
    borderColor: colors.grey4,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  imageView: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: 150,
  },
  restaurantName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.grey1,
    marginTop: 5,
    marginLeft: 10,
  },
  distance: {
    flex: 4,
    flexDirection: 'row',
    borderRightColor: colors.grey4,
    paddingHorizontal: 5,
    borderRightWidth: 1,
    marginLeft: 5,
    marginBottom: 5,
  },
  Min: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingTop: 5,
    color: colors.grey3,
  },
  address: {
    fontSize: 12,
    paddingTop: 5,
    color: colors.grey2,
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  review: {
    position: 'absolute',
    top: 0,
    right: 10,
    backgroundColor: 'rgba(52,52,52,0.3)',
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 12,
  },
  average: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -3,
  },
  numberOfReview: {
    color: 'white',
    fontSize: 15,
    marginRight: 0,
    marginLeft: 0,
  },
});
