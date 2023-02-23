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
import React,{useState} from 'react';

import {colors, parameters, title} from '../global/styles';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Countdown from 'react-native-countdown-component';

import {Button} from '@rneui/themed';
import HomeHeader from '../components/HomeHeader';

import { filterData, restaurantsData } from '../global/Data';
import FoodCard from '../components/FoodCard';




const SCREEN_WIDTH = Dimensions.get('window').width

export default function Home({navigation}) {
    const [delivery, setDelivery] = useState(true)
    const [indexCheck, setIndexCheck] = useState('0')


  return (
    <View style={styles.container}>
      <HomeHeader navigation={navigation}/>

      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>
        <View
          style={{backgroundColor: colors.Cardbackground, paddingBottom: 10}}>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              onPress={() => {
                setDelivery(true);
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? colors.buttons : colors.grey5,
                }}>
                <Text style={styles.deliverytext}>Delivery</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setDelivery(false);
                navigation.navigate('RestaurantsMap')
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? colors.grey5 : colors.buttons,
                }}>
                <Text style={styles.deliverytext}>Pick Up</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.filterView}>
          <View style={styles.addressView}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 10,
              }}>
              <FontAwesome name="map-marker" color={colors.grey1} size={28} />
              <Text style={{marginLeft: 5}}>22 London Street</Text>
            </View>

            <View style={styles.clockView}>
              <FontAwesome5 name="clock" color={colors.grey1} size={28} />
              <Text style={{marginLeft: 5}}>Now</Text>
            </View>
          </View>

          <View>
            <MaterialIcons name="tune" color={colors.grey1} size={30} />
          </View>
        </View>

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Categories</Text>
        </View>

        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={filterData}
            keyExtractor={item => item.id}
            extraData={indexCheck}
            renderItem={({item, index}) => (
              <Pressable
                onPress={() => {
                  setIndexCheck(item.id);
                }}>
                <View
                  style={
                    indexCheck === item.id
                      ? {...styles.smallCardSelect}
                      : {...styles.smallCard}
                  }>
                  <Image
                    style={{
                      height: 60,
                      width: 60,
                      borderRadius: 20,
                      backgroundColor: colors.Cardbackground,
                      marginBottom: 5,
                    }}
                    source={item.image}
                  />

                  <View>
                    <Text
                      style={
                        indexCheck === item.id
                          ? {...styles.smallCardTextSelect}
                          : {...styles.smallCardText}
                      }>
                      {item.name}
                    </Text>
                  </View>
                </View>
              </Pressable>
            )}
          />
        </View>

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Free delivery now</Text>
        </View>

        <View>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Text
              style={{
                marginLeft: 15,
                fontSize: 18,
                marginTop: 10,
                marginRight: 5,
              }}>
              Options changing in
            </Text>
            {/*<Countdown
              until={3600}
              size={16}
              digitStyle={{backgroundColor: colors.lightgreen}}
              digitTextStyle={{color: colors.Cardbackground}}
              timeToShow={['M', 'S']}
              timeLabels={{m: 'Min', s: 'Sec'}}
            />*/}
          </View>

          <FlatList
            style={{marginTop: 10, marginBottom: 10}}
            horizontal={true}
            data={restaurantsData}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={{marginRight: 5}}>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.5}
                  images={item.images}
                  restaurantsName={item.restaurantsName}
                  farAway={item.farAway}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                />
              </View>
            )}
          />
        </View>

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Promotions available</Text>
        </View>

        <View>
          <FlatList
            style={{marginTop: 10, marginBottom: 10}}
            horizontal={true}
            data={restaurantsData}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={{marginRight: 5}}>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.6}
                  images={item.images}
                  restaurantsName={item.restaurantsName}
                  farAway={item.farAway}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                />
              </View>
            )}
          />
        </View>

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Restaurants in your area</Text>
        </View>

        <View style={{width: SCREEN_WIDTH, paddingTop: 10}}>
          {restaurantsData.map(item => (
            <View key={item.id} style={{paddingBottom: 10}}>
              <FoodCard
                screenWidth={SCREEN_WIDTH * 0.6}
                images={item.images}
                restaurantsName={item.restaurantsName}
                farAway={item.farAway}
                businessAddress={item.businessAddress}
                averageReview={item.averageReview}
                numberOfReview={item.numberOfReview}
              />
            </View>
          ))}
        </View>
      </ScrollView>

      {delivery && 
        <View style={styles.floatButton}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('BusinessConsole');
            }}>
            <FontAwesome
              name="map-marker"
              color={colors.buttons}
              size={32}
              style={{left:3}}
            />
            <Text style={{color: colors.grey2,}}>Map</Text>
          </TouchableOpacity>
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deliveryButton: {
    paddingHorizontal: 30,
    borderRadius: 15,
    paddingVertical: 10,
  },
  deliveryText: {
    marginLeft: 5,
    fontSize: 20,
  },
  filterView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  clockView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    backgroundColor: colors.Cardbackground,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginRight: 20,
  },
  addressView: {
    flexDirection: 'row',
    backgroundColor: colors.grey5,
    borderRadius: 15,
    paddingVertical: 5,
    marginTop: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  headerText: {
    color: colors.grey2,
    fontSize: 22,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  headerTextView: {
    backgroundColor: colors.grey5,
    paddingVertical: 3,
    marginVertical: 5,
  },
  smallCard: {
    borderRadius: 20,
    backgroundColor: colors.grey5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  smallCardSelect: {
    borderRadius: 20,
    backgroundColor: colors.buttons,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  smallCardTextSelect: {
    fontWeight: 'bold',
    color: colors.Cardbackground,
  },
  smallCardText: {
    fontWeight: 'bold',
    color: colors.grey2,
  },
  floatButton:{
    position: 'absolute',
    right:20,
    backgroundColor: 'white',
    elevation:10,
    width:60,height:60,
    borderRadius: 30,
    alignItems: 'center',
    marginTop:650,

  },
});
