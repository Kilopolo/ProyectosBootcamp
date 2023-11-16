import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
  Button,
} from "react-native";
// import { Button } from "react-native-paper";
import PartidosLists from "./PartidosList";
import FetchPartidos from "../functions/FetchPartidos";
// Importa la función UpdateVotos
import UpdateVotos from "../functions/UpdateVotos";

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

  const updateUsuario = async () => {
    if (listaPartidos === "") {
      alert("Debes seleccionar un partido");
      return;
    }
  };

  const updateVoto = async (partyId, nuevosVotos) => {
    if (listaPartidos === "") {
      alert("Debes seleccionar un partido");
      return;
    }
    // Llama a la función con el ID del partido y la cantidad de votos nuevos

    UpdateVotos(partyId, nuevosVotos)
      .then(() => {
        console.log("Votos actualizados exitosamente");
      })
      .catch((error) => {
        console.error("Error al actualizar votos:", error);
      });
  };

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
  // Función para incrementar los votos del partido
  const incrementarVotos = () => {
    const updatedPartido = {
      ...partido,
      votos: partido.votos + 1, // Incrementa el valor de votos en 1
    };
    setPartido(updatedPartido); // Actualiza el estado con el partido actualizado
  };

  const doVote = async () => {
    if (listaPartidos === "") {
      alert("Debes seleccionar un partido");
      return;
    }
    //cojemos a quien vamos a votar

    //actualizamos los votos de ese partido

    //actualizamos el estado de voto del usuario
    const partyId = partido.id;
    const nuevosVotos = partido.votos + 1;
    incrementarVotos(); //lo seteo para que la proxima quede bien
    console.log("partido: " + partido);
    console.log("votos: " + nuevosVotos);
    updateVoto(partyId, nuevosVotos);
    //recuperamos los datos del usuario

    //recuperamos los datos de los partidos

    //actualizamos todo en la vista si hace falta
  };
  const handleVote = (partido) => {
    //TODO poner a quien vamos a votar

    console.log(`Votaste por el partido con ID: ${partido.id}`);
    setPartido(partido);
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
        {listaPartidos.map((p, index) => (
          <TouchableOpacity
            key={p.id}
            // style={[
            //   styles.partidoButton,
            //   {
            //     backgroundColor: pressedButton === partido.color ? partido.color : '#EAEAEA',
            //     transform: [{ scale: pressedButton === partido.color ? 1.2 : 1 }],
            //     marginBottom: index !== partidosDisponibles.length - 1 ? 10 : 0,
            //   },
            // ]}
            onPress={() => handleVote(p)}
            // onPressIn={() => handlePressIn(partido.color)}
            onPressOut={handlePressOut}
          >
            <Text>{p.nombre}</Text>
          </TouchableOpacity>
        ))}
        <View style={styles.textAreaContainer}>
          <TextInput
            placeholder="Comentarios adicionales (opcional)"
            multiline
            style={styles.textArea}
            value={partido.nombre}
          />
          <Text>{partido.votos}</Text>
          <Button title="Confirma" onPress={doVote} />
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
