import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  ScrollView,
  SafeAreaView,
  Image,
  Alert
} from 'react-native';
import React, {useState,useRef,useContext,useEffect} from 'react'
import * as Animatable from 'react-native-animatable';

import SignHeader from '../../components/SignHeader';
import {colors, parameters, title} from '../../global/styles';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { Button, SocialIcon } from '@rneui/themed';

import Swiper from 'react-native-swiper';

import auth from '@react-native-firebase/auth';
import {SignInContext} from '../../contexts/authContext';

export default function AuthSignWelcome({navigation}) {
  const {dispatchSignedIn} = useContext(SignInContext);

    //เข้าระบบแล้วให้อยู่ในแอป ไม่ต้องเข้าทุกครั้ง
  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        dispatchSignedIn({
          type: 'UPDATE_SIGN_IN',
          payload: {userToken: 'signed-in'},
        });
      } else {
        dispatchSignedIn({type: 'UPDATE_SIGN_IN', payload: {userToken: null}});
      }
    });
  }, []);


  return (
    <View style={{flex: 3}}>
      <View
        style={{
          flex: 3,
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingTop: 20,
        }}>
        <Text style={{fontSize: 26, color: colors.buttons, fontWeight: 'bold'}}>
          RESTAURANTS
        </Text>
        <Text style={{fontSize: 26, color: colors.buttons, fontWeight: 'bold'}}>
          IN YOUR AREA
        </Text>
      </View>

      <View style={{flex: 4, justifyContent: 'center'}}>
        <Swiper autoplay={true}>
          <View style={styles.slide1}>
            <Image
              source={{
                uri: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5nTwNdsQrFMZz5CbMuzPGOK6ddqFBZsmgX3stllC20ChVEN210n.jpg',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>

          <View style={styles.slide2}>
            <Image
              source={{
                uri: 'https://s359.kapook.com/pagebuilder/a9b86b24-fd18-4e76-9b01-cd4a273d312c.jpg',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>

          <View style={styles.slide3}>
            <Image
              source={{
                uri: 'https://www.knorr.com/content/dam/unilever/knorr_world/thailand/digital_and_online/banner_subcat_ingredientseafood_%E0%B8%AB%E0%B8%A1%E0%B8%B6%E0%B8%81%E0%B8%A2%E0%B8%B1%E0%B8%94%E0%B9%84%E0%B8%AA%E0%B9%89%E0%B8%A2%E0%B8%B3%E0%B9%81%E0%B8%8B%E0%B9%88%E0%B8%9A-34932927-jpg.jpg',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>

          <View style={styles.slide3}>
            <Image
              source={{
                uri: 'https://img.wongnai.com/p/1920x0/2019/02/19/3a9dca18fd854a7e8e580368b149cfd6.jpg',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>
        </Swiper>
      </View>

      <View style={{flex: 4, justifyContent: 'flex-end', marginBottom: 20}}>
        <View style={{marginHorizontal: 20}}>
          <Button
            title="SIGN IN"
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttontitle}
            onPress={() => {
              navigation.navigate('AuthSignin');
            }}
          />
        </View>

        <View
          style={{
            marginHorizontal: 20,
            marginTop: 20,
          }}>
          <Button
            title="Create an account"
            buttonStyle={styles.createButton}
            titleStyle={styles.createbuttontitle}
            onPress={() => {
              navigation.navigate('AuthSignUp');
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9dd6eb',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97cae5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92bbd9',
  },
  createButton: {
    borderWidth: 1,
    borderColor: '#af7cf2',
    borderRadius: 12,
    alignContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  createbuttontitle: {
    color: '#af7cf2',
    fontSize: 20,
    fontWeight: 'bold',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});