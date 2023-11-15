import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TouchableWithoutFeedback,
    Animated,
  } from "react-native";
  import { StyleSheet } from "react-native";

const BotonNavegacion = ({ navigation, navigateTo, text }) => { // 
    const [scaleValue] = useState(new Animated.Value(1));
    const buttonScale = () => {
        Animated.sequence([
          Animated.timing(scaleValue, {
            toValue: 0.8,
            duration: 100,
            useNativeDriver: true,
          }),
          Animated.timing(scaleValue, {
            toValue: 1,
            duration: 100,
            useNativeDriver: true,
          }),
        ]).start();
      };
  return (
    <View style={styles.buttonOtherContainer}>
      <TouchableWithoutFeedback
        onPress={() => {
          buttonScale();
          navigation.navigate(navigateTo);
        }}
      >
        <Animated.View
          style={[styles.button, { transform: [{ scale: scaleValue }] }]}
        >
          <Text style={styles.buttonText}>{text}</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
    button: {
      backgroundColor: "#000000",
      width: 100,
      height: 50,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonText: {
      color: "#FFFFFF",
      fontSize: 20,
    },
    
    buttonOtherContainer:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        borderColor: "grey",
        borderRadius: 5,
        // padding: 10,
        // margin: 10,
      },
  });



export default BotonNavegacion;