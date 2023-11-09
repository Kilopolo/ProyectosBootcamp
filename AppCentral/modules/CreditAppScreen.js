import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Slider from "@react-native-community/slider";

const CreditSimulator = () => {
  const [montoTotal, setMontoTotal] = useState(5000);
  const [plazo, setPlazo] = useState(3);

  const interes = 0.9798; // 97,98%

  const handleMontoChange = (value) => {
    setMontoTotal(value);
  };

  const handlePlazoChange = (value) => {
    setPlazo(value);
  };

  const calculateCuota = () => {
    const interesAmount = montoTotal * interes;
    const totalAmount = montoTotal + interesAmount;
    const cuota = parseFloat(totalAmount / plazo).toFixed(2);
    return cuota;
  };
  let cuotasDevolver = parseFloat(montoTotal + montoTotal * interes).toFixed(2);
  return (
    <ImageBackground
      source={require("../assets/fondocredito.jpg")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Simula tu crédito</Text>

        <View style={styles.content}>
          <Text style={styles.titleslider}>Monto Total</Text><Text style={styles.textslider1}> {montoTotal} $</Text>
          <Slider
            style={styles.slider}
            minimumValue={5000}
            maximumValue={50000}
            step={100}
            value={montoTotal}
            onValueChange={handleMontoChange}
          />
        </View>

        <View style={styles.content}>
          <Text style={styles.titleslider}>Plazo</Text><Text style={styles.textslider1}>{plazo}</Text>
          <Slider
            style={styles.slider}
            minimumValue={3}
            maximumValue={24}
            step={1}
            value={plazo}
            onValueChange={handlePlazoChange}
          />
        </View>
        <View style={styles.content1}>
          <Text style={styles.titleresult}>Resultado:</Text>
          <Text style={styles.result}>
            TOTAL A DEVOLVER EN CUOTAS:{" "}
            <Text style={styles.result1}>{cuotasDevolver} $</Text>
          </Text>
          <Text style={styles.result}>
            CUOTA FIJA EN {plazo} PAGOS:{" "}
            <Text style={styles.result1}>{calculateCuota()} $</Text>
          </Text>
        </View>
        <TouchableOpacity
          style={styles.bton}
          onPress={() => console.log("Obtener crédito")}
        >
          <Text style={styles.btontext}>Obtener Crédito</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bton}
          onPress={() => console.log("Ver detalle de cuotas")}
        >
          <Text style={styles.btontext}>Ver detalle de cuotas</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    fontFamily: "Roboto",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
  content: {
    justifyContent: "center",
    alignContent: "center",
    padding: 15,
  },
  content1: {
    justifyContent: "center",
    alignContent: "center",
    padding: 15,
    backgroundColor: "white",
    marginBottom:10,
    borderRadius:10
  },
  slider: {
    width: "100%",
    height: 40,
  },
  title: {
    textAlign: "center",
    fontSize: 26,
    textTransform: "uppercase",
    textDecorationLine: "underline",
    marginBottom: 10,
  },
  titleslider: {
    fontWeight: "bold",
    fontSize: 20,
    textTransform: "uppercase",
    margin: 9,
    textDecorationLine: "underline",

  },
  textslider1: {
    color: "blue",
    textAlign: "right",
    fontWeight: "bold",
    fontSize: 22,
  
   
  },

  titleresult: {
    fontWeight: "bold",
    fontSize: 18,
    textTransform: "uppercase",
    marginBottom: 10,
    textAlign: "center",
  },
  result: {
    fontSize: 16,
    marginBottom: 10,
  },
  result1: {
    color: "red",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  bton: {
    marginBottom: 10,
    backgroundColor: "#2886FF",
    padding: 10,
    borderRadius: 7,
  },
  btontext: {
    fontWeight: "bold",
    fontSize: 18,
    textTransform: "uppercase",
    color: "white",
    textAlign: "center",
    borderColor: "black",
  },
});

export default CreditSimulator;
