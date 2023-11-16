import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import stylesMenu from "../styles/StyleMenuScreen";
import { getAuth } from "firebase/auth";
import { collection, getDocs } from "@firebase/firestore";
import { firestore } from "../database/firebase";
import BotonNavegacion from "../components/BotonNavegacion";
import LoremIpsumComponent from "./LoremIpsumComponent";
import FetchPartidos from "../functions/FetchPartidos";
import { BarChart } from "react-native-chart-kit";
import PartidosLists from "./PartidosList";
import stylesParty from "../styles/StylePartido";

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
    FetchPartidos()
      .then((partyData) => {
        // console.log("Datos obtenidos:", partyData);
        setListaPartidos(partyData);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Función para renderizar el gráfico de barras
  const renderBarChart = () => {
    const labels = listaPartidos.map((partido) => partido.nombre);
    const data = listaPartidos.map((partido) => partido.votos);

    const chartConfig = {
      backgroundColor: "white",
      backgroundGradientFrom: "white",
      backgroundGradientTo: "#FEF8E8",
      decimalPlaces: 0,
      color: (opacity = 0) => ` rgba(000, 000, 000, ${opacity})`,
      style: {
        borderRadius: 20,
      },
    };

    return (
      <View>
        <Text style={stylesParty.titulo}>Resultados</Text>
        <BarChart
          data={{
            labels: labels,
            datasets: [
              {
                data: data,
              },
            ],
          }}
          width={300}
          height={200}
          chartConfig={chartConfig}
          fromZero={true}
          showValuesOnTopOfBars={true}
          style={stylesMenu.graf}
        />
      </View>
    );
  };

  return (
    <View style={stylesMenu.allMenuContainer}>
      <View style={stylesMenu.someContainer}>
      {isLoading ? (
           <View style={styles.loadingContainer}>
           <Image
             source={require('../assets/loading.gif')} // Ruta de tu archivo loading.gif
             style={styles.loadingGif}
           />
         </View>
          ):(
          <View style={stylesMenu.someContainerBottom}>
            <ScrollView>
              <View>{renderBarChart()}</View>
              <View>
                <PartidosLists listaPartidos={{ listaPartidos }} />
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
  );

  
};
const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingGif: {
    width: 200, // Ancho del GIF
    height: 200, // Alto del GIF
  },
});

export default MenuScreen;
