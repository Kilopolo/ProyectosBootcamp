import { TouchableOpacity } from "react-native";
import { Svg, Circle, Rect } from "react-native-svg";
import { StyleSheet } from "react-native";
import { Text,View } from "react-native";
import { useState } from "react";

const CloudButton = ({ onPress, text, color }) => {
  const bgc = color? color : "rgba(30,30,30,1)";
  var complement = 0xffffff ^ color;
  const [backgroundColor,setBackgroundColor] = useState(bgc);


  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{text}</Text>
        <Svg width={100} height={60} viewBox="0 0 100 60">
          <Circle cx="30" cy="35" r="15" fill={backgroundColor} />
          <Circle cx="45" cy="30" r="20" fill={backgroundColor}  />
          <Circle cx="65" cy="35" r="15" fill={backgroundColor}  />
          <Rect x="30" y="20" width="40" height="30" fill={backgroundColor}  />
        </Svg>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",

    width: 250,
    // height: 60,
    borderRadius: 30,
    backgroundColor: "rgba(255,255,255,0.3)",
  },
  buttonText: {
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    textAlign: "center",
    color: "rgba(255,255,255,0.9)",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default CloudButton;
