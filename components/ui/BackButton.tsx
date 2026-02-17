import { useAppTheme } from "@/hooks/useAppTheme";
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

const slideFromLeft = new Keyframe({
  0: {
    opacity: 0,
    transform: [{ translateX: -10 }],
  },
  100: {
    opacity: 1,
    transform: [{ translateX: 0 }],
    easing: Easing.bezier(0.25, 0.1, 0.25, 1), // Smooth ease-out
  },
})
  .duration(300)
  .delay(300);
const slideOutLeft = new Keyframe({
  0: {
    transform: [{ translateX: 0 }],
    opacity: 1,
  },
  100: {
    transform: [{ translateX: -10 }],
    opacity: 0,
    easing: Easing.bezier(0.25, 0.1, 0.25, 1), // Smooth ease-out
  },
}).duration(200);
const BackButton = ({ onPress }: { onPress: () => void }) => {
  const { top } = useSafeAreaInsets();
  const intensity = useSharedValue(100);
  const { theme, colors } = useAppTheme();

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
          backgroundColor: colors.cardBackground,
          zIndex: 1,
        },
      ]}
    >
      <Animated.View entering={slideFromLeft} exiting={slideOutLeft}>
        <Pressable onPress={onPress} style={styles.pressable}>
          <FontAwesome6 name="arrow-left" size={14} color={colors.textColor} />
          <Text
            style={{
              fontSize: 24,
              fontFamily: "bold",
              color: colors.textColor,
            }}
          >
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
    zIndex: 100,
    paddingBottom: 10,
  },
  pressable: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
});
