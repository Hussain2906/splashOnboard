import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';

const ProfileScreen = ({navigation}) => {
  return (
    <View>
      <Text>Profile Screen Page</Text>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text>Open Drawer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
