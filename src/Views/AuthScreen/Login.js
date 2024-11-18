import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');

  const handleLogin = async () => {
    try {
      const storedUser = await AsyncStorage.getItem('user');

      if (storedUser !== null) {
        const parsedUser = JSON.parse(storedUser);

        if (email === parsedUser.email && password === parsedUser.password) {
          Alert.alert('Login Successfull');

          navigation.replace('DrawerNav');
        } else {
          Alert.alert('Email or Password is Incorrect');
        }
      } else {
        Alert.alert('No User Found Please SignUp');
        navigation.replace('Signup');
      }
    } catch (error) {
      console.log('Error Retrieving userData ', error);
    }
  };
  return (
    <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
      <View
        style={{
          backgroundColor: '#468499',
          height: 350,
          marginTop: 120,
          marginHorizontal: 30,
          borderRadius: 50,
          elevation: 18,
        }}>
        <View
          style={{
            marginTop: 40,
            alignSelf: 'center',
            width: '70%',
          }}>
          <View>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 22,
                fontWeight: 'bold',
              }}>
              Login Now
            </Text>
          </View>
          <View>
            <TextInput
              placeholder="Email"
              placeholderTextColor={'black'}
              value={email}
              onChangeText={SetEmail}
              backgroundColor={'#D9E6EE'}
              style={{
                borderBottomWidth: 1,
                marginBottom: 20,
                borderRadius: 15,
                marginTop: 10,
              }}
            />
          </View>
          <View>
            <TextInput
              placeholder="Password"
              placeholderTextColor={'black'}
              value={password}
              onChangeText={SetPassword}
              secureTextEntry
              backgroundColor={'#D9E6EE'}
              style={{
                borderBottomWidth: 1,
                marginBottom: 20,
                borderRadius: 15,
                marginTop: 10,
              }}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={handleLogin}
          style={{
            width: '40%',
            height: 50,
            backgroundColor: 'beige',
            borderRadius: 30,
            alignSelf: 'center',
            marginTop: 30,
            elevation: 10,
          }}>
          <Text style={{color: 'black', textAlign: 'center', padding: 14}}>
            Login
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', marginRight: 10}}>
            If not a user please
          </Text>
          <TouchableOpacity
            style={{}}
            onPress={() => navigation.navigate('Signup')}>
            <Text style={{color: 'blue', textDecorationLine:"underline", fontSize:15}}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
