import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';

const VoteScreen = () => {
  const [pressedButton, setPressedButton] = useState(null);

  const partidosDisponibles = [
    { id: 1, nombre: 'PSOE', color: '#FC0303' }, // Color rosa suave
    { id: 2, nombre: 'Partido Popular', color: '#00DFF9' }, // Color azul claro
  ];

  const handleVote = (partidoId) => {
    console.log(`Votaste por el partido con ID: ${partidoId}`);
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
        {partidosDisponibles.map((partido, index) => (
          <TouchableOpacity
            key={partido.id}
            style={[
              styles.partidoButton,
              {
                backgroundColor: pressedButton === partido.color ? partido.color : '#EAEAEA',
                transform: [{ scale: pressedButton === partido.color ? 1.2 : 1 }],
                marginBottom: index !== partidosDisponibles.length - 1 ? 10 : 0,
              },
            ]}
            onPress={() => handleVote(partido.id)}
            onPressIn={() => handlePressIn(partido.color)}
            onPressOut={handlePressOut}
          >
            <Text>{partido.nombre}</Text>
          </TouchableOpacity>
        ))}
        <View style={styles.textAreaContainer}>
          <TextInput
            placeholder="Comentarios adicionales (opcional)"
            multiline
            style={styles.textArea}
          />
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
    justifyContent: 'space-between',
  },
  partidoButton: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  textAreaContainer: {
    height: 150,
    marginVertical: 10,
  },
  textArea: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '100%',
  },
});

export default VoteScreen;
