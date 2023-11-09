import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text>Encabezado de la aplicación</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "blue",
    padding: 20,
    alignItems: "center",
  },
});

export default Header;
