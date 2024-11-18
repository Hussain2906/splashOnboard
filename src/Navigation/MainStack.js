import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './MainNavigation'; // Import DrawerNavigator from MainNavigation
import SplashScreen from './src/Views/SplashScreen'; // Add this import
import HomeScreen from './src/Views/HomeScreen';
import ProfileScreen from './src/Views/ProfileScreen';
import OptionScreen from './src/Views/OptionScreen';

const MainStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='SplashScreen' 
        component={SplashScreen} 
        options={{ headerShown: false }}  // Hide header on SplashScreen
      />
      <Stack.Screen 
        name='DrawerNav' 
        component={DrawerNavigator} 
        options={{ headerShown: false }}  // Hide header on DrawerNav
      />
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
      <Stack.Screen name='OptionScreen' component={OptionScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
