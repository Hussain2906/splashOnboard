import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Views/HomeScreen';
import SplashScreen from '../Views/SplashScreen'; // Ensure SplashScreen is imported
import ProfileScreen from '../Views/ProfileScreen';
import Notification from '../Views/Notification';
import OptionScreen from '../Views/OptionScreen';
import { Alert, Image, TouchableOpacity, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/AntDesign';
import Login from '../Views/AuthScreen/Login';
import Signup from '../Views/AuthScreen/Signup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnBoarding from '../Components/OnBoarding';

// Bottom Tab Navigation
const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'profile';
          } else if (route.name === 'Options') {
            iconName = 'switcher';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#0E2F44',
        tabBarActiveBackgroundColor: '#6897BB',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen} // Direct HomeScreen reference here
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Options"
        component={OptionScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

// Drawer Navigation
const Drawer = createDrawerNavigator();
function DrawerNavigator({ navigation }) {
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('user'); // Remove user data from AsyncStorage
      Alert.alert('You have been Logged Out');
      navigation.replace('Login'); // Navigate to Login after logging out
    } catch (err) {
      console.log('Logout error', err);
    }
  };

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: { backgroundColor: '#fff', width: 250 },
        drawerLabelStyle: { fontSize: 16, fontWeight: 'bold' },
        drawerActiveTintColor: '#694fad',
        drawerInactiveTintColor: '#aaa',
        headerStyle: { backgroundColor: 'white' },
        headerTintColor: '#0E2F44',
        headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
        headerTitle: () => (
          <Image
            source={require('../assets/logo.png')}
            style={{ width: 100, height: 35, marginLeft: -15, marginTop: 4 }}
          />
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Feather
              name="bell"
              size={20}
              color="black"
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
        ),
      }}
    >
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Settings" component={OptionScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen
        name="Logout"
        component={() => null} // No screen for Logout, it's handled by TouchableOpacity
        options={{
          drawerLabel: () => (
            <TouchableOpacity style={{ padding: 20 }} onPress={handleLogout}>
              <Text style={{ color: '#694fad', fontSize: 16 }}>Logout</Text>
            </TouchableOpacity>
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

// Main Navigation Component with SplashScreen
export default function MainNavigation() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        {/* SplashScreen comes first */}
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }} // Hide header for SplashScreen
        />
        {/* After SplashScreen, load DrawerNavigator */}
        <Stack.Screen
          name="DrawerNav"
          component={DrawerNavigator}
          options={{ headerShown: false }} // Hide header for DrawerNavigator
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
