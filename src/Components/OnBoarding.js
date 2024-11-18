import React from 'react';
import { FlatList, View, StyleSheet, Dimensions } from 'react-native';
import OnBoardingItem from './OnBoardingItem';

const { width } = Dimensions.get('window'); // Get the width of the device screen

const OnBoarding = ({ navigation }) => { // Accept 'navigation' as a prop here
  // Define the data for the onboarding screens
  const data = [
    {
      image: 'page1',
      title: 'Fresh Vegetables',
      desc: 'Get farm-fresh vegetables delivered right to your doorstep. We offer a wide variety of organic and locally sourced produce to meet your daily needs.'
    },
    {
      image: 'page2',
      title: 'Daily Essentials',
      desc: 'Order daily essentials like milk, eggs, and bread with our fast and reliable delivery service. We ensure high-quality products, delivered fresh every day.'
    },
    {
      image: 'page3',
      title: 'Gourmet & Snacks',
      desc: 'Craving something special? Explore our range of gourmet items and snacks, perfect for any occasion. Quick delivery options available for your convenience.'
    }
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.image}
        renderItem={({ item }) => <OnBoardingItem item={item} navigation={navigation} />} // Pass navigation to OnBoardingItem
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment="center"
        decelerationRate="fast"
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    alignItems: 'center',
  },
});

export default OnBoarding;
