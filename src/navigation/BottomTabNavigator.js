import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../component/HomeScreen';
import ScreenOne from '../component/Screenone';
import ScreenTwo from '../component/Screentwo';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="ScreenOne" component={ScreenOne} />
      <Tab.Screen name="ScreenTwo" component={ScreenTwo} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
