import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CiudadanoItem = ({ citizen }) => {
  if (!citizen) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nombre: {citizen?.nombre}</Text>
      <Text style={styles.text}>Apellido: {citizen?.apellido}</Text>
      <Text style={styles.text}>Fecha Nacimiento: {citizen?.fechaNac}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  text: {
    marginBottom: 5,
  },
});

export default CiudadanoItem;
