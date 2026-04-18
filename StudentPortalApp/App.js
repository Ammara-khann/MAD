/* import React from 'react';
import { AppProvider } from './frontend/context/AppContext.js';
import AppNavigator from './frontend/navigation/AppNavigator.js';

export default function App() {
  return (
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  );
} 
import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AppProvider } from './frontend/context/AppContext';
import AppNavigator from './frontend/navigation/AppNavigator';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" backgroundColor="#6200EE" translucent={false} />
      <AppProvider>
        <AppNavigator />
      </AppProvider>
    </View>
  );
}
*/
import React from 'react';
import { StatusBar, View } from 'react-native';
import { AppProvider } from './frontend/context/AppContext';
import AppNavigator from './frontend/navigation/AppNavigator';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar 
        backgroundColor="#6200EE" 
        barStyle="light-content"
        translucent={false}
      />
      <AppProvider>
        <AppNavigator />
      </AppProvider>
    </View>
  );
}