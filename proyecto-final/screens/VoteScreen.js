import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
} from "react-native";
import { Button } from "react-native-paper";
import PartidosLists from "./PartidosList";
import FetchPartidos from "../functions/FetchPartidos";

const VoteScreen = () => {
  const [partido, setPartido] = useState("");
  const [pressedButton, setPressedButton] = useState(null);
  const [listaPartidos, setListaPartidos] = useState([]);
  const partidosDisponibles = [
    // { id: 1, nombre: 'PSOE', color: '#FC0303' }, // Color rosa suave
    // { id: 2, nombre: 'Partido Popular', color: '#00DFF9' }, // Color azul claro
    // { id: 3, nombre: 'VOX', color: '#FC0303' }, // Color rosa suave
    listaPartidos.listaPartidos,
  ];

  useEffect(() => {
    fetchPartido();
    console.log("Partidos disponibles:", listaPartidos);
  }, []);

  const fetchPartido = async () => {
    // Llamada a la función FetchPartidos
    FetchPartidos()
      .then((partyData) => {
        // Manejo de los datos obtenidos
        console.log("Datos obtenidos:", partyData);
        // Realiza aquí las operaciones con los datos obtenidos
        setListaPartidos(partyData);
      })
      .catch((error) => {
        // Manejo de errores
        console.error("Error:", error);
      })
      .finally(() => {
        // setLoading(false)
      });
  };

  const doVote = async () => {
    if (listaPartidos === "") {
      alert("Debes seleccionar un partido");
      return;
    }
  };
  const handleVote = (n) => {
    console.log(`Votaste por el partido con ID: ${n}`);
    setPartido(n);
  };

  const handlePressIn = (color) => {
    setPressedButton(color);
  };

  const handlePressOut = () => {
    setPressedButton(null);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {listaPartidos.map((partido, index) => (
          <TouchableOpacity
            key={partido.id}
            style={[
              styles.partidoButton,
              {
                backgroundColor:
                  pressedButton === partido.color ? partido.color : "#EAEAEA",
                transform: [{ scale: pressedButton === partido.color ? 1.2 : 1 }],
                marginBottom:
                  index !== listaPartidos.length - 1 ? 10 : 0,
              },
            ]}
            onPress={() => {
              handleVote(partido.id); // Cambiado a partido.id en lugar de partido.nombre
              setPartido(partido.nombre); // Actualiza el estado 'partido' con el nombre
            }}
            onPressIn={() => handlePressIn(partido.color)}
            onPressOut={handlePressOut}
          >
            <Text>{partido.nombre}</Text>
          </TouchableOpacity>
        ))}
        <View style={styles.textAreaContainer}>
          <TextInput
            placeholder={`Comentarios adicionales (Votaste por: ${partido})`}
            multiline
            style={styles.textArea}
            value={partido} // Mostrará el nombre del partido seleccionado
          />
          <Button onPress={doVote}>Confirmar Voto</Button>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  partidoButton: {
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "transparent",
  },
  textAreaContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 150,
    marginVertical: 10,
  },
  textArea: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    width: "100%",
  },
});

export default VoteScreen;
