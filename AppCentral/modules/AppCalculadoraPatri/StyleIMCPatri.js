import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    backgroundImage: {
      flex: 1,
      resizeMode: "contain",
      width: "100%",
      height: "100%",
    },
    content: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontSize: 24,
      marginBottom: 10,
    },
  
    input: {
      width: 250,
      height: 50,
      borderColor: "black",
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    result: {
      fontSize: 18,
      marginTop: 10,
    },
    message: {
      fontSize: 20,
      marginTop: 10,
      textAlign: "center",
    },
    image: {
      width: 120,
      height: 120,
      marginTop: 10,
    },
  });
  