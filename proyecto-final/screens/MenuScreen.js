import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
  ImageBackground,
} from "react-native";
import stylesMenu from "./StyleMenuScreen";
import { getAuth } from "firebase/auth";
import PartidosLists from "./PartidosList";

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
    <ImageBackground
      source={require("../assets/BKG.png")} // Reemplaza 'tu_imagen_de_fondo.jpg' con la ruta de tu imagen
      style={stylesMenu.allMenuContainer}
    >
      <View style={stylesMenu.allMenuContainer}>

        <View style={stylesMenu.someContainer}>
          <ScrollView>
            <PartidosLists />
            {/* <View style={styles.buttonContainer}>
              <TouchableWithoutFeedback
                onPress={() => {
                  buttonScale();
                  navigation.navigate("PartidosLists");
                }}
              >
                <Animated.View
                  style={[
                    styles.button,
                    { transform: [{ scale: scaleValue }] },
                  ]}
                >
                  <Text style={styles.buttonText}>Lista de Partidos</Text>
                </Animated.View>
              </TouchableWithoutFeedback>
            </View> */}
          </ScrollView>
        </View>
        <View style={styles.someContainer}>
          <ScrollView>

            <View style={styles.buttonContainer}>
              <TouchableWithoutFeedback
                onPress={() => {
                  buttonScale();
                  navigation.navigate("VoteScreen");
                }}
              >
                <Animated.View
                  style={[
                    styles.button,
                    { transform: [{ scale: scaleValue }] },
                  ]}
                >
                  <Text style={styles.buttonText}>Vote</Text>
                </Animated.View>
              </TouchableWithoutFeedback>
            </View>
          </ScrollView>
        </View>
        {authenticated ? (
          <View style={stylesMenu.otherContainer}>
            <View style={stylesMenu.buttonOtherContainer}>
              <TouchableWithoutFeedback
                onPress={() => {
                  buttonScale();
                  navigation.navigate("LandingPage");
                }}
              >
                <Animated.View
                  style={[
                    stylesMenu.button,
                    { transform: [{ scale: scaleValue }] },
                  ]}
                >
                  <Text style={stylesMenu.buttonText}>HOME</Text>
                </Animated.View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        ) : (
          <View style={stylesMenu.otherContainer}>
            <View style={stylesMenu.otherContainerTop}>
              <Text style={stylesMenu.text}>No autenticado</Text>
            </View>
            <View style={stylesMenu.otherContainerBottom}>
              <View style={stylesMenu.buttonOtherContainer}>
                <TouchableWithoutFeedback
                  onPress={() => {
                    buttonScale();
                    navigation.navigate("CreateUserScreen");
                  }}
                >
                  <Animated.View
                    style={[
                      stylesMenu.button,
                      { transform: [{ scale: scaleValue }] },
                    ]}
                  >
                    <Text style={stylesMenu.buttonText}>SingUp</Text>
                  </Animated.View>
                </TouchableWithoutFeedback>
              </View>

              <View style={stylesMenu.buttonOtherContainer}>
                <TouchableWithoutFeedback
                  onPress={() => {
                    buttonScale();
                    navigation.navigate("Login");
                  }}
                >
                  <Animated.View
                    style={[
                      stylesMenu.button,
                      { transform: [{ scale: scaleValue }] },
                    ]}
                  >
                    <Text style={stylesMenu.buttonText}>Login</Text>
                  </Animated.View>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

export default MenuScreen;
