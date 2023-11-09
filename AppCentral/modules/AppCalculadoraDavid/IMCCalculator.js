import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const IMCCalculator = () =>
 {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState('');
  const [imcValue, setImcValue] = useState(0);

  const calculateIMC = () => {
    if (weight && height) {
        const weightInKg = parseFloat(weight);
        const heightInMeters = parseFloat(height) / 100;
        const imc = weightInKg / (heightInMeters * heightInMeters);
        setImcValue(imc.toFixed(2));
      if (imc < 18.5) {
        setResult('Finito🫥');
      } else if (imc >= 18.5 && imc < 25) {
        setResult('Ta bien😎');
      } else if (imc >= 25 && imc < 30) {
        setResult('Un poco panson😥');
      } else {
        setResult('Redondo?🫠');
        
      }
      onResultChange(imc);
    } else {
      setResult('Por favor, ingresa peso y altura');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.weightText}>Altura (cm):</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese altura"
        value={height}
        onChangeText={text => setHeight(text)}
        keyboardType="numeric"
      />

      <Text style={styles.weightText}>Peso (kg):</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese peso"
        value={weight}
        onChangeText={text => setWeight(text)}
        keyboardType="numeric"
      />
      <Button title="Calcular IMC" onPress={calculateIMC} />

      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>Resultado: {result}</Text>
        <Text style={styles.resultNumber}>(IMC: {imcValue})</Text>
      </View>
      <View style={styles.linesContainer}>
        <View style={styles.lines} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: '80%',
    color: 'black',
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  weightText: {
    textAlign: 'right',
    width: '100%',
    color: 'black',
    textAlign: 'center',
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
  },
  resultNumber: {
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  linesContainer: {
    position: 'relative',
    top: 44,
    right: 5,
    bottom: 3,
    justifyContent: 'right',
  },
  lines: {
    width: 70,
    height: '5%',
    backgroundColor: 'black',
    borderCurve:'circular'
  },
});

export default IMCCalculator;