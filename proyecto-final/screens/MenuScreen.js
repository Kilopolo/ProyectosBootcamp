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
import { collection, getDocs } from "@firebase/firestore";
import { firestore } from "../database/firebase";

const MenuScreen = ({ navigation }) => {
  const [scaleValue] = useState(new Animated.Value(1));
  const [authenticated, setAuhtenticated] = useState(false);
  const [listaPartidos, setListaPartidos] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchPartido();
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

  const fetchPartido = async () => {
    try {
      const querySnapshot = await getDocs(collection(firestore, "parties"));
      const partyData = [];

      querySnapshot.forEach((doc) => {
        partyData.push({ id: doc.id, ...doc.data() });
      });

      await setListaPartidos(partyData);
     
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground
      source={require("../assets/BKG.png")} // Reemplaza 'tu_imagen_de_fondo.jpg' con la ruta de tu imagen
      style={stylesMenu.allMenuContainer}
    >
      <View style={stylesMenu.allMenuContainer}>
        <View style={stylesMenu.someContainer}>
          <ScrollView>
            {isLoading ? (
              <Text>Loading...</Text>
            ) : (
              <PartidosLists listaPartidos={{ listaPartidos }} />
            )}

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
