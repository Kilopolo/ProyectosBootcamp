import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MenuScreen from "./MenuScreen";
import CalculatorScreen from "./CalculatorScreen";
import GameScreen from "./GameScreen";
import CreditAppScreen from "./CreditAppScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Calculator" component={CalculatorScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name="CreditApp" component={CreditAppScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
