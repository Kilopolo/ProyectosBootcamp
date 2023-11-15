import { StyleSheet } from "react-native";
const stylesParty = StyleSheet.create({

container:{
  flex: 1,
  backgroundColor: "white",
  borderWidth: 1,
  marginBottom:15,
  borderColor:'grey',
  borderRadius: 5,
  padding:5
},
text:{
  fontSize: 14,
  marginBottom: 10,
  marginLeft: 30,
  color: "blue",
  fontWeight: "bold",
},
textPartido:{
  fontSize: 16,
  marginBottom: 10,
  marginLeft: 15,
  color: "#544E4D",
  fontWeight: "bold",
},
titulo:{
  fontSize: 18,
  color: "white",
  textAlign: "center",
  textTransform: "uppercase",
  fontWeight:"bold",
  marginBottom: 10,
}
});

export default stylesParty;
