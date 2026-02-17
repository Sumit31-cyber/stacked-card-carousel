import { useAppTheme } from "@/hooks/useAppTheme";
import {
  BookOpen,
  CirclePlay,
  MessageCircle,
  Sparkle,
  UserRound,
} from "lucide-react-native";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BlurGradient from "./BlurGradient";
import { PADDING } from "./ui/CarouselCard";

const ICON_SIZE = 20;

const AnimatedIcon = ({
  children,
  delay,
  finalScale,
  finalOpacity,
  style,
  isExiting,
}: {
  children: React.ReactNode;
  delay: number;
  finalScale: number;
  finalOpacity: number;
  style?: any;
  isExiting?: boolean;
}) => {
  const { theme } = useAppTheme();
  const scale = useSharedValue(0.7);
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(15);
  const rotate = useSharedValue(-8);
  const floatY = useSharedValue(0);

  useEffect(() => {
    if (isExiting) {
      // Smooth exit animation - fade and scale down elegantly
      scale.value = withDelay(
        delay,
        withSpring(0.6, {
          damping: 18,
          stiffness: 100,
          mass: 0.5,
        }),
      );

      opacity.value = withDelay(
        delay,
        withTiming(0, {
          duration: 450,
          easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        }),
      );

      translateY.value = withDelay(
        delay,
        withSpring(12, {
          damping: 16,
          stiffness: 90,
          mass: 0.6,
        }),
      );

      rotate.value = withDelay(
        delay,
        withSpring(0, {
          damping: 14,
          stiffness: 80,
          mass: 0.4,
        }),
      );
    } else {
      // Entrance animation - more subtle
      scale.value = withDelay(
        delay,
        withSpring(finalScale, {
          damping: 15,
          stiffness: 120,
          mass: 0.6,
        }),
      );

      opacity.value = withDelay(
        delay,
        withTiming(finalOpacity, {
          duration: 500,
          easing: Easing.bezier(0.25, 0.1, 0.25, 1),
        }),
      );

      translateY.value = withDelay(
        delay,
        withSpring(0, {
          damping: 18,
          stiffness: 110,
          mass: 0.8,
        }),
      );

      rotate.value = withDelay(
        delay,
        withSpring(0, {
          damping: 12,
          stiffness: 100,
          mass: 0.4,
        }),
      );

      // Very subtle floating animation
      floatY.value = withDelay(
        delay + 600,
        withRepeat(
          withSequence(
            withTiming(-1.5, {
              duration: 2500,
              easing: Easing.inOut(Easing.ease),
            }),
            withTiming(1.5, {
              duration: 2500,
              easing: Easing.inOut(Easing.ease),
            }),
          ),
          -1,
          true,
        ),
      );
    }
  }, [isExiting]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: translateY.value + floatY.value },
      { scale: scale.value },
      { rotate: `${rotate.value}deg` },
    ],
    opacity: opacity.value,
  }));

  const iconAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: isExiting
          ? 1
          : withRepeat(
              withSequence(
                withTiming(1, { duration: 2000 }),
                withTiming(1.03, {
                  duration: 2000,
                  easing: Easing.inOut(Easing.ease),
                }),
              ),
              -1,
              true,
            ),
      },
    ],
  }));

  return (
    <Animated.View
      style={[
        styles.iconContainer,
        animatedStyle,
        { backgroundColor: theme.dark ? "#525451" : "#949592" },
        style,
      ]}
    >
      <Animated.View style={iconAnimatedStyle}>{children}</Animated.View>
    </Animated.View>
  );
};

const BottomBar = ({ isExiting = false }: { isExiting?: boolean }) => {
  const { bottom } = useSafeAreaInsets();
  const { theme, colors } = useAppTheme();
  const containerOpacity = useSharedValue(0);
  const containerTranslateY = useSharedValue(30);

  useEffect(() => {
    if (isExiting) {
      // Smooth container exit
      containerOpacity.value = withTiming(0, {
        duration: 500,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      });

      containerTranslateY.value = withSpring(25, {
        damping: 20,
        stiffness: 90,
        mass: 0.8,
      });
    } else {
      containerOpacity.value = withTiming(1, {
        duration: 450,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      });

      containerTranslateY.value = withSpring(0, {
        damping: 22,
        stiffness: 100,
        mass: 1,
      });
    }
  }, [isExiting]);

  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: containerOpacity.value,
    transform: [{ translateY: containerTranslateY.value }],
  }));

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        {
          paddingBottom: bottom,
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "100%",
          paddingHorizontal: PADDING,
          alignItems: "flex-end",
          position: "absolute",
          bottom: 0,
          zIndex: 1,
          paddingTop: 20,
        },
        containerAnimatedStyle,
      ]}
    >
      <View style={StyleSheet.absoluteFill}>
        <BlurGradient
          height={"125%"}
          intensity={100}
          tint={theme.dark ? "dark" : "light"}
          style={{ zIndex: -1 }}
        />
      </View>

      {/* Far Left */}
      <AnimatedIcon
        delay={isExiting ? 100 : 180}
        finalScale={0.9}
        finalOpacity={0.75}
        isExiting={isExiting}
      >
        <CirclePlay color="white" size={ICON_SIZE} />
      </AnimatedIcon>

      {/* Near Left */}
      <AnimatedIcon
        delay={isExiting ? 50 : 100}
        finalScale={0.95}
        finalOpacity={0.9}
        isExiting={isExiting}
      >
        <Sparkle color="white" size={ICON_SIZE} />
      </AnimatedIcon>

      {/* Center (FIRST + Strongest) */}
      <AnimatedIcon
        delay={isExiting ? 0 : 0}
        finalScale={1}
        finalOpacity={1}
        style={{ height: 70, backgroundColor: colors.textColor }}
        isExiting={isExiting}
      >
        <BookOpen color={colors.backgroundColor} size={ICON_SIZE} />
      </AnimatedIcon>

      {/* Near Right */}
      <AnimatedIcon
        delay={isExiting ? 50 : 100}
        finalScale={0.95}
        finalOpacity={0.9}
        isExiting={isExiting}
      >
        <MessageCircle color="white" size={ICON_SIZE} />
      </AnimatedIcon>

      {/* Far Right */}
      <AnimatedIcon
        delay={isExiting ? 100 : 180}
        finalScale={0.9}
        finalOpacity={0.75}
        isExiting={isExiting}
      >
        <UserRound color="white" size={ICON_SIZE} />
      </AnimatedIcon>
    </Animated.View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  iconContainer: {
    height: 50,
    aspectRatio: 1,
    borderRadius: 100,

    alignItems: "center",
    justifyContent: "center",
  },
});
