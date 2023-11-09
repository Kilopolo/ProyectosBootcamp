import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import MenuScreen from "./modules/MenuScreen";

const Stack = createStackNavigator();

const App = () => {
  return <MenuScreen />;
};

export default App;
