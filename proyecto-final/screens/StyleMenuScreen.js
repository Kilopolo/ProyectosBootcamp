import { StyleSheet} from "react-native";
const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
      buttonContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        borderColor: "grey",
        borderRadius: 5,
        padding: 10,
        margin: 10,
      },
      textButton: {
        fontSize: 20,
        marginBottom : 10,
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
        marginBottom : 10,
        textAlign: "center",
        color: "#544E4D",
        fontWeight: "bold",
      }, 
});

export default styles;