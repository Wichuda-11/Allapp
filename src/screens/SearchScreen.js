import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  Dimensions,
  TouchableWithoutFeedback,
  ImageBackgroundComponent,
} from 'react-native';
import React from 'react';
import {colors, parameters, title} from '../global/styles';
import {filterData2} from '../global/Data';
import SearchComponent from '../components/SearchComponent';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function SearchScreen({navigation}) {
  return (
    <View style={{flex: 1, marginBottom: 10, paddingTop: 20}}>
      <SearchComponent />
      <View style={{marginTop: 10}}>
        <View>
          <FlatList
            style={{}}
            data={filterData2}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('SearchResult', {item: item.name});
                }}>
                <View style={styles.imageView}>
                  <ImageBackground
                    style={styles.image}
                    source={{uri: item.image}}>
                    <View style={styles.textView}>
                      <Text style={{color: colors.Cardbackground}}>
                        {item.name}
                      </Text>
                    </View>
                  </ImageBackground>
                </View>
              </TouchableWithoutFeedback>
            )}
            horizontal={false}
            showsverticalScrollIndicator={false}
            numColumns={2}
            ListHeaderComponent={
              <Text style={styles.listHeader}>Top Categories</Text>
            }
            ListFooterComponent={<Footer />}
          />
        </View>
      </View>
    </View>
  );
}

const Footer = () => {
  return (
    <View style={{marginTop: 20, marginBottom: 30}}>
      <View style={{}}>
        <FlatList
          style={{marginBottom: 10}}
          data={filterData2}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate('SearchResult', {item: item.name});
              }}>
              <View style={styles.imageView}>
                <ImageBackground
                  style={styles.image}
                  source={{uri: item.image}}>
                  <View style={styles.textView}>
                    <Text style={{color: colors.Cardbackground}}>
                      {item.name}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>
          )}
          horizontal={false}
          showsverticalScrollIndicator={false}
          numColumns={2}
          ListHeaderComponent={
            <Text style={styles.listHeader}>More categories</Text>
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageView: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH * 0.4475,
    height: SCREEN_WIDTH * 0.4475,
    marginLeft: SCREEN_WIDTH * 0.035,
    marginBottom: SCREEN_WIDTH * 0.035,
    
  },

  image: {
    borderRadius: 10,
    height: SCREEN_WIDTH * 0.4475,
    width: SCREEN_WIDTH * 0.4475,
    
  },

  listHeader: {
    fontSize: 16,
    color: colors.grey2,
    paddingBottom: 10,
    marginLeft: 12,
  },

  textView: {
    height: SCREEN_WIDTH * 0.4475,
    width: SCREEN_WIDTH * 0.4475,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52,0.3)',
  },
});
