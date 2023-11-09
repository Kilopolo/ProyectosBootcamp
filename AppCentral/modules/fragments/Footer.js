import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text>Pie de página de la aplicación</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "green",
    padding: 20,
    alignItems: "center",
  },
});

export default Footer;

