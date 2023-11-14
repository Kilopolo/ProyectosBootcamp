import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  Button,
} from "react-native";
import { getAuth } from "firebase/auth";

const LandingPage = ({ navigation }) => {
  const [userData, setUserData] = useState({});
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    const user = getAuth().currentUser;

    if (user === null) {
      navigation.navigate("Login");
    } else {
      // Obtener datos del usuario (ejemplo)
      const fetchedUserData = {
        nombre: "Nombre del Usuario",
        apellido: "Apellido del Usuario",
        dni: "12345678",
        direccion: "Dirección del Usuario",
        fechaNacimiento: "01/01/1990",
      };
      setUserData(fetchedUserData);

      // Comprobar si el usuario ha votado (ejemplo)
      const userHasVoted = false; // Puedes establecer esto según la lógica de tu aplicación
      setHasVoted(userHasVoted);
    }
  }, []);

  const handleVoteButton = () => {
    // Acción al hacer clic en el botón de votar
    // Esto puede incluir la lógica para el proceso de votación
    console.log("Votar");
  };

  return (
    <ImageBackground
      source={require("../assets/BKG.png")} // Reemplaza 'tu_imagen_de_fondo.jpg' con la ruta de tu imagen
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>
          ¡Bienvenido, {getAuth().currentUser.email || "Usuario"}!
        </Text>
        <Text style={styles.subtitle}>Datos del Usuario:</Text>
        <FlatList
          data={Object.entries(userData)}
          renderItem={({ item }) => (
            <View style={styles.userInfo}>
              <Text style={styles.label}>{item[0]}</Text>
              <Text style={styles.value}>{item[1]}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <Text style={styles.subtitle}>Estado del Voto:</Text>
        <Text style={styles.status}>
          {hasVoted ? "Ha Votado" : "Aún no ha Votado"}
        </Text>
        <Button
          title="Votar"
          onPress={handleVoteButton}
          disabled={hasVoted} // Deshabilitar el botón si ya ha votado
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover", // O 'contain' según tus preferencias
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "white",
  },
  userInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  value: {
    fontSize: 18,
    color: "white",
  },
  status: {
    fontSize: 20,
    color: "white",
    marginBottom: 10,
  },
});

export default LandingPage;
