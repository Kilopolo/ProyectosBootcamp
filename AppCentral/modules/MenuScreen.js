import React from "react";

import { createNativeStackNavigator  } from "@react-navigation/native-stack";

import CalculatorScreen from "./CalculatorScreen";
import GameScreen from "./GameScreen";
import CreditAppScreen from "./CreditAppScreen";
import IMCPatri from "./IMCPatri";
import IMCDavid from "./AppCalculadoraDavid/IMCDavid";

const Stack = createNativeStackNavigator();
{/* <Stack.Navigator initialRouteName="Menu"> */}
{/* <Stack.Screen name="Menu" component={MenuScreen} /> */}

const MenuScreen = () => {
  return (
    <Stack.Navigator  initialRouteName="CreditApp">
      <Stack.Screen name="Calculator" component={CalculatorScreen} />
      <Stack.Screen name="IMCPatri" component={IMCPatri} />
      <Stack.Screen name="IMCDavid" component={IMCDavid} />
      <Stack.Screen name="Game" component={GameScreen} />
      <Stack.Screen name="CreditApp" component={CreditAppScreen} />
    </Stack.Navigator>
  );
};

export default MenuScreen;
