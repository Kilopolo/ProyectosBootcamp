import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import styles from "./StyleMenuScreen";
import { getAuth } from "firebase/auth";

const MenuScreen = ({ navigation }) => {
  const [scaleValue] = useState(new Animated.Value(1));
  const [authenticated, setAuhtenticated] = useState(false);

  useEffect(() => {
    const user = getAuth().currentUser;
    if (user === null) {
      setAuhtenticated(false);
    } else {
      setAuhtenticated(true);
    }
  }, []);

  const buttonScale = () => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 0.8,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.allMenuContainer}>
      {/* <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback onPress={() => { buttonScale(); navigation.navigate("CreateUserScreen") }}>
          <Animated.View style={[styles.button, { transform: [{ scale: scaleValue }] }]}>
            <Text style={styles.buttonText}>Crear Usuario</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View> */}
      <View style={styles.someContainer}>
        <ScrollView>
          {/* <View style={styles.buttonContainer}>
            <TouchableWithoutFeedback
              onPress={() => {
                buttonScale();
                navigation.navigate("CandidatosLists");
              }}
            >
              <Animated.View
                style={[styles.button, { transform: [{ scale: scaleValue }] }]}
              >
                <Text style={styles.buttonText}>Lista de Candidatos</Text>
              </Animated.View>
            </TouchableWithoutFeedback>
          </View> */}
          <View style={styles.buttonContainer}>
            <TouchableWithoutFeedback
              onPress={() => {
                buttonScale();
                navigation.navigate("PartidosLists");
              }}
            >
              <Animated.View
                style={[styles.button, { transform: [{ scale: scaleValue }] }]}
              >
                <Text style={styles.buttonText}>Lista de Partidos</Text>
              </Animated.View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </View>
      {authenticated ? (
        <View style={styles.otherContainer}>
          <View style={styles.buttonContainer}>
            <TouchableWithoutFeedback
              onPress={() => {
                buttonScale();
                navigation.navigate("LandingPage");
              }}
            >
              <Animated.View
                style={[styles.button, { transform: [{ scale: scaleValue }] }]}
              >
                <Text style={styles.buttonText}>LandingPage</Text>
              </Animated.View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      ) : (
        <View style={styles.otherContainer}>
          {/* Agrega aquí el contenido que deseas mostrar cuando el usuario no está autenticado */}
          <Text>No autenticado</Text>
          <View style={styles.buttonContainer}>
            <TouchableWithoutFeedback
              onPress={() => {
                buttonScale();
                navigation.navigate("CreateUserScreen");
              }}
            >
              <Animated.View
                style={[styles.button, { transform: [{ scale: scaleValue }] }]}
              >
                <Text style={styles.buttonText}>SingUp</Text>
              </Animated.View>
            </TouchableWithoutFeedback>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableWithoutFeedback
              onPress={() => {
                buttonScale();
                navigation.navigate("Login");
              }}
            >
              <Animated.View
                style={[styles.button, { transform: [{ scale: scaleValue }] }]}
              >
                <Text style={styles.buttonText}>Login</Text>
              </Animated.View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      )}
    </View>
  );
};

export default MenuScreen;
