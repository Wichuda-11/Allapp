import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  ScrollView,
  SafeAreaView,
  Alert
} from 'react-native';
import React, {useState, useRef, useContext} from 'react';
import * as Animatable from 'react-native-animatable';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';

import SignHeader from '../../components/SignHeader';
import {colors, parameters, title} from '../../global/styles';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {Button, SocialIcon} from '@rneui/themed';
import {SignInContext} from '../../contexts/authContext';




export default function AuthSignin({navigation}) {

  const {dispatchSignedIn} = useContext(SignInContext);
  

  const [textInput2Focused, settextInput2Focused] = useState(false);

  const textInput1 = useRef(1);
  const textInput2 = useRef(2);

  async function signIn(data) {
    try {
      const {password, email} = data;
      const user = await auth().signInWithEmailAndPassword(email, password);
      if (user) {
        //console.log(user)
        dispatchSignedIn({
          type: 'UPDATE_SIGN_IN',
          payload: {userToken: 'signed-in'},
        });
      }
    } catch (error) {
      Alert.alert(error.name, error.message);
    }
  }

  return (
    <View style={styles.container}>
      <SignHeader
        title="MY ACCOUNT"
        type="arrow-back"
        navigation={navigation}
      />

      <ScrollView>
        <View style={{marginLeft: 20, marginTop: 30, marginBottom: 10}}>
          <Text style={title}>Sign In</Text>
        </View>

        <View style={{alignItems: 'center', maginTop: 10, marginBottom: 30}}>
          <Text style={styles.text1}>Please enter the email and password</Text>
          <Text style={styles.text1}>register with your account</Text>
        </View>

        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={values => {
            //console.log(values);
            signIn(values);
          }}>
          {props => (
            <View>
              <View style={{marginTop: 10}}>
                <View>
                  <TextInput
                    style={styles.TextInput1}
                    placeholder="Email"
                    ref={textInput1}
                    onChangeText={props.handleChange('email')}
                    value={props.values.email}
                  />
                </View>

                <View style={styles.TextInput2}>
                  <Animatable.View
                    animation={textInput2Focused ? '' : 'fadeInLeft'}
                    duration={400}>
                    <Ionicons
                      name="lock-closed"
                      iconStyle={{color: colors.grey3}}
                      size={24}
                    />
                  </Animatable.View>
                  <TextInput
                    placeholder="Password"
                    style={{width: '80%'}}
                    ref={textInput2}
                    onFocus={() => {
                      settextInput2Focused(false);
                    }}
                    onBlur={() => {
                      settextInput2Focused(true);
                    }}
                    onChangeText={props.handleChange('password')}
                    value={props.values.password}
                  />
                  <Animatable.View
                    animation={textInput2Focused ? '' : 'fadeInLeft'}
                    duration={400}>
                    <Ionicons
                      name="eye-off"
                      iconStyle={{color: colors.grey3}}
                      size={24}
                    />
                  </Animatable.View>
                </View>
              </View>

              <View style={{marginHorizontal: 20, marginVertical: 30}}>
                <Button
                  title="SIGN IN"
                  buttonStyle={parameters.styledButton}
                  titleStyle={parameters.buttontitle}
                  onPress={props.handleSubmit}
                />
              </View>
            </View>
          )}
        </Formik>

        <View style={{alignItems: 'center', marginBottom: 20}}>
          <Text style={{...styles.text1, textDecorationLine: 'underline'}}>
            Forgot Password ?
          </Text>
        </View>

        <View style={{alignItems: 'center', marginBottom: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
            OR
          </Text>
        </View>

        <View style={{alignItems: 'center', marginBottom: 10}}>
          <SocialIcon
            title="Sign In Eith Facebook"
            button
            type="facebook"
            style={styles.socialIcon}
            onPress={() => {}}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <SocialIcon
            title="Sign In Eith Facebook"
            button
            type="google"
            style={styles.socialIcon}
            onPress={() => {}}
          />
        </View>

        <View style={{marginLeft: 20, marginVertical: 20}}>
          <Text style={{...styles.text1}}>New on JeepFood ?</Text>
        </View>

        <View
          style={{
            alignItems: 'flex-end',
            marginHorizontal: 20,
            marginBottom: 30,
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    color: colors.grey3,
    fontSize: 18,
  },
  TextInput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 25,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
  },
  TextInput2: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 25,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  socialIcon: {
    borderRadius: 12,
    height: 50,
    width: '90%',
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
    fontSize: 16,
    fontWeight: 'bold',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
