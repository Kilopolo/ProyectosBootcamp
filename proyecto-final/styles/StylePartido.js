import { StyleSheet } from "react-native";
const stylesParty = StyleSheet.create({

container:{
  flex: 1,
 borderBlockColor: 'grey',
 borderTopWidth:1,
 borderBottomWidth:1,
 borderStyle:"dotted",
  marginBottom:15,
  borderRadius: 5,
  padding:5,

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
  color: "#505168",
  textAlign: "center",
  textTransform: "uppercase",
  fontWeight:"bold",
  marginBottom: 10,
},
todoAfuera:{
  margin: 10,
  padding: 10,
  borderTopWidth:1,
 borderBottomWidth:1,
 borderStyle:"dotted",
  borderRadius: 10,
  borderColor: 'grey',
  
},
});

export default stylesParty;
