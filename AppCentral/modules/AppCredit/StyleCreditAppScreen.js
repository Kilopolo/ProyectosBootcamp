import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
      fontFamily: "Roboto",
    },
    backgroundImage: {
      flex: 1,
      resizeMode: "contain",
      width: "100%",
      height: "100%",
    },
    content: {
      justifyContent: "center",
      alignContent: "center",
      padding: 15,
    },
    content1: {
      justifyContent: "center",
      alignContent: "center",
      padding: 15,
      backgroundColor: "white",
      marginBottom:10,
      borderRadius:10,
      borderWidth: 1,
      borderColor: "grey",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.0,
  
      elevation: 24,
    },
    slider: {
      width: "100%",
      height: 40,
    },
    title: {
      textAlign: "center",
      fontSize: 26,
      textTransform: "uppercase",
      textDecorationLine: "underline",
      marginBottom: 10,
    },
    titleslider: {
      fontWeight: "bold",
      fontSize: 20,
      textTransform: "uppercase",
      margin: 9,
      textDecorationLine: "underline",
      
  
    },
    textslider1: {
      color: "blue",
      textAlign: "right",
      fontWeight: "bold",
      fontSize: 22,
    },
  
    titleresult: {
      fontWeight: "bold",
      fontSize: 18,
      textTransform: "uppercase",
      marginBottom: 10,
      textAlign: "center",
    },
    result: {
      fontSize: 16,
      marginBottom: 10,
    },
    result1: {
      color: "red",
      fontWeight: "bold",
      textDecorationLine: "underline",
    },
    bton: {
      marginBottom: 10,
      backgroundColor: "#2886FF",
      padding: 10,
      borderRadius: 7,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.0,
  
      elevation: 24,
    },
    btontext: {
      fontWeight: "bold",
      fontSize: 18,
      textTransform: "uppercase",
      color: "white",
      textAlign: "center",
      borderColor: "black",
      
    },
  });