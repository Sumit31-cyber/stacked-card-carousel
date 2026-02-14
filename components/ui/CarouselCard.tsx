import { DataType } from "@/constants/mockData";
import { AntDesign } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
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
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CardAuthorSection from "./CardAuthorSection";
import ProgressiveBlurView from "./ProgressiveBlurView";

export const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } =
  Dimensions.get("window");

export const CARD_WIDTH = SCREEN_WIDTH * 0.94;
export const CARD_HEIGHT = (CARD_WIDTH / 3) * 4.6;
export const CARD_DISTANCE = 100;
export const PADDING = (SCREEN_WIDTH - CARD_WIDTH) / 2;

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

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
  const { top, bottom } = useSafeAreaInsets();
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
      //   Extrapolation.CLAMP,
    );

    const scale = interpolate(
      activeIndex,
      [index - 4, index - 3, index - 2, index - 1, index, index + 1],
      [0, 0.4, 0.6, 0.8, 1, 0.8],
      Extrapolation.CLAMP,
    );

    const opacity = interpolate(
      activeIndex,
      [index - 3, index - 2, index - 1, index],
      [0, 0.6, 0.8, 1],
      Extrapolation.CLAMP,
    );
    const rotate = interpolate(
      activeIndex,
      [index - 3, index - 2, index - 1, index, index + 1],
      [3, -2, 3, 0, -20],
    );

    return {
      height: withTiming(isOpen.value ? SCREEN_HEIGHT : CARD_HEIGHT),
      width: withTiming(isOpen.value ? SCREEN_WIDTH : CARD_WIDTH),
      top: withTiming(isOpen.value ? CARD_DISTANCE : 300),
      left: withTiming(isOpen.value ? 0 : PADDING),
      paddingTop: withTiming(isOpen.value ? top + 20 : 0),
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

  const animatedProps = useAnimatedProps(() => {
    const activeIndex = scrollX.value / CARD_WIDTH;

    const opacity = interpolate(
      activeIndex,
      [index - 2, index - 1, index, index + 1],
      [10, 8, 0, 15],
    );
    return {
      intensity: opacity,
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
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.08,
          shadowRadius: 10,
        },
      ]}
    >
      <Pressable
        style={{ padding: 10, height: CARD_HEIGHT }}
        onPress={() => (isOpen.value = !isOpen.value)}
      >
        <AnimatedBlurView
          animatedProps={animatedProps}
          intensity={10}
          style={[StyleSheet.absoluteFill, { zIndex: 1, borderRadius: 25 }]}
        />
        <CardAuthorSection
          authorDetail={item.author}
          created_at={item.created_at}
        />
        <Text style={{ fontSize: 18, fontWeight: "500", marginBottom: 10 }}>
          {item.title}
        </Text>
        <View style={{ flex: 1, borderRadius: 20, overflow: "hidden" }}>
          <Image
            resizeMode="cover"
            style={{ flex: 1 }}
            source={{ uri: item.hero_image }}
          ></Image>
          <View
            style={{
              position: "absolute",
              height: 230,
              width: 400,
              //   backgroundColor: "green",
              bottom: 0,
            }}
          >
            <LinearGradient
              colors={[
                "transparent",
                "rgba(0,0,0,0.5)",
                "rgba(0,0,0,0.9)",
                "rgba(0,0,0)",
              ]}
              style={{ flex: 1 }}
            >
              <ProgressiveBlurView height={230} style={{ zIndex: -1 }} />
              <View
                style={{
                  marginTop: "auto",
                  marginBottom: 30,
                  width: "90%",
                  paddingHorizontal: 10,
                  gap: 6,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 8,
                    opacity: 0.9,
                  }}
                >
                  <AntDesign
                    name="open-a-i"
                    size={20}
                    color="rgba(252,252,252,1)"
                  />
                  <Text
                    style={{ color: "rgba(252,252,252,1)", fontWeight: "300" }}
                  >
                    Quick Recap
                  </Text>
                </View>
                <Text
                  style={{
                    color: "white",
                    fontSize: 14,
                  }}
                >
                  {item.short_description}
                </Text>
              </View>
            </LinearGradient>
          </View>
        </View>
      </Pressable>
    </Animated.View>
  );
};

export default CarouselCard;

const styles = StyleSheet.create({});
