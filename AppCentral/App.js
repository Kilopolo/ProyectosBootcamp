
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MenuScreen from "./modules/MenuScreen";
import CalculatorScreen from "./modules/CalculatorScreen";
import GameScreen from "./modules/GameScreen";
import CreditAppScreen from "./modules/CreditAppScreen";
import IMCPatri from "./modules/IMCPatri";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();

const App = () => {

  return (

      <NavigationContainer ref={ref}>
        <Stack.Navigator initialRouteName="Menu">
          <Stack.Screen name="Menu" component={MenuScreen} />
          <Stack.Screen name="Calculator" component={CalculatorScreen} />
          <Stack.Screen name="IMCPatri" component={IMCPatri} />
          <Stack.Screen name="Game" component={GameScreen} />
          <Stack.Screen name="CreditApp" component={CreditAppScreen} />
        </Stack.Navigator>
      </NavigationContainer>

  );
};

export default App;
