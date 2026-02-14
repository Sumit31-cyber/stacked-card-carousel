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
      {/* <View
        style={{
          flex: 1,
          //   height: CARD_HEIGHT + CARD_DISTANCE * 4,
          //   backgroundColor: "red",
        }}
      > */}
      <StackedCarousel />
      {/* </View> */}
    </View>
  );
};

export default HomeScreen;
