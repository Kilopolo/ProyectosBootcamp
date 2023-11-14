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
          const ciudadano = await getCiudadano(user.uid);

          const fetchedUserData = {
            nombre: ciudadano.nombre ,
            apellido: ciudadano.apellido,
            dni: ciudadano.dni,
            direccion: ciudadano.direccion ,
            fechaNacimiento: ciudadano.fechaNac,
          };

          setUserData("UserData",fetchedUserData);

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
        query(collection(firestore, "citizens"), where("usuario_id", "==", userId))
      );
  
      if (!querySnapshot.empty) {
        const ciudadano = querySnapshot.docs[0].data();
        
        console.log("Datos del ciudadano:", ciudadano);  // Agrega este registro de consola
  
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
    <ImageBackground
      source={require("../assets/BKG.png")}
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
          disabled={hasVoted} 
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
