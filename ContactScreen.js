import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Alert } from "react-native";
import globalStyles from "../styles/GlobalStyles";

export default function ContactScreen({navigation}) {

  const [email, setEmail] = useState("");

  function handleEmailChange(text) {
    setEmail(text);
  }

  function handleSubmit() {

  if (email.trim() === "") {
    Alert.alert("Error", "Email cannot be empty");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    Alert.alert("Invalid Email", "Please enter a valid email address");
    return;
  }

  Alert.alert("Success", "Email submitted successfully!");
}

   function goBackScreen() {
    navigation.goBack();
  }

  return (
    <View style={globalStyles.container}>
      <Text style={{ fontSize: 18 }}>Email</Text>
       
      <TextInput
        style={globalStyles.input}
        placeholder="Enter Email"
        keyboardType="email-address"
        value={email}
        onChangeText={handleEmailChange}
      />

      <TouchableOpacity style={globalStyles.button} onPress={handleSubmit}>
        <Text style={[globalStyles.buttonText,{fontFamily: "PoppinsRegular"}]}>Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[globalStyles.button, { marginTop: 20 }]}
        onPress={goBackScreen}
      >
        <Text style={[globalStyles.buttonText,{fontFamily: "PoppinsRegular"}]}> Back</Text>
      </TouchableOpacity>

    </View>
  );
}