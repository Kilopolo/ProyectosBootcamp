import { StyleSheet } from "react-native";
const styles = StyleSheet.create({

  // buttonContainer: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   flexDirection: "row",
  //   borderColor: "grey",
  //   borderRadius: 5,
  //   padding: 10,
  //   margin: 10,
  // },
  textButton: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
    color: "#544E4D",
    fontWeight: "bold",
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  buttonText: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
    color: "#544E4D",
    fontWeight: "bold",
  },
  otherContainer: {
    flex: 2,
    padding: 5,
    backgroundColor: "white",

    alignItems: "center",
    justifyContent: "center",
  },
  otherContainerTop: {
    flex: 1,

    textAlign: "center",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 12,
    textAlign: "center",
    justifyContent: "center",
  },
  otherContainerBottom: {
    flex: 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  someContainer: {
    flex: 10,
    // flexWrap: "wrap",
    // alignItems: "center",
    // justifyContent: "center",
  },
  allMenuContainer: {
    flex: 1,

  },
});

export default styles;
