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
import { usePreventRemoveContext } from "@react-navigation/native";

import davidGana from "../../assets/david-cat.gif";
import pabloGana from "../../assets/pablo-cat.gif";
import empate from "../../assets/empate.gif";

import styles from "./StyleGameScreen";


const options = ["Piedra", "Papel", "Tijeras", "Lagarto", "Spock"];

const GameScreen = () => {
  const [mostrarFiguraPlayer, setFiguraPlayer] = useState("vs");
  const [mostrarFiguraPC, setFiguraPC] = useState("vs");
  const [mostrarGif, setGif] = useState("vs");
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const obtenerFigura = (mensaje) => {
    let imagen = "";
    if (mensaje === "Piedra") {
      imagen = require("../../assets/rock.png");
    } else if (mensaje === "Lagarto") {
      imagen = require("../../assets/lizard.png");
    } else if (mensaje === "Spock") {
      imagen = require("../../assets/spock.png");
    } else if (mensaje === "Papel") {
      imagen = require("../../assets/papel.png");
    } else if (mensaje === "Tijeras") {
      imagen = require("../../assets/tijera.png");
    } else if (mensaje === "vs") {
      imagen = require("../../assets/vs.png");
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
        source={require("../../assets/fondo.jpg")}
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



export default GameScreen;
