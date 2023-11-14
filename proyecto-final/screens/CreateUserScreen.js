import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { firestore } from "../database/firebase";
import { addDoc, collection } from "@firebase/firestore";
// import database from '@react-native-firebase/database';

const CreateUserScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dni, setDNI] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [fechaNac, setFechaNac] = useState("");
  const [direccion, setDireccion] = useState("");
  const [Voto, setVoto] = useState(false);
  const [usuarioId, setUsuarioId] = useState("");

  const [state, setState] = useState({
    dni: dni,
    nombre: nombre,
    apellido: apellido,
    fechaNac: fechaNac,
    direccion: direccion,
    usuario_id: usuarioId,
  });

  const saveNewUser = async () => {
    if (state.dni === "") {
      alert("Por favor ingrese un dni");
    } else {
      const ref = collection(firestore, "citizens");
      try {
        await addDoc(ref, state);
        console.log("Ciudadano creado correctamente");
        alert("Usuario guardado");
      } catch (err) {
        console.error(err);
      }
    }
  };

  const signup = async (auth, email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      //await emailVerification();
      const user = userCredential.user;
      return user;
    } catch (error) {
      throw error;
    }
  };

  const handleSignUp = async () => {
    try {
      const auth = getAuth();
      const userC = await signup(auth, email, password);

      await setUsuarioId(userC.uid);
      console.log(userC.uid);
      await setState({
        dni: dni,
        nombre: nombre,
        apellido: apellido,
        fechaNac: fechaNac,
        direccion: direccion,
        usuario_id: usuarioId,
        voto: false,
      });
      saveNewUser();
      console.log(state);
      console.log("Usuario creado correctamente");
      navigation.navigate("Login");
    } catch (error) {
      console.error("Error al crear el usuario", error);
    }
  };

  return (
    <View>
      <Text>Email:</Text>
      <TextInput
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          // console.log(email);
        }}
      />

      <Text>Contraseña:</Text>
      <TextInput
        secureTextEntry
        value={password}
        onChangeText={(text) => {
          setPassword(text);
          // console.log(password);
        }}
      />

      <Text>DNI:</Text>
      <TextInput
        value={dni}
        onChangeText={(text) => {
          setDNI(text);
          // console.log(dni);
          setState((prevState) => ({ ...prevState, dni: text }));
          // console.log(state);
        }}
      />

      <Text>Nombre:</Text>
      <TextInput
        value={nombre}
        onChangeText={(text) => {
          setNombre(text);
          // console.log(nombre);
          setState((prevState) => ({ ...prevState, nombre: text }));
          // console.log(state);
        }}
      />

      <Text>Apellido:</Text>
      <TextInput
        value={apellido}
        onChangeText={(text) => {
          setApellido(text);
          // console.log(apellido);
          setState((prevState) => ({ ...prevState, apellido: text }));
          // console.log(state);
        }}
      />

      <Text>Fecha de Nacimiento:</Text>
      <TextInput
        value={fechaNac}
        onChangeText={(text) => {
          setFechaNac(text);
          // console.log(fechaNac);
          setState((prevState) => ({ ...prevState, fechaNac: text }));
          // console.log(state);
        }}
      />

      <Text>Dirección:</Text>
      <TextInput
        value={direccion}
        onChangeText={(text) => {
          setDireccion(text);
          // console.log(direccion);
          setState((prevState) => ({ ...prevState, direccion: text }));
          // console.log(state);
        }}
      />

      <Button title="Crear Usuario" onPress={handleSignUp} />
    </View>
  );
};

export default CreateUserScreen;
