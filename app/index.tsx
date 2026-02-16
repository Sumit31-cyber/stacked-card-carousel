import BottomBar from "@/components/BottomBar";
import Header from "@/components/Header";
import StackedCarousel from "@/components/StackedCarousel";
import { useAppTheme } from "@/hooks/useAppTheme";
import React from "react";
import { StyleSheet, View } from "react-native";

const HomeScreen = () => {
  const { colors } = useAppTheme();

  return (
    <View
      style={[
        styles.mainContainer,
        { backgroundColor: colors.backgroundColor },
      ]}
    >
      <Header />
      <BottomBar />
      <StackedCarousel />
    </View>
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
});
