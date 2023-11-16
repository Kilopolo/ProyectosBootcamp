import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { firestore } from "../database/firebase";
import { addDoc, collection } from "@firebase/firestore";
import stylesSignUp from "../styles/StyleSignUp";
import { ScrollView } from "react-native";
import stylesMenu from "../styles/StyleMenuScreen";
// import database from '@react-native-firebase/database';

const SignUp = ({ navigation }) => {
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

  const saveNewUser = async (usuarioActual) => {
    if (state.dni === "") {
      alert("Por favor ingrese un dni");
    } else {
      const ref = collection(firestore, "citizens");
      try {
        await addDoc(ref, usuarioActual);
        console.log("Ciudadano creado correctamente");
        console.log("Datos del usuario:", usuarioActual);
        alert("Usuario guardado");
      } catch (err) {
        console.error(err);
      }
    }
  };

  const signupusr = async (auth, email, password) => {
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
      const userC = await signupusr(auth, email, password);

      await setUsuarioId(userC.uid);
      let usuarioActual = {
        dni: dni,
        nombre: nombre,
        apellido: apellido,
        fechaNac: fechaNac,
        direccion: direccion,
        usuario_id: userC.uid,
        voto: voto,
      };
      // ;
      await setState({
        dni: dni,
        nombre: nombre,
        apellido: apellido,
        fechaNac: fechaNac,
        direccion: direccion,
        usuario_id: usuarioId,
        voto,
      });
      console.log("Usuario creado correctamente");
      saveNewUser(usuarioActual);
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
        <View style={stylesSignUp.container}>
          <Text style={stylesSignUp.label}>Email:</Text>
          <TextInput
            style={stylesSignUp.input}
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              // console.log(email);
            }}
          />

          <Text style={stylesSignUp.label}>Contraseña:</Text>
          <TextInput
            style={stylesSignUp.input}
            secureTextEntry
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              // console.log(password);
            }}
          />

          <Text style={stylesSignUp.label}>DNI:</Text>
          <TextInput
            style={stylesSignUp.input}
            value={dni}
            onChangeText={(text) => {
              setDNI(text);
              // console.log(dni);
              setState((prevState) => ({ ...prevState, dni: text }));
              // console.log(state);
            }}
          />

          <Text style={stylesSignUp.label}>Nombre:</Text>
          <TextInput
            style={stylesSignUp.input}
            value={nombre}
            onChangeText={(text) => {
              setNombre(text);
              // console.log(nombre);
              setState((prevState) => ({ ...prevState, nombre: text }));
              // console.log(state);
            }}
          />

          <Text style={stylesSignUp.label}>Apellido:</Text>
          <TextInput
            style={stylesSignUp.input}
            value={apellido}
            onChangeText={(text) => {
              setApellido(text);
              // console.log(apellido);
              setState((prevState) => ({ ...prevState, apellido: text }));
              // console.log(state);
            }}
          />

          <Text style={stylesSignUp.label}>Fecha de Nacimiento:</Text>
          <TextInput
            style={stylesSignUp.input}
            value={fechaNac}
            onChangeText={(text) => {
              setFechaNac(text);
              // console.log(fechaNac);
              setState((prevState) => ({ ...prevState, fechaNac: text }));
              // console.log(state);
            }}
          />

          <Text style={stylesSignUp.label}>Dirección:</Text>
          <TextInput
            style={stylesSignUp.input}
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
          <View>
            <TouchableOpacity
              style={stylesMenu.button}
              title="Iniciar Sesión"
              onPress={handleSignUp}
            >
              <Text
                style={stylesMenu.buttonText}
              >
                Crear Usuario
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default SignUp;
