import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import CandidatosLists from "./CandidatosLists";
import stylesParty from "../styles/StylePartido";

const PartidosLists = ({ listaPartidos }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    awaitData();
  }, [listaPartidos]);

  async function awaitData() {
    await setData(listaPartidos.listaPartidos); // Utiliza directamente el prop listaPartidos
  }

  return (
    <View style={stylesParty.todoAfuera}>
      <Text style={stylesParty.titulo}>Partidos políticos</Text>
  
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()} // Convierte a cadena para la clave única
        renderItem={({ item }) => (
          <View style={stylesParty.container}>
            <Text style={stylesParty.textPartido}>{item.nombre}</Text>
            <CandidatosLists party_id={item.id} />
            <Text style={stylesParty.textPartido}>{item.sede}</Text>
            <Text style={stylesParty.textPartido}>Total de votos: {item.votos}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default PartidosLists;
