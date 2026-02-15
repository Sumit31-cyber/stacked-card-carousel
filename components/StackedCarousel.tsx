import { DATA } from "@/constants/mockData";
import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import CarouselCard, { CARD_WIDTH } from "./ui/CarouselCard";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const LIST_PADDING = SCREEN_WIDTH - CARD_WIDTH;
const StackedCarousel = () => {
  const scrollX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => (scrollX.value = e.contentOffset.x),
  });
  return (
    <Animated.ScrollView
      horizontal
      onScroll={scrollHandler}
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      decelerationRate={"fast"}
      snapToInterval={CARD_WIDTH}
      contentContainerStyle={{
        width: CARD_WIDTH * DATA.length + LIST_PADDING,
        flexGrow: 0,
        zIndex: 100,
      }}
    >
      {DATA.map((item, index) => {
        return (
          <CarouselCard
            key={item.id}
            index={index}
            item={item}
            scrollX={scrollX}
          />
        );
      })}
    </Animated.ScrollView>
  );
};

export default StackedCarousel;

const styles = StyleSheet.create({});
