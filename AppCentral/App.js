import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import MenuScreen from "./modules/MenuScreen";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MenuScreen />
    </NavigationContainer>
  );
};

export default App;
