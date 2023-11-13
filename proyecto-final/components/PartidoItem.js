import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PartidoItem = ({ partido }) => {
  if (!partido) {
    return null; 
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nombre: {partido.nombre || "Nombre no disponible"}</Text>
      <Text style={styles.text}>Sede: {partido.sede || "Sede no disponible"}</Text>
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

export default PartidoItem;
