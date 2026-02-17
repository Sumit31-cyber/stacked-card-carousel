import { useAppTheme } from "@/hooks/useAppTheme";
import { useCardStore } from "@/store/cardStore";
import React, { useCallback, useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PADDING } from "./ui/CarouselCard";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const Header = () => {
  const [zIndex, setZIndex] = useState(1);
  const { top } = useSafeAreaInsets();
  const { colors } = useAppTheme();
  const { isCardExpanded } = useCardStore();

  // Hack for showing the header behind the back button
  // TODO: Fix this
  const changeZIndex = useCallback(() => {
    if (isCardExpanded) {
      setZIndex(0);
    } else {
      setTimeout(() => {
        setZIndex(1);
      }, 300);
    }
  }, [isCardExpanded]);

  useEffect(() => {
    changeZIndex();
  }, [isCardExpanded, changeZIndex]);

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: top,
          height: top * 1.8,
          zIndex: zIndex,
        },
      ]}
    >
      <Text style={[styles.left, { color: colors.textColor }]}>For You</Text>

      <View style={[styles.centerContainer, { top: top }]}>
        <Text style={[styles.centerText, { color: colors.secondaryText }]}>
          Follow
        </Text>
      </View>

      <Text style={[styles.rightText, { color: colors.secondaryText }]}>
        Discover
      </Text>
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
    fontFamily: "medium",
  },
  centerContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  centerText: {
    alignSelf: "center",
    fontFamily: "medium",
    fontSize: 16,
  },
  rightText: {
    fontFamily: "medium",
    fontSize: 16,
  },
});
