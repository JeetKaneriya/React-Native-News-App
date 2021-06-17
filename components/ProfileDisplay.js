/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const ProfileDisplay = props => {
  return (
    <View style={{...styles.profileContainer, ...props.style}}>
      <Image source={{uri: props.Image}} style={styles.profilePhoto} />
      <View style={styles.profileNameContainer}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.postTime}>{props.time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
  },
  profilePhoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  profileNameContainer: {
    marginLeft: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  postTime: {
    color: '#B2BABB',
    fontSize: 11,
    fontWeight: 'bold',
  },
});

export default ProfileDisplay;
