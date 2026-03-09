import { StyleSheet } from "react-native";  

const globalStyles = StyleSheet.create({
    container:  {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#2c3e50",
  },

  button: {
    backgroundColor: "#dc6692",
    padding: 12,
    marginVertical: 10,
    width: "80%",
    borderRadius: 8,
    alignItems: "center",
    elevation: 5, //shadow effect
  },

  buttonText: {
    color: "white",
     fontFamily: "PoppinsRegular",
    fontSize: 16,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "80%",
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
  },
});

export default globalStyles;