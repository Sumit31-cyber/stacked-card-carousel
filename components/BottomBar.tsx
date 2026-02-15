import {
  BookOpen,
  CirclePlay,
  MessageCircle,
  Sparkle,
  UserRound,
} from "lucide-react-native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PADDING } from "./ui/CarouselCard";
import ProgressiveBlurView from "./ui/ProgressiveBlurView";

const ICON_SIZE = 20;
const BottomBar = () => {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingBottom: bottom,
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
        paddingHorizontal: PADDING,
        alignItems: "flex-end",
        position: "absolute",
        bottom: 0,
        height: bottom + 100,
      }}
    >
      <View style={[StyleSheet.absoluteFill, {}]}>
        <ProgressiveBlurView height={"100%"} intensity={100} />
      </View>
      <View style={styles.iconContainer}>
        <CirclePlay color={"white"} size={ICON_SIZE} />
      </View>
      <View style={styles.iconContainer}>
        <Sparkle color={"white"} size={ICON_SIZE} />
      </View>
      <View
        style={[styles.iconContainer, { height: 70, backgroundColor: "black" }]}
      >
        <BookOpen color={"white"} size={ICON_SIZE} />
      </View>
      <View style={styles.iconContainer}>
        <MessageCircle color={"white"} size={ICON_SIZE} />
      </View>
      <View style={styles.iconContainer}>
        <UserRound color={"white"} size={ICON_SIZE} />
      </View>
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  iconContainer: {
    height: 50,
    aspectRatio: 1,
    borderRadius: 100,
    backgroundColor: "#949492",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
});
