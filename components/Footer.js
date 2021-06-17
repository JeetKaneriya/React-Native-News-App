/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

import home from '../assets/images/house.png';
import search from '../assets/images/search.png';
import bookmark from '../assets/images/bookmark.png';

const Footer = props => {
  return (
    <View style={styles.footer}>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{
            width: 23,
            height: 23,
          }}
          source={home}
        />
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: 'bold',
            paddingLeft: 5,
          }}>
          Home
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '35%',
          justifyContent: 'space-between',
        }}>
        <Image
          style={{
            width: 23,
            height: 23,
          }}
          source={search}
        />
        <Image style={{width: 17, height: 22}} source={bookmark} />
        <Image
          style={{
            width: 26,
            height: 26,
            borderRadius: 100,
          }}
          source={{
            uri: 'https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg',
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 20,
  },
});

export default Footer;
