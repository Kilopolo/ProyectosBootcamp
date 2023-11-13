import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UserItem = ({ user }) => {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>DNI: {user.dni}</Text>
    <Text style={styles.text}>Email: {user.email}</Text>
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
})

export default UserItem;
