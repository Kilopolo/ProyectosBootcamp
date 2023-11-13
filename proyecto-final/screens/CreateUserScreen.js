import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import auth from '@react-native-firebase/auth';

const CreateUserScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await auth().createUserWithEmailAndPassword(email, password)
      console.log('Usuario creado correctamente');
      navigation.navigate('MenuScreen');
    } catch (error) {
      console.error('Error al crear el usuario', error);
    }
  };

  return (
    <View>
      <Text>Email:</Text>
      <TextInput value={email} onChangeText={setEmail} />

      <Text>Contraseña:</Text>
      <TextInput
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Crear Usuario" onPress={handleSignUp} />
    </View>
  );
};

export default CreateUserScreen;
