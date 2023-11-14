import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { collection, getDocs, getDoc ,doc,query, where } from "@firebase/firestore";
import { firestore } from "../database/firebase";

const CandidatosLists = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchCandidato();
  }, []);

  const fetchCandidato = async () => {
    try {
      const querySnapshot = await getDocs(collection(firestore, "aplicants"));
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

      console.log("Fetched data:", aplicantData);
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
        return ciudadano.nombre || "";
      } else {
        return "";
      }
    } catch (error) {
      console.error("Error getting citizen name:", error);
      return "";
    }
  };

  console.log("Component rendered with data:", data);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => {
            console.log("Rendering Candidato Item with data:", item);
            return (
              <View  style={{ flex: 1, padding: 5 }}>
                {/*<Text>{`Partido: ${item.partyName}`}</Text>*/}
                <Text>{`Candidato: ${item.citizenName}`}</Text>
              </View>
            );
          }}
        />
      )}
    </View>
  );
};

export default CandidatosLists;
