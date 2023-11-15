import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
} from "react-native";
import stylesMenu from "./StyleMenuScreen";
import { getAuth } from "firebase/auth";
import PartidosLists from "./PartidosList";
import { collection, getDocs } from "@firebase/firestore";
import { firestore } from "../database/firebase";
import BotonNavegacion from "../components/BotonNavegacion";
import LoremIpsumComponent from "./LoremIpsumComponent";

const MenuScreen = ({ navigation }) => {

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
          {isLoading ? null : (
            <View style={stylesMenu.someContainerBottom}>
              <ScrollView>
                <PartidosLists listaPartidos={{ listaPartidos }} />
                <View style={stylesMenu.someContainerBottomButton}>
                  <BotonNavegacion
                    navigation={navigation}
                    navigateTo={"VoteScreen"}
                    text={"VOTAR"}
                  />
                </View>
                <LoremIpsumComponent />
              </ScrollView>
            </View>
          )}
        </View>
        {authenticated ? (
          <View style={stylesMenu.otherContainer}>
            <BotonNavegacion
              navigation={navigation}
              navigateTo={"LandingPage"}
              text={"HOME"}
            />
          </View>
        ) : (
          <View style={stylesMenu.otherContainer}>
            <View style={stylesMenu.otherContainerTop}>
              <Text style={stylesMenu.text}>No autenticado</Text>
            </View>
            <View style={stylesMenu.otherContainerBottom}>
              <BotonNavegacion
                navigation={navigation}
                navigateTo={"SignUp"}
                text={"SignUp"}
              />
              <BotonNavegacion
                navigation={navigation}
                navigateTo={"Login"}
                text={"Login"}
              />
            </View>
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

export default MenuScreen;
