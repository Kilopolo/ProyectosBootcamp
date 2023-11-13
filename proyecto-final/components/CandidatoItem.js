import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CiudadanoItem from "../components/CiudadanoItem";
import PartidoItem from "../components/PartidoItem";

const CandidatoItem = ({ aplicant }) => {
    if (!aplicant || !aplicant.citizen || !aplicant.partido) {
      return null;
    }
    console.log("CandidatoItem received data:", aplicant);
    return (
      <View style={styles.container}>
        <CiudadanoItem citizen={aplicant?.citizen}  />
        <PartidoItem partido={aplicant?.partido} />
      </View>
      
    );
  };
  
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  text: {
    marginBottom: 5,
  },
});

export default CandidatoItem;
