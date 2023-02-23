import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Platform,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Button} from '@rneui/themed';
import {colors, parameters, title} from '../global/styles';
import Header from '../components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';

//api ดึงข้อมูล
//const baseUrl = 'http://reqres.in';
//const baseUrl = " http://localhost:3000";
const baseUrl = 'http://172.16.156.225:3000';

//แบบที่1
//axios.get(`${baseUrl}/api/users/1`).then((response) => {
//console.log(response.data)
//});

//แบบที่2 async
//const fetchUser = async() =>{
//const url = `${baseUrl}/api/users/1`;
//const response = await axios.get(url)
//console.log(response.data)
//}
//fetchUser()

//**ยิง api Requests พร้อมกันหลายตัว
//const concurrentRequests = [
//axios.get(`${baseUrl}/api/users/1`),
// axios.get(`${baseUrl}/api/users/2`),
//axios.get(`${baseUrl}/api/users/3`),
//];

//**using Promise.all
//Promise.all(concurrentRequests)
//.then((result) => {
//console.log(result)
//})
//.catch((err) =>{
// console.log(err)
//})

//สร้าง Network Requests
//const axiosInstance = axios.create({baseURL: 'http://reqres.in/'});
//เรียกใช้ method get
//axiosInstance.get('api/users/1').then(response => {
//console.log(response.data);
//});

export default function DeleteRequest({navigation}) {
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState(null);

  const onChangeIdHandler = id => {
    setUserId(id);
  };

  const onSubmitFormHandler = async event => {
    if (!userId.trim()) {
      alert('UserId is invalid');
      return;
    }
    setIsLoading(true);

    try {
      const response = await axios.delete(`${baseUrl}/users/${userId}`);
      if (response.status === 204) {
        alert(`You have deleted: ${JSON.stringify(response.data)}`);
        setIsLoading(false);
        setUserId(null);
      } else {
        throw new Error('Failed to delete resource');
      }
    } catch (error) {
      alert('Failed to delete resource');
      setIsLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.view3}>
        <View style={styles.view2}>
          <Ionicons
            name="arrow-back"
            color={colors.black}
            size={30}
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>

      <View>
        <Text style={styles.text1}> Delete Request</Text>
      </View>

      <View>
        <View style={styles.wrapper}>
          {isLoading ? (
            <Text> Deleting resource </Text>
          ) : (
            <Text> Deleted user </Text>
          )}
        </View>
        <View style={styles.wrapper}>
          <TextInput
            placeholder="User ID"
            placeholderTextColor="#333"
            value={userId}
            editable={!isLoading}
            onChangeText={onChangeIdHandler}
            style={styles.input}
          />
        </View>
      </View>

      <View style={{marginTop: 10}}>
        <Button
          title="Submit"
          onPress={onSubmitFormHandler}
          disabled={isLoading}
          buttonStyle={styles.styledButton2}
          titleStyle={styles.buttontitle}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    //justifyContent: 'center',

    //marginTop: Platform.OS==='ios' ? 0 : Constants.statusBarHeight
  },
  wrapperStyle: {
    minHeight: 128,
  },
  wrapper: {
    marginBottom: 10,
  },
  buttonStyle: {
    marginTop: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: 'grey',
    minWidth: 300,
    textAlignVertical: 'center',
    paddingLeft: 10,
    borderRadius: 10,
    height: 50,
  },
  text1: {
    fontSize: 18,
    marginBottom: 10,
    marginTop: 40,
    color: 'black',
  },
  view1: {
    width: 40,
    height: 40,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  styledButton2: {
    backgroundColor: '#af7cf2',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borWidth: 1,
    bordorColor: '#af7cf2',
    height: 50,
    paddingHorizontal: 10,
    width: '100%',
  },

  buttontitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
  view2: {
    width: 50,
    height: 50,
    backgroundColor: colors.buttons,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  view3: {
    right: 150,
    margin: 30,
  },
});
