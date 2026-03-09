import React from "react";
import { Text, TouchableOpacity, ImageBackground} from "react-native";
import globalStyles from "../styles/GlobalStyles";

export default function HomeScreen({ navigation }) {

    function goToProfile() {
    navigation.navigate("Profile");
    }

    function goToSettings() {
    navigation.navigate("Settings");
    }

    function goToContact() {
        navigation.navigate("Contact");
    }
    return (
        <ImageBackground 
        source={{uri: "https://images.pexels.com/photos/2310713/pexels-photo-2310713.jpeg"}}
        style={globalStyles.container}
        >
         <Text style={globalStyles.title}>Student App</Text>

         <TouchableOpacity
         style={globalStyles.button}
         onPress={goToProfile}
         >
            
          <Text style={globalStyles.buttonText}>Go to Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.button}
        onPress={goToSettings}
      >
        <Text style={globalStyles.buttonText}>Go to Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.button}
        onPress={goToContact}
      >
        <Text style={globalStyles.buttonText}>Go to Contact</Text>
      </TouchableOpacity>

        </ImageBackground>

    );
}