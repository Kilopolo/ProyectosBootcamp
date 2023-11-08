import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Image,
  Platform,
} from "react-native";
import davidGana from "./assets/david-cat.gif";
import pabloGana from "./assets/pablo-cat.gif";
import empate from "./assets/empate.gif";
import { usePreventRemoveContext } from "@react-navigation/native";

const options = ["Piedra", "Papel", "Tijeras", "Lagarto", "Spock"];

const App = () => {
  const [mostrarFiguraPlayer, setFiguraPlayer] = useState("vs");
  const [mostrarFiguraPC, setFiguraPC] = useState("vs");
  const [mostrarGif, setGif] = useState("vs");
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const obtenerFigura = (mensaje) => {
    let imagen = "";
    if (mensaje === "Piedra") {
      imagen = require("./assets/rock.png");
    } else if (mensaje === "Lagarto") {
      imagen = require("./assets/lizard.png");
    } else if (mensaje === "Spock") {
      imagen = require("./assets/spock.png");
    } else if (mensaje === "Papel") {
      imagen = require("./assets/papel.png");
    } else if (mensaje === "Tijeras") {
      imagen = require("./assets/tijera.png");
    } else if (mensaje === "vs") {
      imagen = require("./assets/vs.png");
    }
    return imagen;
  };
  const obtenerImagen = {
    Empate: empate,
    "David gana": davidGana,
    "Pablo gana": pabloGana,
  };

  const computerPick = () => {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  };

  const determineWinner = (player, computer) => {
    setFiguraPC(computer);
    setFiguraPlayer(player);
    if (player === computer) return "Empate";
    if (
      (player === "Piedra" &&
        (computer === "Tijeras" || computer === "Lagarto")) ||
      (player === "Papel" && (computer === "Piedra" || computer === "Spock")) ||
      (player === "Tijeras" &&
        (computer === "Papel" || computer === "Lagarto")) ||
      (player === "Lagarto" &&
        (computer === "Papel" || computer === "Spock")) ||
      (player === "Spock" && (computer === "Piedra" || computer === "Tijeras"))
    ) {
      return "Pablo gana";
    } else {
      return "David gana";
    }
  };

  const play = (player) => {
    const computer = computerPick();
    const winner = determineWinner(player, computer);

    setPlayerChoice(player);
    setComputerChoice(computer);
    setResult(winner);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground
        source={require("./assets/fondo.jpg")}
        style={styles.fondoStyle}
      >
        <View style={styles.blurContainer}>
          <View style={styles.blur}>
            <Text style={styles.title}>Duelo honorable</Text>
            <View style={styles.notTitle}>
              <View style={styles.resultadoImgContainer}>
                <View style={styles.resultadoImgHijo}>
                  <Text style={styles.text}>David:{computerChoice}</Text>
                  <Image
                    source={obtenerFigura(mostrarFiguraPC)}
                    style={styles.image}
                  />
                </View>
                <View style={styles.resultadoImgHijo2}>
                  <Text style={styles.text}>Pablo: {playerChoice}</Text>
                  <Image
                    source={obtenerFigura(mostrarFiguraPlayer)}
                    style={styles.image2}
                  />
                </View>
              </View>
              <View style={styles.gifcontent}>
                <Image source={obtenerImagen[result]} style={styles.image} />
              </View>
              {playerChoice && computerChoice && (
                <View style={styles.result}>
                  {/* <Text style={styles.resultText}>David: {computerChoice}</Text>
                <Text style={styles.resultText}>Pablo: {playerChoice}</Text> */}
                  <Text style={styles.resultText}>{result}</Text>
                </View>
              )}
            </View>
            <View style={styles.notNotTitle}>
              <View style={styles.choices}>
                {options.map((option) => (
                  <TouchableOpacity
                    key={option}
                    style={styles.choiceButton}
                    onPress={() => play(option)}
                  >
                    <Text style={styles.choiceText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flex: 1,
    textTransform: "uppercase",
    fontSize: 24,
    textAlign: "center",
    color: "#544E4D",
    fontWeight: "bold",
    marginTop: 20,
    //borderWidth: 1,
  },
  notTitle: {
    flex: 10,
    fontSize: 24,
    textAlign: "center",
    color: "rgba(0, 70, 150,0.9)",
    fontWeight: "bold",
    marginTop: 20,
    //borderWidth: 1,
  },
  notNotTitle: {
    flex: 2,
    fontSize: 24,
    textAlign: "center",
    color: "rgba(0, 70, 150,0.9)",
    fontWeight: "bold",
    marginTop: 20,
    //borderWidth: 1,
    alignContent: "flex-end",
    flexDirection: "column-reverse",
  },
  choices: {
    flexDirection: "row",
  },
  choiceButton: {
    flex: 1,
    padding: 5,
    margin: 5,
    marginRight: 5,
    borderWidth: 2,
    backgroundColor: "white",
    borderColor: "grey",
    borderRadius: 5,
  },
  choiceText: {
    fontSize: 14,
    textAlign: "center",
    color: "#544E4D",
    fontWeight: "bold",
  },
  gifcontent: {
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "white",
    borderWidth: 2,
    backgroundColor: "white",
    borderColor: "grey",
    paddingTop: 10,
    borderRadius: 10,
    //Sombreado
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  result: {
    margin: 20,
    alignItems: "center",
  },
  resultText: {
    fontSize: 36,
  },
  text: {
    fontSize: 18,
  },
  fondoStyle: {
    flex: 1,
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
  blurContainer: {
    flex: 1,
    backgroundColor: "rgba(30, 30, 30, 0.1)",
  },
  blur: {
    flex: 1,
    backgroundColor: "transparent",
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 20,
    justifyContent: "center",
    transform: [{ scaleX: -1 }],
  },
  image2: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 20,
    justifyContent: "center",
  },
  resultadoImgContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  resultadoImgHijo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain",
    alignSelf: "center",
    justifyContent: "center",
  },
  resultadoImgHijo2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
