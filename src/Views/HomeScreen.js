import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput, KeyboardAvoidingView, FlatList, Image } from 'react-native';
import { useState } from 'react';
import React from 'react';
import Cards from '../Components/Cards';

const HomeScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [selectedId, setSelectedId] = useState(null); // State to track the selected item

  const Data = [
    {
      id: '01',
      name: 'All',
      url: require('../assets/HomeImg/all.png'),
    },
    {
      id: '02',
      name: 'Electronics',
      url: require('../assets/HomeImg/all.png'),
    },
    {
      id: '03',
      name: 'Beauty',
      url: require('../assets/HomeImg/all.png'),
    },
    {
      id: '04',
      name: 'Kids',
      url: require('../assets/HomeImg/all.png'),
    },
    {
      id: '05',
      name: 'Gifting',
      url: require('../assets/HomeImg/all.png'),
    },
    {
      id: '06',
      name: 'Premium',
      url: require('../assets/HomeImg/all.png'),
    },
  ];

  // Function to handle item press and set the active item
  const handlePress = (id) => {
    setSelectedId(id);
  };

  const renderItem = ({ item }) => {
    const isSelected = item.id === selectedId; // Check if the current item is selected

    return (
      <TouchableOpacity
        onPress={() => handlePress(item.id)}
        style={[styles.itemContainer, isSelected && styles.activeItem]}
      >
        <Image source={item.url} style={styles.image} />
        <Text style={styles.itemText}>{item.name}</Text>
        {/* Conditionally render the bottom line if the item is selected */}
        {isSelected && <View style={styles.activeBottomLine} />}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor:"white", height:"100%"}}>
      <KeyboardAvoidingView>
        <View style={styles.container}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search..."
            value={search}
            onChangeText={setSearch}
          />
        </View>
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id} // Ensure unique key for each item
          horizontal={true}
          showsHorizontalScrollIndicator={false} // Hide horizontal scroll bar
        />
        <Cards/>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 30,
    paddingLeft: 10,
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: 30, // Image width
    height: 30, // Image height
    resizeMode: 'cover', // Adjust the image aspect
    marginHorizontal:10,
    marginTop:20
  },
  itemContainer: {
    margin: 10,
    marginTop:20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    marginTop: 5,
    fontSize: 16,
  },
  activeBottomLine: {
    height: 4, // Height of the bottom line
    width: '100%', // Make it span the entire width
    backgroundColor: '#000', // Change the color to whatever you prefer (e.g., active color)
    marginTop: 5,
  },
});
