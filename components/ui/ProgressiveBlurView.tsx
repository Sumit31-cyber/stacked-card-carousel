import { useAppTheme } from "@/hooks/useAppTheme";
import MaskedView from "@react-native-masked-view/masked-view";
import { BlurTint, BlurView } from "expo-blur";

import { LinearGradient } from "expo-linear-gradient";
import {
  DimensionValue,
  Platform,
  StyleProp,
  StyleSheet,
  useWindowDimensions,
  View,
  ViewStyle,
} from "react-native";
import { easeGradient } from "react-native-easing-gradient";

export default function ProgressiveBlurView({
  height,
  intensity = 30,
  style,
  tint = "light",
}: {
  height: DimensionValue;
  intensity?: number;
  style?: StyleProp<ViewStyle>;
  tint?: BlurTint;
}) {
  const { width } = useWindowDimensions();
  const { theme } = useAppTheme();

  const { colors, locations } = easeGradient({
    colorStops: !theme.dark
      ? {
          0: { color: "rgba(247, 246, 244, 0.0)" },
          0.15: { color: "rgba(247, 246, 244, 0.2)" },
          0.35: { color: "rgba(247, 246, 244, 0.5)" },
          0.6: { color: "rgba(247, 246, 244, 0.75)" },
          0.8: { color: "rgba(247, 246, 244, 0.9)" },
          1: { color: "rgba(247, 246, 244, 1)" },
        }
      : {
          0: { color: "rgba(19, 21, 23, 0.0)" },
          0.15: { color: "rgba(19, 21, 23, 0.2)" },
          0.35: { color: "rgba(19, 21, 23, 0.5)" },
          0.6: { color: "rgba(19, 21, 23, 0.75)" },
          0.8: { color: "rgba(19, 21, 23, 0.92)" },
          1: { color: "rgba(19, 21, 23, 1)" },
        },
  });
  return (
    <>
      {Platform.select({
        ios: (
          <View
            style={[
              {
                height,
                width: "100%",
                position: "absolute",
                zIndex: 1,
                top: 0,
              },
              style,
            ]}
          >
            <View style={[styles.blurContainer, { width, height }]}>
              <MaskedView
                maskElement={
                  <LinearGradient
                    locations={
                      locations as unknown as readonly [
                        number,
                        number,
                        ...number[],
                      ]
                    }
                    colors={
                      colors as unknown as readonly [
                        string,
                        string,
                        ...string[],
                      ]
                    }
                    style={StyleSheet.absoluteFill}
                  />
                }
                style={[StyleSheet.absoluteFill]}
              >
                <BlurView
                  intensity={intensity}
                  tint={tint}
                  style={[StyleSheet.absoluteFill]}
                />
              </MaskedView>
            </View>
          </View>
        ),
        android: (
          <View
            style={[
              {
                height,
                width: "100%",
                position: "absolute",
                zIndex: 1,
                transform: [{ scale: -1 }],
                top: 0,
                // backgroundColor: "red",
              },
              style,
            ]}
          >
            <View style={[styles.blurContainer, { width, height }]}>
              <LinearGradient
                locations={
                  locations as unknown as readonly [number, number, ...number[]]
                }
                colors={
                  colors as unknown as readonly [string, string, ...string[]]
                }
                style={StyleSheet.absoluteFill}
              />
            </View>
          </View>
        ),
      })}
    </>
  );
}

const styles = StyleSheet.create({
  blurContainer: {
    zIndex: 2,
  },
  linearGradient: {
    bottom: 0,
    position: "absolute",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
});
