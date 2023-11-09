import React from "react";
import { ScrollView, View, Text, Button } from "react-native";
import { StyleSheet } from "react-native";

const MenuScreen = ({ navigation }) => {
  return (
    <ScrollView >
      <View style={styles.buttonContainer}>
        <Text style={styles.textButton}>Menu</Text>
        <Button
          title="Menu"
          onPress={() => navigation.navigate("Menu")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.textButton}>IMC Pablo</Text>
        <Button
          title="IMC Pablo"
          onPress={() => navigation.navigate("Calculator")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.textButton}>IMC Patri</Text>
        <Button
          title="IMC Patri"
          onPress={() => navigation.navigate("IMCPatri")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.textButton}>IMC David</Text>
        <Button
          title="IMC David"
          onPress={() => navigation.navigate("IMCDavid")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.textButton}>Game</Text>
        <Button
          title="Game"
          onPress={() => navigation.navigate("Game")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.textButton}>CreditApp</Text>
        <Button
          title="CreditApp"
          onPress={() => navigation.navigate("CreditApp")}
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  textButton: {
    fontSize: 20,
    marginBottom : 10,
    textAlign: "center",
    color: "#544E4D",
    fontWeight: "bold",
  },
});

export default MenuScreen;
