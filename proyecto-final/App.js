import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import auth from "@react-native-firebase/auth";

//locales
import MenuScreen from "./screens/MenuScreen";
import SignUp from "./screens/SignUp";
import PartidosLists from "./screens/PartidosList";
import Login from "./screens/Login";
import LandingPage from "./screens/LandingPage";
import SplashScreen from "./screens/SplashScreen";
import VoteScreen from "./screens/VoteScreen";

// const Stack = createNativeStackNavigator();

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      // initialRouteName=""
      screenOptions={{
        headerStyle: { backgroundColor: "#27233A" },
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
        options={({ navigation }) => ({
          title: "Menu Principal",
          headerLeft: null,
          gestureEnabled: false,
          headerTitleAlign: "center",
        })}
      />
      <Stack.Screen
        name="PartidosLists"
        component={PartidosLists}
        options={{ title: "Lista de Partidos" }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
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
      <Stack.Screen
        name="VoteScreen"
        component={VoteScreen} 
        options={{ title: "VOTO", headerTitleAlign: "center" }}
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
