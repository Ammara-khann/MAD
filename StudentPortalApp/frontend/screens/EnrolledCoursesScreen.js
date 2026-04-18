import React, { useContext } from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Alert } from 'react-native';

import { AppContext } from '../context/AppContext';
import GlobalStyles from '../style/GlobalStyles';
import CourseCard from '../component/CourseCard';  

export default function EnrolledCoursesScreen({ navigation }) {
  const { studentData, isDarkMode } = useContext(AppContext);
  
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
  });
  
  const containerStyle = isDarkMode ? GlobalStyles.darkScreenContainer : GlobalStyles.screenContainer;
  const textStyle = isDarkMode ? GlobalStyles.darkText : null;
  
  const courses = studentData?.courses || [];
  
  function handleCoursePress(course) {
    Alert.alert(
      course.name,
      `Course Code: ${course.code}\nInstructor: ${course.instructor}\nTiming: ${course.timing}`
    );
  }
  
  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <ScrollView style={containerStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content' } backgroundColor={isDarkMode ? '#121212' : '#f5f5f5'} />
      
      <Text style={[GlobalStyles.heading, textStyle, { marginBottom: 20, fontFamily: 'Poppins-Bold' }]}>
        My Courses ({courses.length})
      </Text>
      
      {courses.map(function(course) {
        return (
          <CourseCard
            key={course.id}
            course={course}
            onPress={function() { handleCoursePress(course); }}
            isDarkMode={isDarkMode}
          />
        );
      })}
    </ScrollView>
  );
}