import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import GlobalStyles from '../style/GlobalStyles';

export default function CourseCard({ course, onPress, isDarkMode }) {
  
  function getCourseIcon(courseName) {
    if (courseName.includes('Mobile')) return 'phone-portrait-outline';
    if (courseName.includes('Web')) return 'globe-outline';
    if (courseName.includes('Database')) return 'server-outline';
    if (courseName.includes('Data Structures')) return 'code-outline';
    if (courseName.includes('Software')) return 'git-branch-outline';
    if (courseName.includes('Networks')) return 'wifi-outline';
    if (courseName.includes('Artificial')) return 'bulb-outline';
    return 'book-outline';
  }
  
  const cardStyle = isDarkMode ? GlobalStyles.darkCard : GlobalStyles.card;
  const textStyle = isDarkMode ? GlobalStyles.darkText : null;
  const subtextStyle = isDarkMode ? GlobalStyles.darkSubtext : GlobalStyles.bodyText;
  
  return (
    <TouchableOpacity
      style={cardStyle}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ backgroundColor: '#6200EE', padding: 12, borderRadius: 12, marginRight: 15 }}>
          <Ionicons name={getCourseIcon(course.name)} size={24} color="#fff" />
        </View>
        
        <View style={{ flex: 1 }}>
          <Text style={[GlobalStyles.subheading, textStyle, { fontSize: 16, marginBottom: 5, fontFamily: 'Poppins-Bold' }]}>
            {course.name}
          </Text>
          <Text style={[subtextStyle, { fontSize: 12, fontFamily: 'Poppins-Regular' }]}>
            <Ionicons name="time-outline" size={12} color="#666" /> {course.timing}
          </Text>
          <Text style={[subtextStyle, { fontSize: 12, marginTop: 3, fontFamily: 'Poppins-Regular' }]}>
            <Ionicons name="person-outline" size={12} color="#666" /> {course.instructor}
          </Text>
          <Text style={[subtextStyle, { fontSize: 12, marginTop: 3, fontFamily: 'Poppins-Regular' }]}>
            Code: {course.code}
          </Text>
        </View>
        
        <Ionicons name="chevron-forward" size={20} color="#6200EE" />
      </View>
    </TouchableOpacity>
  );
}