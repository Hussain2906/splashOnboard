import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';

const SplashScreen = ({navigation}) => {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
      navigation.replace('OnBoarding');
    }, 3000);

    return ()=> clearTimeout(timer)
  }, [navigation]);
  if (!isReady) {
    return (
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={require('../assets/screen.png')} style={styles.logo} />
      </View>
    );
  }
  
  return null;
};

export default SplashScreen;

const styles = StyleSheet.create({
  logo: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
});
