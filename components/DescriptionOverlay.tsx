import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { IMAGE_BORDER_RADIUS } from "./ui/CarouselCard";
import ProgressiveBlurView from "./ui/ProgressiveBlurView";

interface Props {
  description: string;
}

const OVERLAY_HEIGHT = 200;

const DescriptionOverlay: React.FC<Props> = ({ description }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          "rgba(0,0,0,0)",
          "rgba(0,0,0,0.1)",
          "rgba(0,0,0,0.5)",
          "rgba(0,0,0,0.7)",
          "rgba(0,0,0,0.9)",
          "rgba(0,0,0,1)",
        ]}
        style={StyleSheet.absoluteFill}
      />

      <ProgressiveBlurView
        height={OVERLAY_HEIGHT}
        intensity={10}
        tint="dark"
        style={styles.blur}
      />

      <View style={styles.content}>
        <View style={styles.row}>
          <MaterialCommunityIcons
            name="set-left"
            size={16}
            color="rgba(252,252,252,0.8)"
          />
          <Text style={styles.label}>Quick Recap</Text>
        </View>

        <Text style={styles.description} numberOfLines={3}>
          {description}
        </Text>
      </View>
    </View>
  );
};

export default DescriptionOverlay;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: -1,
    height: OVERLAY_HEIGHT,
    width: "100%", // safer than fixed 400
    overflow: "hidden",
    borderRadius: IMAGE_BORDER_RADIUS,
  },
  blur: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 16,
    paddingBottom: 30,
    gap: 6,
    zIndex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    opacity: 0.9,
  },
  label: {
    color: "rgba(252,252,252,0.8)",
    fontFamily: "regular",
  },
  description: {
    color: "white",
    fontSize: 14,
    fontFamily: "regular",
  },
});
