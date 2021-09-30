/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Rating} from 'react-native-ratings';

import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
const Trending = ({navigation, title, item, data}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Details', {
          items: item,
          data: data,
        })
      }>
      <View style={styles.card}>
        <Image style={styles.image} source={{uri: item.image}} />
        <View
          style={{
            flex: 1,
            flexWrap: 'wrap',
            marginLeft: 10,
            backgroundColor: '#007CFF',
            borderRadius: 5,
          }}>
          <View style={styles.title}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                flexWrap: 'wrap',
                color: 'white',
              }}>
              {title}
            </Text>
            <Text style={{marginTop: 10, color: 'white'}}>
              Fantasy/Action/ 2019
            </Text>
          </View>
          <View style={{marginTop: 15}}>
            <Rating
              type="star"
              ratingCount={item.imDbRating / 2}
              imageSize={18}
              defaultRating={item.imDbRating / 2}
              isDisabled={true}
              ratingBackgroundColor="#007CFF"
            />
            {/* <Text style={{paddingBottom: 25, paddingTop: 25}}>
                Rating stars
              </Text> */}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

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

export default Trending;
