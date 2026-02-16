import { DataType } from "@/constants/mockData";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import React, { useMemo, useRef, useState } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Animated, {
  Easing,
  Extrapolation,
  interpolate,
  Keyframe,
  SharedValue,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BackButton from "./BackButton";
import CardAuthorSection from "./CardAuthorSection";
import ProgressiveBlurView from "./ProgressiveBlurView";

export const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } =
  Dimensions.get("window");

const zoomIn = new Keyframe({
  0: {
    transform: [{ scale: 1.2 }, { translateY: 30 }],
    opacity: 0,
  },

  100: {
    transform: [{ scale: 1 }, { translateY: 0 }],
    opacity: 1,
    easing: Easing.bezier(0.25, 0.1, 0.25, 1), // Smooth ease-out
  },
})
  .duration(600)
  .delay(300);
const zoomOut = new Keyframe({
  0: {
    transform: [{ scale: 1 }, { translateY: 0 }],
    opacity: 1,
  },
  100: {
    transform: [{ scale: 1.2 }, { translateY: 30 }],
    opacity: 0,
  },
}).duration(600);

export const CARD_WIDTH = SCREEN_WIDTH * 0.94;
export const CARD_HEIGHT = (CARD_WIDTH / 3) * 4.6;
export const CARD_DISTANCE = 100;
export const PADDING = (SCREEN_WIDTH - CARD_WIDTH) / 2;
const BORDER_RADIUS = 25;
const IMAGE_BORDER_RADIUS = BORDER_RADIUS - PADDING / 2;
const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

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
  const [isExpandedState, setIsExpandedState] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  const { top } = useSafeAreaInsets();
  const springConfig = useMemo(
    () => ({
      damping: 60,
      stiffness: 300,
    }),
    [],
  );

  const rStyle = useAnimatedStyle(() => {
    const isExpanded = isOpen.value;
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

    const delay = isOpen.value ? 0 : 100;

    return {
      height: withDelay(
        delay,
        withSpring(isExpanded ? SCREEN_HEIGHT : CARD_HEIGHT, springConfig),
      ),
      width: withDelay(
        delay,
        withSpring(isExpanded ? SCREEN_WIDTH : CARD_WIDTH, springConfig),
      ),
      top: withDelay(
        delay,
        withSpring(isExpanded ? top : top * 4.2, springConfig),
      ),
      left: withDelay(
        delay,
        withSpring(isExpanded ? 0 : PADDING, springConfig),
      ),
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

  const animatedPadding = useAnimatedStyle(() => {
    const isExpanded = isOpen.value;
    const delay = isOpen.value ? 0 : 100;
    return {
      paddingTop: withDelay(
        delay,
        withSpring(isExpanded ? top * 2 + 20 : PADDING, springConfig),
      ),
    };
  });

  const animatedProps = useAnimatedProps(() => {
    const activeIndex = scrollX.value / CARD_WIDTH;

    const blurIntensity = interpolate(
      activeIndex,
      [index - 1, index, index + 1],
      [10, 0, 10], // Active card (index) has 0 blur, others have 10
      Extrapolation.CLAMP,
    );

    return {
      intensity: blurIntensity,
    };
  });

  const expandableStateHandler = () => {
    if (isOpen.value) {
      scrollViewRef.current?.scrollTo({ animated: true, y: 0 });
    }
    isOpen.value = !isOpen.value;
    setIsExpandedState(!isExpandedState);
  };

  return (
    <Animated.View
      style={[
        rStyle,
        {
          backgroundColor: "white",
          position: "absolute",
          borderRadius: BORDER_RADIUS,
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
      {isExpandedState && <BackButton onPress={expandableStateHandler} />}
      <ScrollView
        ref={scrollViewRef}
        style={{ flex: 1, borderRadius: BORDER_RADIUS }}
        showsVerticalScrollIndicator={false}
      >
        <AnimatedPressable
          style={[
            animatedPadding,
            { padding: 10, height: SCREEN_HEIGHT + 250 },
          ]}
          onPress={() => {
            if (!isExpandedState) {
              expandableStateHandler();
            }
          }}
        >
          <AnimatedBlurView
            animatedProps={animatedProps}
            style={[
              StyleSheet.absoluteFill,
              { zIndex: 1, borderRadius: BORDER_RADIUS },
            ]}
          />
          <CardAuthorSection
            authorDetail={item.author}
            created_at={item.created_at}
          />
          <Text
            numberOfLines={2}
            style={{
              fontSize: 20,
              fontWeight: "500",
              marginBottom: 10,
              width: SCREEN_WIDTH - PADDING * 4,
              fontFamily: "bold",
              lineHeight: 21,
              //   backgroundColor: "red",
            }}
          >
            {item.title}
          </Text>
          <View
            style={{
              height: CARD_HEIGHT * 0.77,
              borderRadius: IMAGE_BORDER_RADIUS,
              overflow: "hidden",
            }}
          >
            <Image
              resizeMode="cover"
              style={{ flex: 1, borderRadius: IMAGE_BORDER_RADIUS }}
              source={{ uri: item.hero_image }}
            ></Image>
            <View
              style={{
                position: "absolute",
                height: 230,
                width: 400,
                overflow: "hidden",
                borderRadius: IMAGE_BORDER_RADIUS,
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
                <ProgressiveBlurView
                  height={230}
                  style={{ zIndex: -1 }}
                  intensity={10}
                  tint="dark"
                />
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
                    <MaterialCommunityIcons
                      name="set-left"
                      size={16}
                      color="rgba(252,252,252,0.8)"
                    />
                    <Text
                      style={{
                        color: "rgba(252,252,252,0.8)",
                        fontFamily: "regular",
                      }}
                    >
                      Quick Recap
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 14,
                      fontFamily: "regular",
                    }}
                  >
                    {item.short_description}
                  </Text>
                </View>
              </LinearGradient>
            </View>
          </View>
          {isExpandedState && (
            <Animated.View
              entering={zoomIn}
              exiting={zoomOut}
              style={[
                {
                  position: "absolute",
                  width: "100%",
                  //   paddingHorizontal: PADDING,
                  flexDirection: "row",
                  top: CARD_HEIGHT + top * 2.2,
                  alignSelf: "center",
                  minWidth: SCREEN_WIDTH,
                  paddingHorizontal: 10,
                },
              ]}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "400",
                  color: "#070706",
                  fontFamily: "regular",
                }}
              >
                {item.content}
              </Text>
            </Animated.View>
          )}
        </AnimatedPressable>
      </ScrollView>
    </Animated.View>
  );
};

export default CarouselCard;

const styles = StyleSheet.create({});
