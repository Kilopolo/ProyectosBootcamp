import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import CandidatosLists from "./CandidatosLists";
import stylesParty from "./StylePartido";

const PartidosLists = ({ listaPartidos }) => {
  const [data, setData] = useState([]);

  useEffect(() => {

    awaitData();
  }, []);

  async function awaitData() {
    await setData(listaPartidos.listaPartidos);
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Partidos políticos</Text>
  
      {data.map((item, index) => (
        <View style={stylesParty.container}>
          <Text>{item.nombre}</Text> 
          <CandidatosLists party_id={item.id} />
          <Text>{item.sede}</Text>
          <Text>{item.votos}</Text>
         
        </View>
      ))}
    </View>
  );
};

export default PartidosLists;
