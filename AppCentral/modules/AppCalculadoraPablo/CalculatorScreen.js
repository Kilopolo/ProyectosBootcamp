import React, { useState } from "react";
import {View,Text,TextInput,ImageBackground,ScrollView,Image} from "react-native";

import CloudButton from "../fragments/ButtonCloud";
import styles from "./StyleIMCPablo";
import Delgado from "../../assets/felicitacion_delgado.png";
import Normal from "../../assets/felicitacion_normal.png";
import Gordo from "../../assets/felicitacion_gordo.png";
import Obeso from "../../assets/felicitacion_obeso.png";
import BKG from "../../assets/BKG.jpg";

const CalculatorScreen = () => {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setIMC] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const [mostrarFelicitacion, setMostrarFelicitacion] = useState("");
  const [colorPeso, setColorPeso] = useState("rgba(30,30,30,1)");

  // Función para obtener la imagen de felicitación según el mensaje
  const obtenerImagenFelicitacion = (mensaje) => {
    let imagen = "";
    if (mensaje === "Delgado") {
      imagen = Delgado;
    } else if (mensaje === "Normal") {
      imagen = Normal;
    } else if (mensaje === "Gordo") {
      imagen = Gordo;
    } else if (mensaje === "Obeso") {
      imagen = Obeso;
    }
    return imagen;
  };

  const calcularIMC = () => {
    if (altura && peso) {
      const alturaMetros = altura / 100;
      const imcCalculado = (peso / (alturaMetros * alturaMetros)).toFixed(2);
      setIMC(imcCalculado);

      if (imcCalculado < 18.5) {
        setMensaje("Delgado");
        setMostrarFelicitacion("Delgado");
        setColorPeso("rgba(130,130,200,0.9)");
      } else if (imcCalculado >= 18.5 && imcCalculado < 25) {
        setMensaje("Normal");
        setMostrarFelicitacion("Normal");
        setColorPeso("rgba(00,150,00,0.9)");
      } else if (imcCalculado >= 25 && imcCalculado < 30) {
        setMensaje("Gordo");
        setMostrarFelicitacion("Gordo");
        setColorPeso("rgba(200,200,0,0.9)");
      } else {
        setMensaje("Obeso");
        setMostrarFelicitacion("Obeso");
        setColorPeso("rgba(150,0,0,0.9)");
      }
    } else {
      setIMC(null);
      setMensaje("");
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        <ImageBackground
          source={BKG}
          style={styles.backgroundImage}
        >
          <View style={styles.blurContainer}>
            <View style={styles.blur}>
              <Text style={styles.titulo}>IMC CALCULATOR</Text>
              <Text style={styles.subtitulo}>Ligero como una nube</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Altura (cm)"
                  onChangeText={(text) => setAltura(text)}
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Peso (kg)"
                  onChangeText={(text) => setPeso(text)}
                  keyboardType="numeric"
                />
                {/* <Button title="Calcular IMC" onPress={calcularIMC} /> */}
                <CloudButton onPress={calcularIMC} text={"CALCULAR"}/>
              </View>
              {imc !== null && (
                <View style={styles.resultContainer}>
                  <Text style={styles.resultText}>Tu IMC: {imc}</Text>
                  <Text style={styles.resultText}>Estado: {mensaje}</Text>
                </View>
              )}
              <Image
                source={obtenerImagenFelicitacion(mostrarFelicitacion)}
                style={styles.image}
              />
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default CalculatorScreen;
