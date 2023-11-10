import React, { useState, setState } from "react";
import { View, Text,TextInput,Button } from "react-native";
import styles from "./StyleCreateUserScreen";
import {firestore} from "../database/firebase";
import {addDoc, collection} from "@firebase/firestore";
const CreateUserScreen = (props) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const saveNewUser = async () => {
    console.log(state);
    if (state.name === "") {
      alert("Por favor ingrese un nombre");
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
        onChangeText={(text) => setState({...state, name: text })}
        value={state.name}
        placeholder="Nombre"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setState({...state, email: text })}
        value={state.email}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setState({...state, phone: text })}
        value={state.phone}
        placeholder="Telefono"
      />
      <Button title="Crear Usuario" onPress={saveNewUser} />
    </View>
  );
};

export default CreateUserScreen;
