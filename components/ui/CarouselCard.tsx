import { DataType } from "@/constants/mockData";
import React from "react";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import CardAuthorSection from "./CardAuthorSection";

export const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } =
  Dimensions.get("window");

export const CARD_WIDTH = SCREEN_WIDTH * 0.94;
export const CARD_HEIGHT = (CARD_WIDTH / 3) * 4.6;
export const CARD_DISTANCE = 100;
export const PADDING = (SCREEN_WIDTH - CARD_WIDTH) / 2;

const CarouselCard = ({
  item,
  index,
  scrollX,
}: {
  item: DataType;
  index: number;
  scrollX: SharedValue<number>;
}) => {
  const isOpen = useSharedValue(false);
  const rStyle = useAnimatedStyle(() => {
    const activeIndex = scrollX.value / CARD_WIDTH;

    const translateX = interpolate(
      activeIndex,
      [index - 1, index, index + 1],
      [0, 0, -CARD_WIDTH - PADDING - 40],
    );

    const translateY = interpolate(
      activeIndex,
      [index - 2, index - 1, index],
      [CARD_DISTANCE + 160, CARD_DISTANCE + 80, CARD_DISTANCE],
      Extrapolation.CLAMP,
    );

    const scale = interpolate(
      activeIndex,
      [index - 4, index - 3, index - 2, index - 1, index, index + 1],
      [0, 0.5, 0.6, 0.8, 1, 0.8],
    );

    const opacity = interpolate(
      activeIndex,
      [index - 3, index - 2, index - 1, index],
      [0, 0.6, 0.8, 1],
      Extrapolation.CLAMP,
    );
    const rotate = interpolate(
      activeIndex,
      [index - 2, index - 1, index, index + 1],
      [-2, 3, 0, -20],
    );

    return {
      height: withTiming(isOpen.value ? SCREEN_HEIGHT : CARD_HEIGHT),
      width: withTiming(isOpen.value ? SCREEN_WIDTH : CARD_WIDTH),
      top: withTiming(isOpen.value ? CARD_DISTANCE : 300),
      left: withTiming(isOpen.value ? 0 : PADDING),
      transform: [
        {
          translateX: scrollX.value + translateX,
        },
        {
          translateY: -translateY,
        },
        {
          scale,
        },
        {
          rotateZ: `${rotate}deg`,
        },
      ],
      opacity,
    };
  });

  return (
    <Animated.View
      style={[
        rStyle,
        {
          backgroundColor: "white",
          position: "absolute",
          borderRadius: 25,
          zIndex: -index,
        },
      ]}
    >
      <Pressable
        style={{ padding: 10, gap: 20, height: CARD_HEIGHT }}
        onPress={() => (isOpen.value = !isOpen.value)}
      >
        <CardAuthorSection
          authorDetail={item.author}
          created_at={item.created_at}
        />
        <Text style={{ fontSize: 20, fontWeight: "500" }}>{item.title}</Text>
        <View style={{ flex: 1, borderRadius: 20, overflow: "hidden" }}>
          <Image
            resizeMode="cover"
            style={{ flex: 1 }}
            source={{ uri: item.hero_image }}
          ></Image>
        </View>
      </Pressable>
    </Animated.View>
  );
};

export default CarouselCard;

const styles = StyleSheet.create({});
