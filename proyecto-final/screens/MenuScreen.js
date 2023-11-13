import React,{useState} from "react";
import { ScrollView, View, Text,  TouchableWithoutFeedback,Animated} from "react-native";
import styles from "./StyleMenuScreen";
 
const MenuScreen = ({ navigation }) => {
 
  const [scaleValue] = useState(new Animated.Value(1));
 
  const buttonScale = () => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 0.8,
        duration: 100,
        useNativeDriver: true
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true
      }),
    ]).start();
  };
 
  return (
    <ScrollView >
      {/* <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback onPress={() => { buttonScale(); navigation.navigate("CreateUserScreen") }}>
          <Animated.View style={[styles.button, { transform: [{ scale: scaleValue }] }]}>
            <Text style={styles.buttonText}>Crear Usuario</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View> */}
      <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback onPress={() => { buttonScale(); navigation.navigate("CandidatosLists") }}>
          <Animated.View style={[styles.button, { transform: [{ scale: scaleValue }] }]}>
            <Text style={styles.buttonText}>Lista de Candidatos</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback onPress={() => { buttonScale(); navigation.navigate("PartidosLists") }}>
          <Animated.View style={[styles.button, { transform: [{ scale: scaleValue }] }]}>
            <Text style={styles.buttonText}>Lista de Partidos</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback onPress={() => { buttonScale(); navigation.navigate("CreateUserScreen") }}>
          <Animated.View style={[styles.button, { transform: [{ scale: scaleValue }] }]}>
            <Text style={styles.buttonText}>SingUp</Text>
            </Animated.View>
        </TouchableWithoutFeedback>
        </View>

      <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback onPress={() => { buttonScale(); navigation.navigate("Login") }}>
          <Animated.View style={[styles.button, { transform: [{ scale: scaleValue }] }]}>
            <Text style={styles.buttonText}>Login</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>

    </ScrollView>
  );
};

export default MenuScreen;