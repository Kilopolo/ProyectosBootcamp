import React from "react";



const MenuScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Calculator</Text>
        <Button
          title="Regresar a Calculator"
          onPress={() => navigation.navigate("Calculator")}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>IMCPatri</Text>
        <Button
          title="Ir a IMCPatri"
          onPress={() => navigation.navigate("IMCPatri")}
        />
      </View>
    </ScrollView>
  );
};

export default MenuScreen;
