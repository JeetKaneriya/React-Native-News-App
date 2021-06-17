/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, TouchableOpacity, Text, StyleSheet} from 'react-native';

const ScrollBar = props => {
  return (
    <ScrollView horizontal style={styles.scrollBar}>
      <TouchableOpacity
        onPress={() =>
          props.setModel({
            ...props.model,
            foryou: true,
            foryoubold: 'black',
            featured: false,
            featuredbold: '#B2BABB',
            topstories: false,
            topstoriesbold: '#B2BABB',
          })
        }
        activeOpacity={0.6}>
        <Text style={[styles.text, {color: props.model.foryoubold}]}>
          For You
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          props.setModel({
            ...props.model,
            foryou: false,
            foryoubold: '#B2BABB',
            featured: true,
            featuredbold: 'black',
            topstories: false,
            topstoriesbold: '#B2BABB',
          })
        }
        activeOpacity={0.6}>
        <Text style={[styles.text, {color: props.model.featuredbold}]}>
          Featured
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          props.setModel({
            ...props.model,
            foryou: false,
            foryoubold: '#B2BABB',
            featured: false,
            featuredbold: '#B2BABB',
            topstories: true,
            topstoriesbold: 'black',
          })
        }
        activeOpacity={0.6}>
        <Text style={[styles.text, {color: props.model.topstoriesbold}]}>
          Top Stories
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollBar: {
    paddingVertical: 15,
  },
  text: {
    paddingLeft: 20,
    paddingRight: 20,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#B2BABB',
  },
});

export default ScrollBar;
