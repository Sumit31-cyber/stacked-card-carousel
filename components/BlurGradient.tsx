import MaskedView from "@react-native-masked-view/masked-view";
import { BlurTint, BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { FC } from "react";
import {
  DimensionValue,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { easeGradient } from "react-native-easing-gradient";

interface Props {
  height: DimensionValue;
  intensity?: number;
  style?: StyleProp<ViewStyle>;
  tint?: BlurTint;
}
const BlurGradient: FC<Props> = ({
  height,
  intensity = 30,
  style,
  tint = "light",
}) => {
  const { colors, locations } = easeGradient({
    colorStops: {
      0: { color: "transparent" },
      0.5: { color: "rgba(0,0,0,0.99)" },
      1: { color: "black" },
    },
  });
  return (
    <View style={[styles.blurContainer, { width: "100%", height }, style]}>
      <MaskedView
        maskElement={
          <LinearGradient
            locations={locations}
            colors={colors}
            style={StyleSheet.absoluteFill}
          />
        }
        style={[StyleSheet.absoluteFill]}
      >
        <BlurView
          intensity={intensity}
          tint={tint}
          style={[StyleSheet.absoluteFill]}
        />
      </MaskedView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blurContainer: {
    position: "absolute",
    bottom: 0,
    zIndex: 2,
  },
  linearGradient: {
    bottom: 0,
    position: "absolute",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
});

export default BlurGradient;
