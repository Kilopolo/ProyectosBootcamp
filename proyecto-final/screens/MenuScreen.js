import React,{useState} from "react";
import { ScrollView, View, Text, Button , TouchableWithoutFeedback,Animated} from "react-native";
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
      <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback onPress={() => { buttonScale(); navigation.navigate("CreateUserScreen") }}>
          <Animated.View style={[styles.button, { transform: [{ scale: scaleValue }] }]}>
            <Text style={styles.buttonText}>Crear Usuario</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback onPress={() => { buttonScale(); navigation.navigate("UsersList") }}>
          <Animated.View style={[styles.button, { transform: [{ scale: scaleValue }] }]}>
            <Text style={styles.buttonText}>Lista de Usuarios</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback onPress={() => { buttonScale(); navigation.navigate("FetchMovies") }}>
          <Animated.View style={[styles.button, { transform: [{ scale: scaleValue }] }]}>
            <Text style={styles.buttonText}>FetchMovies Example</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback onPress={() => { buttonScale(); navigation.navigate("CreateCitizenScreen") }}>
          <Animated.View style={[styles.button, { transform: [{ scale: scaleValue }] }]}>
            <Text style={styles.buttonText}>SingUp</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>

    </ScrollView>
  );
};





 
export default MenuScreen;