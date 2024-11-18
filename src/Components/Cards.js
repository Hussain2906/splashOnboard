import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Cards = () => {
  const Data = [
    { id: "01", name: "Dairy Products" },
    { id: "02", name: "Chocolates & Candies" },
    { id: "03", name: "Stationary & Sports" },
    { id: "04", name: "Baby & Toddler Toys" },
    { id: "05", name: "Children's Toys & Games" },
    { id: "06", name: "Fun For All Ages" },
  ];

  return (
    <SafeAreaView>
      <View style={{ flexDirection: "row", flexWrap: 'wrap', justifyContent: "space-evenly", marginBottom: 10 }}>
        {Data.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={{
              backgroundColor: '#FFDAB9',
              width: '27%',
              height: 110,
              borderRadius: 20,
              elevation: 5,
              marginBottom: 10,
            }}>
            <Text style={styles.textDecorate}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Cards;

const styles = StyleSheet.create({
  textDecorate: {
    textAlign: "center",
    color: "black",
    marginTop: 10,
  },
});
