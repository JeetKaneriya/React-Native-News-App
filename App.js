import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Feed from './screens/feed';
import News from './screens/newsScreen';

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};

const App = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="News" component={News} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
