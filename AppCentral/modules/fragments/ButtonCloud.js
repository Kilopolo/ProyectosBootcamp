import { TouchableOpacity } from "react-native";
import { Svg, Circle, Rect } from "react-native-svg";

const CloudButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Svg width={100} height={60} viewBox="0 0 100 60">
        <Circle cx="30" cy="35" r="15" fill="#FFFFFF" />
        <Circle cx="45" cy="30" r="20" fill="#FFFFFF" />
        <Circle cx="65" cy="35" r="15" fill="#FFFFFF" />
        <Rect x="30" y="20" width="40" height="30" fill="#FFFFFF" />
      </Svg>
    </TouchableOpacity>
  );
};
export default CloudButton;
