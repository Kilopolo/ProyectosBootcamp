import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { firestore } from "../database/firebase";
import { addDoc, collection } from "@firebase/firestore";
// import database from '@react-native-firebase/database';


const CreateUserScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dni, setDNI] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [fechaNac, setFechaNac] = useState('');
  const [direccion, setDireccion] = useState('');
  const [usuarioId, setUsuarioId] = useState('');

  const [state, setState] = useState({
    dni: "",
    nombre: "",
    apellido: "",
    fechaNac: "",
    direccion: "",
    usuario_id: usuarioId,
  });

  const saveNewUser = async () => {
    if (state.dni === "") {
      alert("Por favor ingrese un dni");
    } else {
      const ref = collection(firestore, "citizens");
      try {
        await addDoc(ref, state);
        console.log('Ciudadano creado correctamente');
        alert("Usuario guardado");
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleSignUp = async () => {
    try {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setUsuarioId(user.uid);
          setState({
            dni: "dni",
            nombre: "nombre",
            apellido: "apellido",
            fechaNac: "fechaNac",
            direccion: "direccion",
            usuario_id: "usuarioId",
          });
          console.log(state);
          setState({
            dni: dni,
            nombre: nombre,
            apellido: apellido,
            fechaNac: fechaNac,
            direccion: direccion,
            usuario_id: usuarioId,
          });
          console.log(state);
          // navigation.navigate("Menu");
        }).then(() => { 
          console.log(state);
          saveNewUser();});


        // console.log(state); 
      console.log("Usuario creado correctamente");
    } catch (error) {
      console.error("Error al crear el usuario", error);
    }
  };

  return (
    <View>
      <Text>Email:</Text>
      <TextInput value={email} onChangeText={setEmail} />

      <Text>Contraseña:</Text>
      <TextInput secureTextEntry value={password} onChangeText={setPassword} />

      <Text>DNI:</Text>
      <TextInput value={dni} onChangeText={setDNI} />

      <Text>Nombre:</Text>
      <TextInput value={nombre} onChangeText={setNombre} />

      <Text>Apellido:</Text>
      <TextInput value={apellido} onChangeText={setApellido} />

      <Text>Fecha de Nacimiento:</Text>
      <TextInput value={fechaNac} onChangeText={setFechaNac} />

      <Text>Dirección:</Text>
      <TextInput value={direccion} onChangeText={setDireccion} />

      <Button title="Crear Usuario" onPress={handleSignUp} />
    </View>
  );
};

export default CreateUserScreen;
