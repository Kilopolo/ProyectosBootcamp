import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const CreateCitizenScreen = ({ navigation }) => {
  const [dni, setDNI] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [fechaNac, setFechaNac] = useState('');
  const [direccion, setDireccion] = useState('');

  // Obtener el ID del usuario actualmente autenticado
  const usuarioId = auth().currentUser.uid;

  const handleCreateCitizen = async () => {
    try {
      // Verificar si el usuario ya existe en la base de datos
      const snapshot = await database()
        .ref(`/ciudadanos/${dni}`)
        .once('value');

      if (snapshot.exists()) {
        console.log('El ciudadano ya existe en la base de datos');
      } else {
        // Crear un nuevo ciudadano en la base de datos
        await database()
          .ref(`/ciudadanos/${dni}`)
          .set({
            dni,
            nombre,
            apellido,
            fechaNac,
            direccion,
            usuario_id: usuarioId,
          });

        console.log('Ciudadano creado correctamente');
        navigation.navigate('MenuScreen');
        // Puedes redirigir a otra pantalla o realizar otras acciones después de crear el ciudadano
      }
    } catch (error) {
      console.error('Error al crear el ciudadano', error);
    }
  };

  return (
    <View>
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

      <Button title="Crear Ciudadano" onPress={handleCreateCitizen} />
    </View>
  );
};

export default CreateCitizenScreen;
