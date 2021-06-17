/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';

import back from '../assets/images/back.png';
import bookmark from '../assets/images/bookmark.png';
import share from '../assets/images/share.png';

import ProfileDisplay from '../components/ProfileDisplay';

const NewsScreen = props => {
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
      <ImageBackground
        source={{
          uri: props.route.params.image,
        }}
        style={styles.imageContainer}>
        <TouchableOpacity
          style={styles.backButtonContainer}
          onPress={() => props.navigation.navigate('Feed')}
          activeOpacity={0.6}>
          <Image
            style={{
              width: 15,
              height: 15,
              marginLeft: 3,
            }}
            source={back}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <View style={styles.categoryTypeContainer}>
            <Text style={styles.categoryType}>
              {props.route.params.category}
            </Text>
          </View>
          <Text style={styles.title}>{props.route.params.title}</Text>
        </View>
      </ImageBackground>

      <View style={styles.newsContainer}>
        <View style={styles.circleButtonContainer}>
          <View style={styles.circleContainer}>
            <Image
              style={{
                width: 15,
                height: 20,
              }}
              source={bookmark}
            />
          </View>
          <View style={styles.circleContainer}>
            <Image
              style={{
                width: 18,
                height: 18,
                marginRight: 2,
              }}
              source={share}
            />
          </View>
        </View>
        <ProfileDisplay
          name="Methila Janse"
          time="Jun 18 2 Min Road"
          Image={
            'https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg'
          }
          style={{width: '100%'}}
        />
        <Text style={styles.news}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <View style={styles.NewsImageContainer}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80',
            }}
            style={styles.image}
          />
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80',
            }}
            style={styles.image}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
  },
  backButtonContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 5,
    marginTop: 60,
    marginLeft: 25,
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    textAlign: 'center',
    color: 'white',
    lineHeight: 25,
    padding: 0,
    fontSize: 22,
  },
  titleContainer: {
    alignItems: 'baseline',
    marginBottom: 40,
    marginHorizontal: 25,
  },
  categoryTypeContainer: {
    backgroundColor: '#383637',
    paddingLeft: 8,
    paddingRight: 10,
    paddingVertical: 3,
    borderRadius: 5,
    marginBottom: 20,
  },
  categoryType: {
    color: 'white',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
  newsContainer: {
    flex: 1,
    width: '100%',
    padding: 25,
  },
  circleButtonContainer: {
    position: 'absolute',
    alignSelf: 'flex-end',
    right: 20,
    // top: "-50%",
    flexDirection: 'row',
    width: 95,
    justifyContent: 'space-between',
  },
  circleContainer: {
    top: -20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    borderRadius: 50,
  },

  news: {
    marginVertical: 20,
    fontSize: 16,
    lineHeight: 25,
    fontWeight: 'bold',
  },
  image: {
    width: '45%',
    height: 100,
    borderRadius: 10,
  },
  NewsImageContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
});

export default NewsScreen;
