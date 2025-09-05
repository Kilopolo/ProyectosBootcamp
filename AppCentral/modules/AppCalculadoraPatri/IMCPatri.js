import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image, ImageBackground } from "react-native";
import bajo from "../../assets/bajo.png";
import sobrepeso from "../../assets/sobrepeso.png";
import obesidad from "../../assets/obesidad.png";
import normopeso from "../../assets/normopeso.png";
import styles from "./StyleIMCPatri";

const IMCPatri = () => {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setIMC] = useState(null);

  const calculoIMC = () => {
    if (peso && altura) {
      const peso1 = parseFloat(peso);
      const altura1 = parseFloat(altura);
      const fIMC = peso1 / (altura1 * altura1);
      console.log(fIMC);
      setIMC(fIMC.toFixed(2));
    }
  };

  const getCategory = () => {
    if (imc) {
      if (imc < 18.5) {
        return "Bajo peso";
      } else if (imc < 24.9) {
        return "Peso normal";
      } else if (imc < 29.9) {
        return "Sobrepeso";
      } else {
        return "Obesidad";
      }
    }
    return "";
  };

  const imagePaths = {
    "Bajo peso": bajo,
    Sobrepeso: sobrepeso,
    "Peso normal": normopeso,
    Obesidad: obesidad,
  };

  return (
    <ImageBackground
      source={require("../../assets/fondoimcpatri.jpg")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Calcula tu IMC</Text>
          <TextInput
            style={styles.input}
            placeholder="Altura (m)"
            value={altura}
            onChangeText={(text) => setAltura(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Peso (kg)"
            value={peso}
            onChangeText={(text) => setPeso(text)}
          />
          <Button title="Calcular" onPress={calculoIMC} />
          {imc && (
            <View>
              <Text style={styles.result}>Tu IMC es: {imc}</Text>
              <Text style={styles.message}>Resultado: {getCategory()}</Text>
              <Image source={imagePaths[getCategory()]} style={styles.image} />
            </View>
          )}
        </View>
      </View>
    </ImageBackground>
  );
};


export default IMCPatri;
