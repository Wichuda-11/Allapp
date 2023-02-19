import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ImageBackground, Animated} from 'react-native';
import {restaurantsData} from '../global/Data';
import {colors} from '../global/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function RestaurantHeader({navigation, id}) {
  const index2 = 10;
  const currentValue = new Animated.Value(1);

  const [liked, setLiked] = useState(false);
  const [counter, setCounter] = useState(-2);
  const [visible, setVisible] = useState(false);

  const likeHander = () => {
    if (liked == false) setVisible(true);

    setLiked(!liked);
    setCounter(index2);
  };

  useEffect(() => {
    if (liked == true) {
      Animated.spring(currentValue, {
        toValue: 3,
        friction: 2,
        useNativeDriver: true,
      }).start(() => {
        Animated.spring(currentValue, {
          toValue: 1,
          useNativeDriver: true,
          friction: 2,
        }).start(() => {
          setVisible(false);
        });
      });
    }
  }, [liked]);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.container}
        source={{uri: restaurantsData[id].images}}
        imageStyle={styles.image}>
        <View style={styles.view1}>
          <View style={styles.view2}>
            <Ionicons
              name="arrow-back"
              color={colors.black}
              size={30}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={styles.view3}>
            <MaterialIcons
              name={liked && index2 == counter ? 'favorite' : 'favorite-border'}
              color="red"
              size={30}
              onPress={likeHander}
            />
          </View>
        </View>
        <View style={styles.view4}>
          {visible && index2 == counter && (
            <Animated.View style={{transform: [{scale: currentValue}]}}>
              <MaterialIcons name="favorite" size={40} color="red" />
            </Animated.View>
          )}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {height: 200, marginLeft: 5, marginRight: 5},

  image: {
    borderRadius: 10,
  },

  view1: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },

  view2: {
    width: 40,
    height: 40,
    backgroundColor: colors.Cardbackground,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },

  view3: {
    width: 40,
    height: 40,
    backgroundColor: colors.Cardbackground,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },

  view4: {marginTop: 0, alignItems: 'center', justifyContent: 'center'},
});
