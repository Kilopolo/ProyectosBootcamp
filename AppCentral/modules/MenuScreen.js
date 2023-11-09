import React,{useState} from "react";
import { ScrollView, View, Text, Button , TouchableWithoutFeedback,Animated} from "react-native";
import { StyleSheet } from "react-native";
 
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
        <TouchableWithoutFeedback onPress={() => { buttonScale(); navigation.navigate("Calculator") }}>
          <Animated.View style={[styles.button, { transform: [{ scale: scaleValue }] }]}>
            <Text style={styles.buttonText}>IMC Pablo</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback onPress={() => { buttonScale(); navigation.navigate("IMCPatri") }}>
          <Animated.View style={[styles.button, { transform: [{ scale: scaleValue }] }]}>
            <Text style={styles.buttonText}>IMC Patri</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback onPress={() => { buttonScale(); navigation.navigate("IMCDavid") }}>
          <Animated.View style={[styles.button, { transform: [{ scale: scaleValue }] }]}>
            <Text style={styles.buttonText}>IMC David</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback onPress={() => { buttonScale(); navigation.navigate("Game") }}>
          <Animated.View style={[styles.button, { transform: [{ scale: scaleValue }] }]}>
            <Text style={styles.buttonText}>Game</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback onPress={() => { buttonScale(); navigation.navigate("CreditApp") }}>
          <Animated.View style={[styles.button, { transform: [{ scale: scaleValue }] }]}>
            <Text style={styles.buttonText}>CreditApp</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </ScrollView>
  );
};




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
 
export default MenuScreen;