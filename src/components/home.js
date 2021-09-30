/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import CardView from './views/cardView';

import {
  Text,
  View,
  StyleSheet,
  FlatList,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';

function Movies({navigation}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getDATA = () => {
    setLoading(true);
    axios
      .get('https://imdb-api.com/en/API/MostPopularMovies/k_z6lalr8i')
      .then(res => {
        setData(res.data.items);
        setLoading(false);
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  useEffect(() => {
    getDATA();
  }, []);

  console.log('see dta', data);

  const renderItem = ({item}) => (
    <CardView
      title={item.title}
      items={item}
      navigation={navigation}
      data={data}
    />
  );
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#00BCD4"
        translucent={true}
      />
      <View style={{flex: 0, flexDirection: 'row', marginTop: '10%'}}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 20,

            paddingRight: 180,
          }}>
          Top Movies
        </Text>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 20,

            padding: 1,
          }}>
          Search
        </Text>
      </View>
      <View style={{marginBottom: 20, marginTop: '13%'}}>
        {loading && <ActivityIndicator size="large" color="#00ff00" />}
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          onEndReachedThreshold={0.5}
          initialNumToRender={10}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
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

export default Movies;
