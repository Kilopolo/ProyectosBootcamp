import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    backgroundColor: "rgba(30, 45, 55, 0.5)",
    borderRadius: 20,
    padding: 20,
    color: "white",
  },
  input: {
    // width: 200,
    height: 40,
    alignContent: "center",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    margin: 10,
    paddingLeft: 10,
    color: "white",
    marginBottom: 10,
    paddingLeft: 10,
    fontSize: 18,
  },
  resultContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    padding: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  resultText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    alignItems: "center",
  },
  felicitacionImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  titulo: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 20,
    justifyContent: "center",
  },

  blurContainer: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Fondo blanco semitransparente
  },
  blur: {
    flex: 1,
    backgroundColor: "transparent", // Fondo transparente para que se vea el fondo de la imagen
    padding: 20, // Ajusta el espacio interno según tus necesidades
  },
});


