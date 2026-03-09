import React, { useState } from "react";
import { View, Text, Switch, TouchableOpacity } from "react-native";
import globalStyles from "../styles/GlobalStyles";

export default function SettingsScreen({navigation}) {

  const [isDark, setIsDark] = useState(false);

  function toggleSwitch(value) {
    setIsDark(value);
  }

   function goBackScreen() {
    navigation.goBack();
  }

  return (
    <View
      style={[
        globalStyles.container,
        { backgroundColor: isDark ? "#101111" : "#ffffff" },
      ]}
    >
      <Text
        style={{
          fontSize: 20,
          color: isDark ? "white" : "black",
        }}
      >
        Dark Mode
      </Text>

      <Switch
        value={isDark}
        onValueChange={toggleSwitch}
      />

      <TouchableOpacity
        style={[globalStyles.button, { marginTop: 20 }]}
        onPress={goBackScreen}
      >
        <Text style={[globalStyles.buttonText,{fontFamily:"PoppinsRegular"}]}>Back</Text>
      </TouchableOpacity>

    </View>
  );
}