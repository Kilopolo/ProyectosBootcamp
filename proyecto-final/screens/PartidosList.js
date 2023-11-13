import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { collection, getDocs } from "@firebase/firestore";
import { firestore } from "../database/firebase";
import PartidoItem from "../components/PartidoItem";

const PartidosLists = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(firestore, "parties"));
      const partyData = [];

      querySnapshot.forEach((doc) => {
        partyData.push({ id: doc.id, ...doc.data() });
      });

      console.log("Fetched data:", partyData);

      setData(partyData);
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
          renderItem={({ item }) => <PartidoItem partido={item} />} // Change prop name to partido
        />
      )}
    </View>
  );
};

export default PartidosLists;
