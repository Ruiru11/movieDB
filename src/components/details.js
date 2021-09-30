/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Rating} from 'react-native-ratings';

import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Trending from './views/trendingShows';
import axios from 'axios';

const Details = ({route, navigation}) => {
  const {items, data} = route.params;
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(false);
  const getTrending = () => {
    setLoading(true);
    axios
      .get('https://imdb-api.com/en/API/InTheaters/k_mtd394sq')
      .then(res => {
        console.log('resre', res);
        setShows(res.data.items);
        setLoading(false);
        console.log('resfrom storere', shows);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTrending();
  }, []);

  console.log('herrrrrr', items, data);
  const renderItem = ({item}) => (
    <Trending
      title={item.title}
      navigation={navigation}
      item={item}
      data={data}
    />
  );
  return (
    <View style={styles.container}>
      <View style={{height: '40%'}}>
        <ImageBackground
          source={{uri: items.image}}
          style={{width: '100%', height: '100%'}}>
          <View
            style={{
              position: 'absolute',
              top: 70,
              left: 30,
              right: 10,
              bottom: 0,
              color: 'white',
              //   flex: 1,
              //   flexWrap: 'wrap',
            }}>
            <Text style={{color: 'white'}}>Top Movie Of the week</Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                width: '100%',
                marginTop: 2,
                color: 'white',
              }}>
              {items.title}
            </Text>
            <View style={{flex: 0, flexDirection: 'row', color: 'white'}}>
              <Text style={{color: 'white'}}>{items.year}</Text>
              <Text style={{color: 'white'}}>Fantasy/thriller</Text>
              <Text style={{color: 'white'}}> 2hr 52 min</Text>
            </View>
            <Text style={{color: 'white', fontWeight: 'bold', marginTop: 4}}>
              s simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </Text>

            <View style={{padding: 25, marginRight: 40}}>
              <Rating
                type="star"
                ratingCount={5}
                imageSize={18}
                defaultRating={4}
                isDisabled={true}
                ratingBackgroundColor="#007CFF"
              />
              {/* <Text style={{paddingBottom: 25, paddingTop: 25}}>
                Rating stars
              </Text> */}
            </View>
          </View>
        </ImageBackground>
      </View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        Also trending
      </Text>
      <View style={{marginBottom: 20, marginTop: '13%'}}>
        {loading && <ActivityIndicator size="large" color="#00ff00" />}
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={itemID => itemID.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252634',
  },
  card: {
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#000',
    width: 350,
    height: 180,
    flexDirection: 'row',
    backgroundColor: '#007CFF',
    marginVertical: 8,
    marginHorizontal: 16,
    marginTop: 0,
  },
  image: {
    width: 170,
    height: 178,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    width: '100%',
    marginTop: 20,
  },
  type: {
    flex: 1,
    fontSize: 9,
    fontWeight: '700',
    width: '100%',
    flexWrap: 'wrap',
  },
});

export default Details;
