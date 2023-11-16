import React, { useState, useEffect } from "react";
import { View, Text, FlatList,Image } from "react-native";
import { collection, getDocs, getDoc ,doc,query, where } from "@firebase/firestore";
import { firestore } from "../database/firebase";
import stylesMenu from "../styles/StyleMenuScreen";
import stylesParty from "../styles/StylePartido";

const CandidatosLists = ({ party_id }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchCandidato();
  }, [party_id]);

  const fetchCandidato = async () => {
    try {
      const querySnapshot = await getDocs(
        query(collection(firestore, "aplicants"), where("party_id", "==", party_id))
      );

      const aplicantData = [];

      for (const doc of querySnapshot.docs) {
        const data = doc.data();

        const partyName = await getNombrePartido(data.party_id);
        const citizenName = await getNombreCiudadano(data.citizen_id);

        aplicantData.push({
          id: doc.id,
          partyName,
          citizenName,
          ...data
        });
      }

      // console.log("Fetched data:", aplicantData);
      setData(aplicantData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const getNombrePartido = async (id) => {
    try {
      const docRef = doc(collection(firestore, "parties"), id);
      const docSnapshot = await getDoc(docRef);
  
      if (docSnapshot.exists()) {
        const partido = docSnapshot.data();
        return partido.nombre || "";
      } else {
        return "";
      }
    } catch (error) {
      console.error("Error getting party name:", error);
      return "";
    }
  };
  
  const getNombreCiudadano = async (id) => {
    try {
      const docRef = doc(collection(firestore, "citizens"), id);
      const docSnapshot = await getDoc(docRef);
  
      if (docSnapshot.exists()) {
        const ciudadano = docSnapshot.data();
        const nombrecompleto=ciudadano.nombre +" "+ ciudadano.apellido;
        return nombrecompleto || "";
      } else {
        return "";
      }
    } catch (error) {
      console.error("Error getting citizen name:", error);
      return "";
    }
  };

  // console.log("Component rendered with data:", data);

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <View style={stylesMenu.loadingContainer}>
          <Image
            source={require("../assets/loading.gif")} // Ruta de tu archivo loading.gif
            style={stylesMenu.loadingGif}
          />
        </View>
      ) : (
        <View>
          {data.map((item, index) => (
            <View>
              {/*<Text>{`Partido: ${item.partyName}`}</Text>*/}
              <Text style={stylesParty.text}>{item.citizenName}</Text>
            </View>
          ))}
        </View>
        // <FlatList
        //   data={data}
        //   keyExtractor={({ id }) => id}
        //   renderItem={({ item }) => {
        //     // console.log("Rendering Candidato Item with data:", item);
        //     return (
        //       <View>
        //         {/*<Text>{`Partido: ${item.partyName}`}</Text>*/}
        //         <Text style={stylesParty.text}>{item.citizenName}</Text>
        //       </View>
        //     );
        //   }}
        // />
      )}
    </View>
  );
};

export default CandidatosLists;
