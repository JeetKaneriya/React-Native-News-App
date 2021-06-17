/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
} from 'react-native';

import ProfileDisplay from '../components/ProfileDisplay';

const {height} = Dimensions.get('screen');

const Post = props => {
  return (
    <View style={styles.post}>
      <View style={styles.postImage}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('News', {
              image: props.image,
              category: props.category,
              title: props.title,
            })
          }
          activeOpacity={0.75}>
          <ImageBackground
            imageStyle={{borderTopLeftRadius: 25, borderTopRightRadius: 25}}
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'flex-end',
              alignItems: 'baseline',
            }}
            source={{
              uri: props.image,
            }}>
            <View style={styles.categoryTypeContainer}>
              <Text style={styles.categoryType}>{props.category}</Text>
            </View>
            <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
              <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                {props.title}
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={styles.postText}>
        <ProfileDisplay
          name="Methila Janse"
          time="Jun 18 2 Min Road"
          Image={
            'https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg'
          }
          style={{width: '100%', paddingLeft: 20}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    width: '80%',
    height: height - 450,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 25,
    alignSelf: 'center',
    elevation: 8,
    shadowColor: 'black',
  },
  postImage: {
    width: '100%',
    height: '85%',
  },
  postText: {
    width: '100%',
    height: '15%',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  categoryTypeContainer: {
    backgroundColor: '#FF83C1',
    paddingLeft: 8,
    paddingRight: 10,
    paddingVertical: 3,
    borderRadius: 5,
    marginLeft: 20,
  },
  categoryType: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Post;
