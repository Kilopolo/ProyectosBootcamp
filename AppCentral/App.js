//globales
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


//locales
import MenuScreen from "./modules/MenuScreen";
import CalculatorScreen from "./modules/AppCalculadoraPablo/CalculatorScreen";
import GameScreen from "./modules/AppGameSpock/GameScreen";
import CreditAppScreen from "./modules/AppCredit/CreditAppScreen";
import IMCPatri from "./modules/AppCalculadoraPatri/IMCPatri";
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
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{ title: "Menu Principal" }}
        />
        <Stack.Screen
          name="Calculator"
          component={CalculatorScreen}
          options={{ title: "Calculadora Pablo" }}
        />
        <Stack.Screen
          name="IMCPatri"
          component={IMCPatri}
          options={{ title: "Calculadora Patri" }}
        />
        <Stack.Screen
          name="IMCDavid"
          component={IMCDavid}
          options={{ title: "Calculadora David" }}
        />
        <Stack.Screen
          name="Game"
          component={GameScreen}
          options={{ title: "Juego Spock" }}
        />
        <Stack.Screen
          name="CreditApp"
          component={CreditAppScreen}
          options={{ title: "Calculadora de Credito" }}
        />
        
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
