import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//locales
import MenuScreen from "./screens/MenuScreen";
import CreateUserScreen from "./screens/CreateUserScreen";
import UsersList from "./screens/UsersList";
import FetchMovies from "./FetchMovies";
import PartidosLists from "./screens/PartidosList";

// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();

function MyStack() {
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
          name="CreateUserScreen"
          component={CreateUserScreen}
          options={{ title: "Crear Usuario" }}
        />

        <Stack.Screen
          name="UsersList"
          component={UsersList}
          options={{ title: "Lista de Usuarios" }}
        />
        <Stack.Screen
          name="PartidosLists"
          component={PartidosLists}
          options={{ title: "Lista de Partidos" }}
        />
        <Stack.Screen
          name="FetchMovies"
          component={FetchMovies}
          options={{ title: "FetchMovies Example" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default function App() {
  return <MyStack></MyStack>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
