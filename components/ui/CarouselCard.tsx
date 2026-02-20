import { DataType } from "@/constants/mockData";
import { useAppTheme } from "@/hooks/useAppTheme";

import { useCardStore } from "@/store/cardStore";
import { BlurView } from "expo-blur";
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
  Extrapolation,
  FadeIn,
  FadeOut,
  interpolate,
  SharedValue,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import DescriptionOverlay from "../DescriptionOverlay";
import BackButton from "./BackButton";
import CardAuthorSection from "./CardAuthorSection";

export const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } =
  Dimensions.get("window");

export const CARD_WIDTH = SCREEN_WIDTH * 0.94;
export const CARD_HEIGHT = (CARD_WIDTH / 3) * 4.6;
export const CARD_DISTANCE = 100;
export const PADDING = (SCREEN_WIDTH - CARD_WIDTH) / 2;
const BORDER_RADIUS = 25;
export const IMAGE_BORDER_RADIUS = BORDER_RADIUS - PADDING / 2;

// Animated Components
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
  const { colors } = useAppTheme();

  const isOpen = useSharedValue(false);
  const [isExpandedState, setIsExpandedState] = useState(false);
  const { toggleCardExpandedState } = useCardStore();
  const scrollViewRef = useRef<ScrollView>(null);

  const { top, bottom } = useSafeAreaInsets();
  const springConfig = useMemo(
    () => ({
      damping: 32,
      stiffness: 220,
      mass: 0.8,
    }),
    [],
  );
  const rStyle = useAnimatedStyle(() => {
    const expanded = isOpen.value;
    const activeIndex = scrollX.value / CARD_WIDTH;
    const delay = expanded ? 0 : 100;

    // Helper for spring with delay
    const delayedSpring = (value: number) =>
      withDelay(delay, withSpring(value, springConfig));

    // ----- Interpolations -----
    const translateXOffset = interpolate(
      activeIndex,
      [index - 1, index, index + 1],
      [0, 0, -CARD_WIDTH - PADDING - 40],
    );

    const translateYOffset = interpolate(
      activeIndex,
      [index - 2, index - 1, index],
      [CARD_DISTANCE + 160, CARD_DISTANCE + 80, CARD_DISTANCE],
    );

    const scale = interpolate(
      activeIndex,
      [index - 3, index - 2, index - 1, index, index + 1],
      [0.4, 0.6, 0.8, 1, 0.8],
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

    // ----- Layout Animations -----
    const height = expanded ? SCREEN_HEIGHT + bottom + PADDING : CARD_HEIGHT;
    const width = expanded ? SCREEN_WIDTH : CARD_WIDTH;
    const topPosition = expanded ? top : top * 4.2;
    const leftPosition = expanded ? 0 : PADDING;

    return {
      height: delayedSpring(height),
      width: delayedSpring(width),
      top: delayedSpring(topPosition),
      left: delayedSpring(leftPosition),

      transform: [
        { translateX: scrollX.value + translateXOffset },
        { translateY: -translateYOffset },
        { scale },
        { rotateZ: `${rotate}deg` },
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
    const activeIndex = Math.floor(scrollX.value / (CARD_WIDTH - PADDING));
    if (index !== activeIndex) return;
    if (isOpen.value) {
      scrollViewRef.current?.scrollTo({ animated: true, y: 0 });
    }
    isOpen.value = !isOpen.value;
    setIsExpandedState(!isExpandedState);
    toggleCardExpandedState();
  };

  return (
    <Animated.View
      style={[
        rStyle,
        styles.mainContainer,
        {
          zIndex: -index,
          backgroundColor: colors.cardBackground,
          borderWidth: 1,
          borderColor: "rgba(255,255,255,0.06)",
        },
      ]}
    >
      {isExpandedState && <BackButton onPress={expandableStateHandler} />}
      <ScrollView
        ref={scrollViewRef}
        scrollEnabled={isOpen.value ? true : false}
        style={{ flex: 1, borderRadius: BORDER_RADIUS }}
        showsVerticalScrollIndicator={false}
      >
        <AnimatedPressable
          style={[
            animatedPadding,
            {
              padding: 10,
              height: SCREEN_HEIGHT + 250,
            },
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
            style={[styles.title, { color: colors.textColor }]}
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
            />
            <DescriptionOverlay description={item.short_description} />
          </View>
          {isExpandedState && (
            <Animated.View
              entering={FadeIn}
              exiting={FadeOut}
              style={[
                styles.contentContainer,
                {
                  top: CARD_HEIGHT + top * 2.2, // top * 2.2 is the height of the back button
                },
              ]}
            >
              <Text
                style={[styles.contentTextStyle, { color: colors.lightText }]}
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

const styles = StyleSheet.create({
  mainContainer: {
    position: "absolute",
    borderRadius: BORDER_RADIUS,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,
  },
  contentContainer: {
    position: "absolute",
    width: "100%",
    flexDirection: "row",
    alignSelf: "center",
    minWidth: SCREEN_WIDTH,
    paddingHorizontal: PADDING,
  },
  contentTextStyle: {
    fontSize: 14,
    fontWeight: "400",
    color: "#070706",
    fontFamily: "poppinsRegular",
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 10,
    width: SCREEN_WIDTH - PADDING * 4,
    fontFamily: "bold",
    lineHeight: 21,
  },
});
