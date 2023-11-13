import React, { useState, setState } from "react";
import { View, Text,TextInput,Button } from "react-native";
import styles from "./StyleCreateUserScreen";
import {firestore} from "../database/firebase";
import {addDoc, collection} from "@firebase/firestore";
const CreateUserScreen = (props) => {
  const [state, setState] = useState({
    dni: "",
    email: "",
    contra: "",
    rol:"usuario",
  });

  const saveNewUser = async () => {
    console.log(state);
    if (state.dni === "") {
      alert("Por favor ingrese un dni");
    } else {
      const ref = collection(firestore, "users");
      try {
        addDoc(ref, state);
      } catch (err) {
        console.log(err);
      }
      alert("Usuario guardado");

    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Crear Usuario</Text>
      <Text style={styles.instructions}>Ingrese los datos del usuario</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setState({...state, dni: text })}
        value={state.dni}
        placeholder="DNI"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setState({...state, email: text })}
        value={state.email}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setState({...state, contra: text })}
        value={state.contra}
        placeholder="Contraseña"
      />
      <Button title="Crear Usuario" onPress={saveNewUser} />
    </View>
  );
};

export default CreateUserScreen;
