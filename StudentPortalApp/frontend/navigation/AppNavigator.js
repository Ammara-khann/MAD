import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

import { AppContext } from '../context/AppContext';
import GlobalStyles from '../style/GlobalStyles';
import AuthScreen from '../screens/AuthScreen';
import HomeScreen from '../screens/HomeScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import EnrolledCoursesScreen from '../screens/EnrolledCoursesScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  const { isDarkMode } = useContext(AppContext);
  
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Courses') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6200EE',
        tabBarInactiveTintColor: 'gray',
        headerStyle: {
          backgroundColor: isDarkMode ? '#1E1E1E' : '#6200EE',
        },
        headerTitleStyle: {
          color: '#fff',
          fontWeight: 'bold',
        },
        headerTintColor: '#fff',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Dashboard' }} />
      <Tab.Screen name="Courses" component={EnrolledCoursesScreen} options={{ title: 'Enrolled Courses' }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  const { isLoggedIn, isLoading, isDarkMode } = useContext(AppContext);
  
  if (isLoading) {
    return (
      <View style={[GlobalStyles.centerContainer, isDarkMode && { backgroundColor: '#121212' }]}>
        <Text style={[GlobalStyles.heading, isDarkMode && GlobalStyles.darkText]}>Loading...</Text>
      </View>
    );
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isLoggedIn ? (
          <Stack.Screen name="Auth" component={AuthScreen} />
        ) : (
          <>
            <Stack.Screen name="MainTabs" component={TabNavigator} />
            <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ headerShown: true, title: 'Edit Profile' }} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}