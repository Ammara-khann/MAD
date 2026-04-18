import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Alert, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

import { AppContext } from '../context/AppContext';
import GlobalStyles from '../style/GlobalStyles';

export default function AuthScreen({ navigation }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [sapId, setSapId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login, signup } = useContext(AppContext);
  
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
  });
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function handleSubmit() {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill all required fields');
      return;
    }
    
    if (!isValidEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address');
      return;
    }
    
    setIsLoading(true);
    
    if (isLogin) {
      login(email, password)
        .then(function(result) {
          setIsLoading(false);
          navigation.replace('MainTabs');
        })
        .catch(function(error) {
          setIsLoading(false);
          Alert.alert('Error', 'Login failed');
        });
    } else {
      if (!name) {
        setIsLoading(false);
        Alert.alert('Error', 'Please enter your name');
        return;
      }
      
      const userData = { name: name, sapId: sapId };
      signup(email, password, userData)
        .then(function(result) {
          setIsLoading(false);
          navigation.replace('MainTabs');
        })
        .catch(function(error) {
          setIsLoading(false);
          Alert.alert('Error', 'Signup failed');
        });
    }
  }
  
  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200' }}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center', padding: 20 }}>
        <View style={{ backgroundColor: 'rgba(255,255,255,0.95)', borderRadius: 20, padding: 25 }}>
          <Text style={[GlobalStyles.title, { textAlign: 'center', color: '#6200EE', fontFamily: 'Poppins-Bold' }]}>
            Student Portal
          </Text>
          <Text style={[GlobalStyles.bodyText, { textAlign: 'center', marginBottom: 25, fontFamily: 'Poppins-Regular' }]}>
            {isLogin ? 'Welcome Back!' : 'Create New Account'}
          </Text>
          
          {!isLogin && (
            <>
              <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#f0f0f0', borderRadius: 10, marginBottom: 15, paddingHorizontal: 10 }}>
                <Ionicons name="person-outline" size={20} color="#666" />
                <TextInput
                  style={{ flex: 1, padding: 12, fontSize: 16, fontFamily: 'Poppins-Regular' }}
                  placeholder="Full Name"
                  value={name}
                  onChangeText={setName}
                />
              </View>
              
              <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#f0f0f0', borderRadius: 10, marginBottom: 15, paddingHorizontal: 10 }}>
                <Ionicons name="card-outline" size={20} color="#666" />
                <TextInput
                  style={{ flex: 1, padding: 12, fontSize: 16, fontFamily: 'Poppins-Regular' }}
                  placeholder="SAP ID"
                  value={sapId}
                  onChangeText={setSapId}
                />
              </View>
            </>
          )}
          
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#f0f0f0', borderRadius: 10, marginBottom: 15, paddingHorizontal: 10 }}>
            <Ionicons name="mail-outline" size={20} color="#666" />
            <TextInput
              style={{ flex: 1, padding: 12, fontSize: 16, fontFamily: 'Poppins-Regular' }}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#f0f0f0', borderRadius: 10, marginBottom: 20, paddingHorizontal: 10 }}>
            <Ionicons name="lock-closed-outline" size={20} color="#666" />
            <TextInput
              style={{ flex: 1, padding: 12, fontSize: 16, fontFamily: 'Poppins-Regular' }}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
          </View>
          
          <TouchableOpacity
            style={{ backgroundColor: '#6200EE', padding: 15, borderRadius: 10, alignItems: 'center', marginBottom: 15 }}
            onPress={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', fontFamily: 'Poppins-Bold' }}>
                {isLogin ? 'Login' : 'Sign Up'}
              </Text>
            )}
          </TouchableOpacity>
          
          <TouchableOpacity onPress={function() { setIsLogin(!isLogin); }}>
            <Text style={{ textAlign: 'center', color: '#6200EE', fontSize: 14, fontFamily: 'Poppins-Regular' }}>
              {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}