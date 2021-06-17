/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import menu from '../assets/images/list.png';

const Header = props => {
  return (
    <View style={styles.header}>
      <View style={{marginTop: '15%', paddingHorizontal: 20}}>
        <Image style={{width: 30, height: 30}} source={menu} />
      </View>
      <View style={{paddingHorizontal: 20, paddingBottom: 10, paddingTop: 20}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 40,
            fontFamily: 'VarelaRound',
          }}>
          Daily News
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 'auto',
  },
});

export default Header;
