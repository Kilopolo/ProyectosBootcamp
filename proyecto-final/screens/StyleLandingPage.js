import { StyleSheet } from "react-native";
export default StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: "cover", // O 'contain' según tus preferencias
      justifyContent: "center",
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
    },
    subtitle: {
      fontSize: 20,
      fontWeight: "bold",
      marginTop: 20,
      marginBottom: 10,
    },
    userInfo: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 10,
    },
    label: {
      fontSize: 18,
      fontWeight: "bold",
    },
    value: {
      fontSize: 18,
    },
    status: {
      fontSize: 20,
      marginBottom: 10,
    },
  });
  // const styles = StyleSheet.create({
  //   background: {
  //     flex: 1,
  //     resizeMode: "cover", // O 'contain' según tus preferencias
  //     justifyContent: "center",
  //   },
  //   container: {
  //     flex: 1,
  //     justifyContent: "center",
  //     alignItems: "center",
  //     padding: 20,
  //   },
  //   title: {
  //     fontSize: 24,
  //     fontWeight: "bold",
  //     marginBottom: 20,
  //   },
  //   subtitle: {
  //     fontSize: 20,
  //     fontWeight: "bold",
  //     marginTop: 20,
  //     marginBottom: 10,
  //   },
  //   userInfo: {
  //     flexDirection: "row",
  //     justifyContent: "space-between",
  //     marginBottom: 5,
  //   },
  //   label: {
  //     fontSize: 16,
  //     fontWeight: "bold",
  //   },
  //   value: {
  //     fontSize: 14,
  //   },
  //   status: {
  //     fontSize: 20,
  //     marginBottom: 10,
  //   },
  // });
  