import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PADDING } from "./ui/CarouselCard";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const Header = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: top, height: top * 1.8 }]}>
      <Text style={styles.left}>For You</Text>

      <View style={[styles.centerContainer, { top: top }]}>
        <Text style={styles.center}>Follow</Text>
      </View>

      <Text style={styles.right}>Discover</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: SCREEN_WIDTH,
    paddingHorizontal: PADDING,
    position: "absolute",
    top: 0,
  },
  left: {
    fontSize: 22,
    fontWeight: "700",
  },
  centerContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  center: {
    alignSelf: "center",
  },
  right: {},
});
