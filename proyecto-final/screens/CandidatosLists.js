import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { collection, getDocs } from "@firebase/firestore";
import {firestore} from "../database/firebase";

import CandidatoItem from "../components/CandidatoItem";

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

    querySnapshot.forEach((doc) => {
      aplicantData.push({ id: doc.id, ...doc.data() });
    });

    console.log("Fetched data:", aplicantData);

    setData(aplicantData);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    setLoading(false);
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
            console.log("Rendering CandidatoItem with data:", item);
            return <CandidatoItem aplicant={item} />;
          }}
        />
      )}
    </View>
  );
};

export default CandidatosLists;
