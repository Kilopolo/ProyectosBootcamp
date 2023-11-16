import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { getAuth, signOut } from "firebase/auth";
import { firestore } from "../database/firebase";
import { collection, where, query, getDocs } from "@firebase/firestore";
import styles from "../styles/StyleLandingPage";

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
            "Nombre:": citizen.nombre,
            "Apellido:": citizen.apellido,
            "DNI:": citizen.dni,
            "Dirección:": citizen.direccion,
            "Fecha nacimiento: ": citizen.fechaNac,
            "¿Voto?:": citizen.voto.toString(),
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
    navigation.navigate("VoteScreen");
  };

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      navigation.navigate("Login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error.message);
    }
  };

  if (loading) {
    return <Text>Cargando...</Text>;
  }

  return (
    // <ImageBackground
    //   source={require("../assets/BKG.png")}
    // >
    <View style={styles.container}>
       <TouchableOpacity onPress={handleLogout}>
        <Text style={{fontWeight:"bold", fontSize:18, textDecorationLine:"underline"}}>Cerrar Sesión</Text>
        
      </TouchableOpacity>
      <Text style={styles.title}>
        ¡Bienvenido,{" "}
        {getAuth().currentUser === null
          ? ""
          : getAuth().currentUser.email || "Usuario"}
        !
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
        <View>
          <TouchableOpacity
            style={styles.button}
            title="Iniciar Sesión"
            onPress={handleVoteButton}
          >
            <Text style={styles.buttonText}>Votar</Text>
          </TouchableOpacity>
        </View>
      )}
     
    </View>
  );
};

export default LandingPage;
