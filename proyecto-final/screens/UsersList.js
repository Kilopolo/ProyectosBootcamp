import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { collection, getDocs } from "@firebase/firestore";
import {firestore} from "../database/firebase";

const UsersList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(firestore, "users"));
      const usersData = [];

      querySnapshot.forEach((doc) => {
        usersData.push({ id: doc.id, ...doc.data() });
      });

      console.log("Fetched data:", usersData);

      setData(usersData);
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
          renderItem={({ item }) => (
            <View style={{ marginBottom: 10 }}>
              <Text>Email: {item.email}</Text>
              {item.name && <Text>Name: {item.name}</Text>}
              {item.phone && <Text>Phone: {item.phone}</Text>}
              {/* Add additional properties as needed */}
            </View>
          )}
        />
      )}
    </View>
  );
};

export default UsersList;
