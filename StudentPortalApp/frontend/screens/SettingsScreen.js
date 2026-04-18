import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Switch, ScrollView, Alert, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

import { AppContext } from '../context/AppContext.js';
import GlobalStyles from '../style/GlobalStyles.js';

export default function SettingsScreen({ navigation }) {
  const { isDarkMode, toggleTheme, logout, resetAllData } = useContext(AppContext);
  const [isSwitchOn, setIsSwitchOn] = useState(isDarkMode);
  
 const [fontsLoaded] = useFonts({
  'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
  'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
});

  function handleThemeToggle(value) {
    setIsSwitchOn(value);
    toggleTheme();
  }
  
  function handleLogout() {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Logout', 
          onPress: function() {
            logout();
          },
          style: 'destructive'
        }
      ]
    );
  }
  
  function handleResetData() {
    Alert.alert(
      'Reset Data',
      'This will clear all your saved data. Are you sure?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Reset', 
          onPress: function() {
            resetAllData();
            Alert.alert('Success', 'All data has been reset!');
          },
          style: 'destructive'
        }
      ]
    );
  }
  
  const containerStyle = isDarkMode ? GlobalStyles.darkScreenContainer : GlobalStyles.screenContainer;
  const cardStyle = isDarkMode ? GlobalStyles.darkCard : GlobalStyles.card;
  const textStyle = isDarkMode ? GlobalStyles.darkText : null;
  const subtextStyle = isDarkMode ? GlobalStyles.darkSubtext : GlobalStyles.bodyText;
  
  return (
    <ScrollView style={containerStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={isDarkMode ? '#121212' : '#f5f5f5'} />
      
      <View style={cardStyle}>
        <Text style={[GlobalStyles.subheading, textStyle]}>Appearance</Text>
        
        <View style={GlobalStyles.row}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name={isDarkMode ? 'moon' : 'sunny'} size={24} color="#6200EE" />
            <Text style={[GlobalStyles.bodyText, textStyle, { marginLeft: 10 }]}>Dark Mode</Text>
          </View>
          <Switch
            value={isSwitchOn}
            onValueChange={handleThemeToggle}
            trackColor={{ false: '#767577', true: '#6200EE' }}
            thumbColor={isSwitchOn ? '#fff' : '#f4f3f4'}
          />
        </View>
      </View>
      
      <View style={cardStyle}>
        <Text style={[GlobalStyles.subheading, textStyle]}>Data Management</Text>
        
        <TouchableOpacity
          style={GlobalStyles.row}
          onPress={handleResetData}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="refresh-outline" size={24} color="#FF5722" />
            <Text style={[GlobalStyles.bodyText, textStyle, { marginLeft: 10 }]}>Reset All Data</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#666" />
        </TouchableOpacity>
      </View>
      
      <View style={cardStyle}>
        <Text style={[GlobalStyles.subheading, textStyle]}>Account</Text>
        
        <TouchableOpacity
          style={GlobalStyles.row}
          onPress={handleLogout}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="log-out-outline" size={24} color="#F44336" />
            <Text style={[GlobalStyles.bodyText, textStyle, { marginLeft: 10, color: '#F44336' }]}>Logout</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#666" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}