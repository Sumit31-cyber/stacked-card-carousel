import BottomBar from "@/components/BottomBar";
import Header from "@/components/Header";
import StackedCarousel from "@/components/StackedCarousel";
import React from "react";
import { View } from "react-native";

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#e0e1df",
      }}
    >
      <Header />
      <StackedCarousel />
      <BottomBar />
    </View>
  );
};

export default HomeScreen;
