import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { firestore, collection, getDocs } from "@firebase/firestore";
import UserItem from "./UserItem"; // Crea un componente UserItem para mostrar un usuario individual
import { ActivityIndicator } from "react-native";
const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);


  const fetchUsers = async () => {
    try {

      const response = collection(firestore, "users");
      const json = await response.json();
      setData(json.users);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }

    // const usersRef = collection(firestore, "users");
    // // console.log("kakakak"+str(usersRef));
    // const querySnapshot =  getDocs(usersRef);
    // const usersData = [];

    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data());
    //   usersData.push({ id: doc.id, ...doc.data() });
    // });

    // setUsers(usersData);
  };


  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        />
      )}
    </View>
    // <View>
    //   <Text>Listado de Usuarios:</Text>
    //   <FlatList
    //     data={users}
    //     keyExtractor={(item) => item.id}
    //     renderItem={({ item }) => <UserItem user={item} />}
    //   />
    // </View>
  );
};

export default UsersList;
