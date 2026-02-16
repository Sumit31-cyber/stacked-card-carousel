import { useAppTheme } from "@/hooks/useAppTheme";
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
import BlurGradient from "./BlurGradient";
import { PADDING } from "./ui/CarouselCard";

const ICON_SIZE = 20;
const BottomBar = () => {
  const { bottom } = useSafeAreaInsets();
  const { theme, colors } = useAppTheme();

  return (
    <View
      pointerEvents="none"
      style={{
        paddingBottom: bottom,
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
        paddingHorizontal: PADDING,
        alignItems: "flex-end",
        position: "absolute",
        bottom: 0,
        // height: bottom + 80,
        zIndex: 1,
        // borderTopWidth: 1,
        paddingTop: 20,
        // backgroundColor: "red",
      }}
    >
      <View style={[StyleSheet.absoluteFill]}>
        {/* <BlurView intensity={30} style={StyleSheet.absoluteFill} /> */}
        <BlurGradient
          height={"125%"}
          intensity={100}
          tint={theme.dark ? "dark" : "light"}
          style={{ zIndex: -1 }}
        />
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
