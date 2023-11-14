import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from 'react';;
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import auth from "@react-native-firebase/auth"

//locales
import MenuScreen from "./screens/MenuScreen";
import CreateUserScreen from "./screens/CreateUserScreen";
import PartidosLists from "./screens/PartidosList";
import Login from "./screens/Login";
import LandingPage from "./screens/LandingPage";
import SplashScreen from "./screens/SplashScreen";


// const Stack = createNativeStackNavigator();

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerStyle: { backgroundColor: "#3498db" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Menu"
        component={MenuScreen}
        options={{ title: "Menu Principal" }}
      />
      <Stack.Screen
        name="PartidosLists"
        component={PartidosLists}
        options={{ title: "Lista de Partidos" }}
      />
      <Stack.Screen
        name="CreateUserScreen"
        component={CreateUserScreen}
        options={{ title: "SingUp" }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "Login" }}
      />
      <Stack.Screen
        name="LandingPage"
        component={LandingPage}
        options={{ title: "LandingPage" }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}