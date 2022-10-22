import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/HomeScreen';
import SurveyScreen from './src/SurveyScreen';
import SurveyDoneScreen from './src/SurveyDoneScreen';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <NavigationContainer>
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Survey" component={SurveyScreen} />
      <HomeStack.Screen name="SurveyDone" component={SurveyDoneScreen} />
    </HomeStack.Navigator>
    </NavigationContainer>
  );
}

export default HomeStackScreen;