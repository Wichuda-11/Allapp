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
import React, {useState, useEffect, useRef} from 'react';

import {colors, parameters, title} from '../global/styles';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {restaurantsData} from '../global/Data';

import MapView, {enableLatestRenderer, Marker} from 'react-native-maps';

enableLatestRenderer();

export default function BusinessConsole() {
  const [items, setItems] = useState([]);

  //ซูทเข้าที่สถานที่
  //const [region, setRegion] = useState({});
  //region={region}

  //เลื่อนมาร์คแมพตามตอนเลื่อน ทำ animation ได้
  const mapRef = useRef(null);

  //setRegion({
  //latitude: result[0].latitude,
  //longitude: result[0].longitude,
  //latitudeDelta: 2,
  //longitudeDelta: 2,
  //});

  useEffect(() => {
    fetch('http://www.melivecode.com/api/attractions')
      .then(res => res.json())
      .then(result => {
        setItems(result);
      });
  }, []);

  //แสดงหน้ารอโหลด
  if (items.length === 0) {
    return (
      <View>
        <Text>Loading.....</Text>
      </View>
    );
  }

  //สร้างฟังชั่นแสดงกดแล้วซูมเข้า
  const go = (latitude, longitude) => {
    mapRef.current.animateToRegion(
      {
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 2,
        longitudeDelta: 2,
      },
      1000,
    );
    //setRegion({
    //...region,
    //latitude: latitude,
    //longitude: longitude,
    //});
  };

  //เลื่อนแล้วโชว์

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        ref={mapRef}
        initialRegion={{
          latitude: items[0].latitude,
          longitude: items[0].longitude,
          latitudeDelta: 2,
          longitudeDelta: 2,
        }}>
        {items.map((item, index) => (
          <Marker
            key={item.id}
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
            }}
            title={item.name}
          />
        ))}
      </MapView>

      <View style={styles.listview}>
        <FlatList
          style={{marginTop: 10, marginBottom: 10}}
          horizontal={true}
          data={items}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={styles.listItem}>
              <Pressable onPress={() => go(item.latitude, item.longitude)}>
                <Text style={styles.listText}>{item.name}</Text>
                <Image
                  source={{uri: item.coverimage}}
                  style={{
                    width: 300,
                    height: 150,
                    borderRadius: 10,
                    elevation: 4,
                  }}
                />
              </Pressable>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  listview: {
    position: 'absolute',
    bottom: 10,
  },
  listItem: {
    padding: 5,
  },
  listText: {
    fontSize: 18,
  },
});
