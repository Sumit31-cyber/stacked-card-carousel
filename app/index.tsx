import BottomBar from "@/components/BottomBar";
import Header from "@/components/Header";
import StackedCarousel from "@/components/StackedCarousel";
import { useAppTheme } from "@/hooks/useAppTheme";
import React from "react";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

const HomeScreen = () => {
  const { colors } = useAppTheme();

  return (
    <Animated.View
      style={[
        styles.mainContainer,

        {
          backgroundColor: colors.backgroundColor,
        },
      ]}
    >
      <Header />
      <BottomBar isExiting={false} />
      <StackedCarousel />
    </Animated.View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e0e1df",
  },
  animatedContainer: {
    borderRadius: 20,
    overflow: "hidden",
  },
});
