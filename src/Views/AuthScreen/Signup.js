import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = ({navigation}) => {
  const [username, SetUsername] = useState('');
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  const [confirmPass, SetconfirmPass] = useState('');


  const validateEmail = (email)=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }
  const validatePass = (password)=>{
    return password.length >= 6 && /\d/.test(password);
  }




  const handleSignup = async ()=>{
    if(!email || !username || !password || !confirmPass){
        Alert.alert("Please Fill all the Fields")
        return;
    }

    if(!validateEmail(email)){
        Alert.alert('Please enter a valid email')
        return;
    }
    if(!validatePass(password)){
        Alert.alert('Password should require more than 6 characters and a Number')
    }
    if(password !== confirmPass){
        Alert.alert('Password donot Match');
        return
    }

    try{
        const userData = {
            email,   
            username,
            password
          };
        await AsyncStorage.setItem('user', JSON.stringify(userData))
        Alert.alert('Sign Up Successfuly')
         navigation.navigate('Login')
    }
    catch(error){
        console.log("signup error", error)
    }

  }

  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: '#468499',
          //   height: "100%",
          marginTop: 120,
          marginHorizontal: 30,
          borderRadius: 50,
          elevation: 18,
          paddingBottom: 30,
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
              SignUp
            </Text>
          </View>
          <View>
            <TextInput
              placeholder="Username"
              placeholderTextColor={'black'}
              backgroundColor={'#D9E6EE'}
              value={username}
              onChangeText={SetUsername}
              style={{
                borderBottomWidth: 1,
                marginBottom: 20,
                borderRadius: 15,
                marginTop: 10,
              }}
            />
            <TextInput
              placeholder="Email"
              placeholderTextColor={'black'}
              backgroundColor={'#D9E6EE'}
              value={email}
              onChangeText={SetEmail}
              style={{
                borderBottomWidth: 1,
                marginBottom: 20,
                borderRadius: 15,
                marginTop: 10,
              }}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor={'black'}
              backgroundColor={'#D9E6EE'}
              value={password}
              onChangeText={SetPassword}
              secureTextEntry
              style={{
                borderBottomWidth: 1,
                marginBottom: 20,
                borderRadius: 15,
                marginTop: 10,
              }}
            />
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor={'black'}
              backgroundColor={'#D9E6EE'}
              value={confirmPass}
              onChangeText={SetconfirmPass}
              secureTextEntry
              style={{
                borderBottomWidth: 1,
                marginBottom: 20,
                borderRadius: 15,
                marginTop: 10,
              }}
            />
            <TouchableOpacity
            onPress={handleSignup}
              style={{
                width: '40%',
                height: 50,
                backgroundColor: 'beige',
                borderRadius: 30,
                alignSelf: 'center',
                marginTop: 15,
                elevation: 10,
              }}>
              <Text style={{color: 'black', textAlign: 'center', padding: 14}}>
                Sign Up
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 10,
                justifyContent: 'center',
              }}>
              <Text style={{color: 'white', marginRight: 10}}>
                If already a user please
              </Text>
              <TouchableOpacity
                style={{}}
                onPress={() => navigation.navigate('Login')}>
                <Text style={{color: 'blue', textDecorationLine:"underline", fontSize:15}}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({});
