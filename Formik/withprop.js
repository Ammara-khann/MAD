import React from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

// Input with custom width prop
const Input = ({ error, touched, width, ...props }) => (
  <View style={{ width: width }}>
    <TextInput style={[styles.input, touched && error && styles.inputError]} {...props} />
    {touched && error && <Text style={styles.error}>{error}</Text>}
  </View>
);

// Button with custom width prop
const Button = ({ onPress, title, width }) => (
  <TouchableOpacity style={[styles.button, { width: width }]} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string().min(6, "Minimum 6 chars").required("Password required"),
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => Alert.alert("Welcome", values.email)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.formContainer}>
            <Input
              width="80%"  // ← Pass width as prop
              placeholder="Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              error={errors.email}
              touched={touched.email}
            />
            
            <Input
              width="80%"  // ← Pass width as prop
              placeholder="Password"
              secureTextEntry
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              error={errors.password}
              touched={touched.password}
            />
            
            <Button
              width="80%"  // ← Pass width as prop
              onPress={handleSubmit}
              title="Submit"
            />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  formContainer: {
    alignItems: "center",
    width: "50%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 5,
  },
  inputError: {
    borderColor: "red",
    borderWidth: 2,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#e250af",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});