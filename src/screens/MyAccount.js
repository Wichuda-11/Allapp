import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Platform,
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

function User({userObject}) {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={{uri: userObject.avatar}}
        style={{
          width: 128,
          height: 128,
          borderRadius: 64,
          marginBottom: 10,
        }}
      />
      <Text
        style={
          styles.text1
        }>{`ID: ${userObject.id} ${userObject.first_name} ${userObject.last_name}`}</Text>
    </View>
  );
}

export default function MyAccount({navigation}) {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setErrorFlag] = useState(false);

  const changeUserIdHandler = () => {
    setUserId(userId => (userId === 10 ? 1 : userId + 1));
  };

  useEffect(() => {
    const source = axios.CancelToken.source();
    const url = `${baseUrl}/users/${userId}`;
    //const url = `${baseUrl}/users`;
    const fetchUsers = async () => {
      const response = await axios.get(url, {cancelToken: source.token});
      try {
        setIsLoading(true);
        //const response = await axios.get(url, { cancelToken: source.token });

        if (response.status === 200) {
          setUser(response.data.data);
          setIsLoading(false);
          return;
        } else {
          throw new Error('Failed to fetch users');
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Data fetching cancelled');
        } else {
          setErrorFlag(true);
          setIsLoading(false);
        }
      }
    };
    fetchUsers();
    return () => source.cancel('Data fetching cancelled');
  }, [userId]);

  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.text1}> Get Request</Text>
      </View>

      <View style={styles.wrapperStyle}>
        {!isLoading && !hasError && user && <User userObject={user} />}
      </View>
      <View style={styles.wrapperStyle}>
        {isLoading && <Text>Loading...</Text>}
        {!isLoading && hasError && <Text>An error has occurred</Text>}
      </View>
      <View>
        <View style={styles.buttonStyle}>
          <Button
            title="Load user"
            onPress={changeUserIdHandler}
            disabled={isLoading}
            buttonStyle={styles.styledButton2}
            titleStyle={styles.buttontitle}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

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
});
