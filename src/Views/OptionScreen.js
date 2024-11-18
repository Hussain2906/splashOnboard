import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const OptionScreen = ({navigation}) => {
  return (
    <View>
      <Text>Option Screen Page</Text>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text>Open Drawer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OptionScreen;

const styles = StyleSheet.create({});
