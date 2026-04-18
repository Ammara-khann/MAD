import React, { useContext, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

import { AppContext } from '../context/AppContext.js';
import GlobalStyles from '../style/GlobalStyles.js';

export default function HomeScreen({ navigation }) {
  const { studentData, isDarkMode } = useContext(AppContext);
  
  const [fontsLoaded] = useFonts({
  'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
  'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
});

useEffect(function() {
  if (isDarkMode) {
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor('#121212');
  } else {
    StatusBar.setBarStyle('dark-content');
    StatusBar.setBackgroundColor('#f5f5f5');
  }
}, [isDarkMode]);
  const containerStyle = isDarkMode ? GlobalStyles.darkScreenContainer : GlobalStyles.screenContainer;
  const cardStyle = isDarkMode ? GlobalStyles.darkCard : GlobalStyles.card;
  const textStyle = isDarkMode ? GlobalStyles.darkText : null;
  const subtextStyle = isDarkMode ? GlobalStyles.darkSubtext : GlobalStyles.bodyText;
  
  if (!studentData) {
    return (
      <View style={GlobalStyles.centerContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }
  
  return (
    <ScrollView style={containerStyle}>
      {/* Profile Header */}
      <View style={[cardStyle, { alignItems: 'center', marginTop: 10 }]}>
        <Image
          source={{ uri: studentData.profilePicture || 'https://randomuser.me/api/portraits/men/1.jpg' }}
          style={GlobalStyles.profileImage}
        />
        <Text style={[GlobalStyles.heading, textStyle]}>{studentData.name}</Text>
        <Text style={[subtextStyle]}>SAP ID: {studentData.sapId}</Text>
      </View>
      
      {/* Academic Info */}
      <View style={cardStyle}>
        <Text style={[GlobalStyles.subheading, textStyle]}>Academic Information</Text>
        <View style={GlobalStyles.infoRow}>
          <Text style={[GlobalStyles.label, textStyle]}>Semester</Text>
          <Text style={[GlobalStyles.bodyText, textStyle]}>{studentData.semester}</Text>
        </View>
        <View style={GlobalStyles.infoRow}>
          <Text style={[GlobalStyles.label, textStyle]}>Current GPA</Text>
          <Text style={[GlobalStyles.bodyText, textStyle]}>{studentData.gpa}</Text>
        </View>
        <View style={GlobalStyles.infoRow}>
          <Text style={[GlobalStyles.label, textStyle]}>CGPA</Text>
          <Text style={[GlobalStyles.bodyText, textStyle]}>{studentData.cgpa}</Text>
        </View>
      </View>
      
      <View style={cardStyle}>
        <Text style={[GlobalStyles.subheading, textStyle]}>Quick Actions</Text>
        
        <TouchableOpacity
  style={GlobalStyles.row}
  onPress={function() { navigation.navigate('EditProfile'); }}
         >

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="create-outline" size={24} color="#6200EE" />
            <Text style={[GlobalStyles.bodyText, textStyle, { marginLeft: 10 }]}>Edit Profile</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#666" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}