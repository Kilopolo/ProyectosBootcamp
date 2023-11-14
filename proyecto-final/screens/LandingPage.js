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
import { firestore } from "../database/firebase";
import { collection, where, query, getDocs } from "@firebase/firestore";

const LandingPage = ({ navigation }) => {
  const [userData, setUserData] = useState({});
  const [hasVoted, setHasVoted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = getAuth().currentUser;

        if (user === null) {
          navigation.navigate("Login");
        } else {
          const citizen = await getCiudadano(user.uid);

          const fetchedUserData = {
            "Nombre": citizen.nombre,
            "Apellido": citizen.apellido,
            "DNI": citizen.dni,
            "Dirección": citizen.direccion,
            "Fecha nacimiento": citizen.fechaNac,
            "¿Voto?": citizen.voto,
          };

          setUserData(fetchedUserData);

          // Comprobar si el usuario ha votado (ejemplo)
          const userHasVoted = false; // Puedes establecer esto según la lógica de tu aplicación
          setHasVoted(userHasVoted);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getCiudadano = async (userId) => {
    try {
      const querySnapshot = await getDocs(
        query(
          collection(firestore, "citizens"),
          where("usuario_id", "==", userId)
        )
      );

      if (!querySnapshot.empty) {
        const ciudadano = querySnapshot.docs[0].data();

        console.log("Datos del ciudadano:", ciudadano); // Agrega este registro de consola

        return ciudadano;
      } else {
        console.log("No hay ciudadano");
        return "No hay ciudadano";
      }
    } catch (error) {
      console.error("Error:", error);
      return "Error";
    }
  };

  const handleVoteButton = () => {
    console.log("Votar");
  };

  if (loading) {
    return <Text>Cargando...</Text>;
  }

  return (
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
        keyExtractor={(id) => id}
      />
      <Text style={styles.subtitle}>Estado del Voto:</Text>
      <Text style={styles.status}>
        {hasVoted ? (
          <Text style={{ color: "green" }}>Ha Votado</Text>
        ) : (
          <Text style={{ color: "red" }}>Aún no ha Votado</Text>
        )}
      </Text>
      {!hasVoted && (
        <Button title="Votar" onPress={handleVoteButton} />
      )}
    </View>
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
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  userInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  value: {
    fontSize: 14,
  },
  status: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default LandingPage;
