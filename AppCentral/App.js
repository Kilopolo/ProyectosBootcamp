//globales
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//locales
import MenuScreen from "./modules/MenuScreen";
import CalculatorScreen from "./modules/CalculatorScreen";
import GameScreen from "./modules/GameScreen";
import CreditAppScreen from "./modules/CreditAppScreen";
import IMCPatri from "./modules/IMCPatri";
import IMCDavid from "./modules/AppCalculadoraDavid/IMCDavid";

// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Menu"
        screenOptions={{
          headerStyle: { backgroundColor: "#3498db" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Calculator" component={CalculatorScreen} />
        <Stack.Screen name="IMCPatri" component={IMCPatri} />
        <Stack.Screen name="IMCDavid" component={IMCDavid} />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name="CreditApp" component={CreditAppScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "yellow",
  },
  textTitle: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
    color: "#544E4D",
    fontWeight: "bold",
  },
});

export default App;
