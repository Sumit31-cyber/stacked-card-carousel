import { FontAwesome6 } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import Animated, {
  Easing,
  FadeIn,
  FadeOut,
  Keyframe,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PADDING } from "./CarouselCard";

const slideFromRight = new Keyframe({
  0: {
    opacity: 0,
    transform: [{ scale: 1.2 }, { translateX: 20 }],
  },
  100: {
    opacity: 1,
    transform: [{ scale: 1 }, { translateX: 0 }],
    easing: Easing.bezier(0.25, 0.1, 0.25, 1), // Smooth ease-out
  },
})
  .duration(500)
  .delay(300);
const slideOutRight = new Keyframe({
  0: {
    transform: [{ scale: 1 }, { translateX: 0 }],
    opacity: 1,
  },
  100: {
    transform: [{ scale: 1.2 }, { translateX: 30 }],
    opacity: 0,
    easing: Easing.bezier(0.25, 0.1, 0.25, 1), // Smooth ease-out
  },
}).duration(200);
const BackButton = ({ onPress }: { onPress: () => void }) => {
  const { top } = useSafeAreaInsets();
  const intensity = useSharedValue(100);

  useEffect(() => {
    intensity.value = withDelay(300, withTiming(0, { duration: 100 }));
  }, []);

  return (
    <Animated.View
      entering={FadeIn.delay(300)}
      exiting={FadeOut}
      style={[
        styles.mainContainer,
        {
          height: top * 2.2,
          paddingTop: top,
          paddingLeft: PADDING,
        },
      ]}
    >
      <Animated.View entering={slideFromRight} exiting={slideOutRight}>
        <Pressable onPress={onPress} style={styles.pressable}>
          <FontAwesome6 name="arrow-left" size={14} color="#070706" />
          <Text style={{ fontSize: 24, fontFamily: "bold", color: "#070706" }}>
            Back
          </Text>
        </Pressable>
      </Animated.View>
    </Animated.View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  mainContainer: {
    position: "absolute",
    width: "100%",
    top: 0,
    justifyContent: "flex-end",
    zIndex: 1,
    paddingBottom: 10,
    backgroundColor: "rgba(252,252,252,1)",
  },
  pressable: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
});
