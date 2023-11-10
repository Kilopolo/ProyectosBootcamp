import React from "react";
import { View, Text } from "react-native";

const UserItem = ({ user }) => {
  return (
    <View>
      <Text>Nombre: {user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Teléfono: {user.phone}</Text>
    </View>
  );
};

export default UserItem;
