import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import stylesMenu from "../styles/StyleMenuScreen";

function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const auth = initializeAuth(Login, {
  //   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  // });
  const handleLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // Handle successful login (navigate to the next screen, etc.)
        navigateToNextScreen(user.displayName);
      })
      .catch((error) => {
        console.error("Error signing in:", error);
        // Handle error (display error message, etc.)
      });
  };

  const navigateToNextScreen = (user) => {
    navigation.navigate("LandingPage", { user }); // Reemplaza 'NextScreen' con el nombre de tu pantalla siguiente
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Iniciar Sesión</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
        <View>
          <TouchableOpacity
            style={stylesMenu.button}
            title="Iniciar Sesión"
            onPress={handleLogin}
          >
            <Text style={stylesMenu.buttonText}>
              Iniciar Sesión
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});
export default Login;
