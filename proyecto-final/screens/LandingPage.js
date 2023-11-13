import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';

const LandingPage = ({ userName }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido,  {getAuth().currentUser.email}!</Text>
      <Text style={styles.message}>Estás en la pantalla siguiente.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default LandingPage;