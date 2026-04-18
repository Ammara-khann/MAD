import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

import { AppContext } from '../context/AppContext';
import GlobalStyles from '../style/GlobalStyles';

export default function EditProfileScreen({ navigation }) {
  const { studentData, updateStudentData, isDarkMode } = useContext(AppContext);
  
  const [name, setName] = useState(studentData?.name || '');
  const [sapId, setSapId] = useState(studentData?.sapId || '');
  const [semester, setSemester] = useState(studentData?.semester || '');
  const [gpa, setGpa] = useState(studentData?.gpa || '');
  const [cgpa, setCgpa] = useState(studentData?.cgpa || '');
  
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
  });
  
  function handleUpdate() {
    if (!name || !sapId) {
      Alert.alert('Error', 'Name and SAP ID are required');
      return;
    }
    
    const updatedData = {
      ...studentData,
      name: name,
      sapId: sapId,
      semester: semester,
      gpa: gpa,
      cgpa: cgpa,
    };
    
    updateStudentData(updatedData);
    Alert.alert('Success', 'Profile updated successfully!');
    navigation.goBack();
  }
  
  if (!fontsLoaded) {
    return null;
  }
  
  const containerStyle = isDarkMode ? GlobalStyles.darkScreenContainer : GlobalStyles.screenContainer;
  const cardStyle = isDarkMode ? GlobalStyles.darkCard : GlobalStyles.card;
  const inputStyle = isDarkMode ? GlobalStyles.darkInput : GlobalStyles.input;
  const textStyle = isDarkMode ? GlobalStyles.darkText : null;
  
  return (
    <ScrollView style={containerStyle}>
      
      <View style={cardStyle}>
        <Text style={[GlobalStyles.heading, textStyle, { fontFamily: 'Poppins-Bold' }]}>Edit Profile</Text>
        
        <Text style={[GlobalStyles.label, textStyle, { fontFamily: 'Poppins-Regular' }]}>Full Name</Text>
        <TextInput
          style={inputStyle}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          placeholderTextColor={isDarkMode ? '#888' : '#999'}
        />
        
        <Text style={[GlobalStyles.label, textStyle, { fontFamily: 'Poppins-Regular' }]}>SAP ID</Text>
        <TextInput
          style={inputStyle}
          placeholder="Enter SAP ID"
          value={sapId}
          onChangeText={setSapId}
          placeholderTextColor={isDarkMode ? '#888' : '#999'}
        />
        
        <Text style={[GlobalStyles.label, textStyle, { fontFamily: 'Poppins-Regular' }]}>Semester</Text>
        <TextInput
          style={inputStyle}
          placeholder="e.g., 6th"
          value={semester}
          onChangeText={setSemester}
          placeholderTextColor={isDarkMode ? '#888' : '#999'}
        />
        
        <Text style={[GlobalStyles.label, textStyle, { fontFamily: 'Poppins-Regular' }]}>Current GPA</Text>
        <TextInput
          style={inputStyle}
          placeholder="e.g., 3.75"
          value={gpa}
          onChangeText={setGpa}
          keyboardType="numeric"
          placeholderTextColor={isDarkMode ? '#888' : '#999'}
        />
        
        <Text style={[GlobalStyles.label, textStyle, { fontFamily: 'Poppins-Regular' }]}>CGPA</Text>
        <TextInput
          style={inputStyle}
          placeholder="e.g., 3.82"
          value={cgpa}
          onChangeText={setCgpa}
          keyboardType="numeric"
          placeholderTextColor={isDarkMode ? '#888' : '#999'}
        />
        
        <TouchableOpacity
          style={GlobalStyles.button}
          onPress={handleUpdate}
        >
          <Text style={[GlobalStyles.buttonText, { fontFamily: 'Poppins-Bold' }]}>Update Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}