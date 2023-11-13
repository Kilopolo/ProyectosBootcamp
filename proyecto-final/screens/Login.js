
import React, { useState, useEffect } from "react";

import { collection, getDocs } from "@firebase/firestore";

import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';


function Login({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          // Handle successful login (navigate to the next screen, etc.)
          navigateToNextScreen(user.displayName);
        })
        .catch((error) => {
          console.error('Error signing in:', error);
          // Handle error (display error message, etc.)
        });
    };

    const navigateToNextScreen = ( user ) => {
        navigation.navigate('LandingPage', { user }); // Reemplaza 'NextScreen' con el nombre de tu pantalla siguiente
      };

  return (
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
      <Button title="Iniciar Sesión" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
    },
    input: {
      width: '100%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      padding: 10,
    },
  });
export default Login;
