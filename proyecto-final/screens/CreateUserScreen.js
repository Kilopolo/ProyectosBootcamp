import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { firestore } from "../database/firebase";
import { addDoc, collection } from "@firebase/firestore";
import stylesUser from "./StyleCreateUserScreen";
import { ScrollView } from "react-native";
// import database from '@react-native-firebase/database';

const CreateUserScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dni, setDNI] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [fechaNac, setFechaNac] = useState("");
  const [direccion, setDireccion] = useState("");
  const [voto, setVoto] = useState(false);
  const [usuarioId, setUsuarioId] = useState("");

  const [state, setState] = useState({
    dni: dni,
    nombre: nombre,
    apellido: apellido,
    fechaNac: fechaNac,
    direccion: direccion,
    usuario_id: usuarioId,
    voto,
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
      console.log("userC.uid",userC.uid);
      console-log("usuarioId",usuarioId); 
      await setState({
        dni: dni,
        nombre: nombre,
        apellido: apellido,
        fechaNac: fechaNac,
        direccion: direccion,
        usuario_id: usuarioId,
        voto,
      });
      // saveNewUser();
      console.log(state);
      console.log("Usuario creado correctamente");
      navigation.navigate("Login");
    } catch (error) {
      console.error("Error al crear el usuario", error);
    }
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={stylesUser.container}>
          <Text style={stylesUser.label}>Email:</Text>
          <TextInput
            style={stylesUser.input}
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              // console.log(email);
            }}
          />

          <Text style={stylesUser.label}>Contraseña:</Text>
          <TextInput
            style={stylesUser.input}
            secureTextEntry
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              // console.log(password);
            }}
          />

          <Text style={stylesUser.label}>DNI:</Text>
          <TextInput
            style={stylesUser.input}
            value={dni}
            onChangeText={(text) => {
              setDNI(text);
              // console.log(dni);
              setState((prevState) => ({ ...prevState, dni: text }));
              // console.log(state);
            }}
          />

          <Text style={stylesUser.label}>Nombre:</Text>
          <TextInput
            style={stylesUser.input}
            value={nombre}
            onChangeText={(text) => {
              setNombre(text);
              // console.log(nombre);
              setState((prevState) => ({ ...prevState, nombre: text }));
              // console.log(state);
            }}
          />

          <Text style={stylesUser.label}>Apellido:</Text>
          <TextInput
            style={stylesUser.input}
            value={apellido}
            onChangeText={(text) => {
              setApellido(text);
              // console.log(apellido);
              setState((prevState) => ({ ...prevState, apellido: text }));
              // console.log(state);
            }}
          />

          <Text style={stylesUser.label}>Fecha de Nacimiento:</Text>
          <TextInput
            style={stylesUser.input}
            value={fechaNac}
            onChangeText={(text) => {
              setFechaNac(text);
              // console.log(fechaNac);
              setState((prevState) => ({ ...prevState, fechaNac: text }));
              // console.log(state);
            }}
          />

          <Text style={stylesUser.label}>Dirección:</Text>
          <TextInput
            style={stylesUser.input}
            value={direccion}
            onChangeText={(text) => {
              setDireccion(text);
              // console.log(direccion);
              setState((prevState) => ({ ...prevState, direccion: text }));
              // console.log(state);
            }}
          />
          <TextInput
            style={{ display: "none" }}
            value={voto.toString()}
            onChangeText={(text) => {
              setVoto(text === "true");
            }}
          />

          <Button title="Crear Usuario" onPress={handleSignUp} />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default CreateUserScreen;
