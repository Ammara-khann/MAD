import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, Alert } from "react-native";
import globalStyles from "../styles/GlobalStyles";

export default function ProfileScreen({navigation}) {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [sapID, setSapID] = useState("");

  function handleNameChange(text) {
    setName(text);
  }

  function handleAgeChange(text) {
    setAge(text);
  }

  function handleSapIDChange(text){
   setSapID(text);
  }
  
  function handleSubmit() {
    if (name.trim() === "" || age.trim() === "" || sapID.trim() === "") {
      Alert.alert("Error", "All fields are required!");
      return;
    }

    Alert.alert("Success", "Profile Saved Successfully!");
  }

  function handleReset() {
    setName("");
    setAge("");
    setSapID("");
  }

  function goBackScreen() {
    navigation.goBack();
  }

  return (
    <View style={globalStyles.container}>
      <Image
        source={{uri: "https://cdn.dribbble.com/userupload/17833545/file/original-84cf7217a6be1e833059c3aa27ea8b85.jpg?crop=0x0-3327x2501&format=webp&resize=400x300&vertical=center"}}
        style={{ width: 120, height: 120, borderRadius: 60, marginBottom: 20 }}
      />

      <TextInput
        style={globalStyles.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={handleNameChange}
      />

      <TextInput
        style={globalStyles.input}
        placeholder="Enter Age"
        keyboardType="numeric"
        inputMode="numeric"
        value={age}
        onChangeText={handleAgeChange}
      />
       
       
      <TextInput
        style={globalStyles.input}
        placeholder="Enter Sap ID"
        keyboardType="numeric"
        inputMode="numeric"
        value={sapID}
        onChangeText={handleSapIDChange}
      />
       <Text style={{ marginTop: 10, fontFamily: "PoppinsRegular" }}>Name: {name}</Text>
       <Text style={{ fontFamily: "PoppinsRegular" }}>Age: {age}</Text>
       <Text style={{ fontFamily: "PoppinsRegular" }}>Sap ID: {sapID}</Text>

      <TouchableOpacity style={globalStyles.button} onPress={handleSubmit}>
        <Text style={[globalStyles.buttonText,{fontFamily:"PoppinsRegular"}]}>Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity style={globalStyles.button} onPress={handleReset}>
        <Text style={[globalStyles.buttonText,{fontFamily:"PoppinsRegular"}]}>Reset</Text>
      </TouchableOpacity>

      <TouchableOpacity style={globalStyles.button} onPress={goBackScreen}>
        <Text style={[globalStyles.buttonText,{fontFamily:"PoppinsRegular"}]}> Back</Text>
      </TouchableOpacity>

    </View>
  );
}