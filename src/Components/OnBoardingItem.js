import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the hook

const { width } = Dimensions.get('window'); // Get the width of the device screen

const OnBoardingItem = ({ item }) => {
  const navigation = useNavigation(); // Use the hook to access navigation

  const resolveImage = (imageName) => {
    switch (imageName) {
      case 'page1':
        return require('../assets/OnBoard/page1.png');
      case 'page2':
        return require('../assets/OnBoard/page2.png');
      case 'page3':
        return require('../assets/OnBoard/page3.png');
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Image source={resolveImage(item.image)} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.desc}</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')} // Navigate to 'Login' screen
        style={{ width: '30%', height: 80, borderRadius: 100, backgroundColor: '#2D304E' }}
      >
        <Text style={{ textAlign: 'center', color: 'white', marginTop: 26 }}>Go Ahead</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width, // Each item takes full screen width
    paddingHorizontal: 20,
    paddingBottom: 40, // Ensure there's space at the bottom for description
  },
  image: {
    width: '100%', // Ensure the image takes up the full width
    height: 250, // Fixed height for consistency across images
    marginBottom: 20, // Space between image and text
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    lineHeight: 24,
    marginHorizontal: 20,
  },
});

export default OnBoardingItem;
