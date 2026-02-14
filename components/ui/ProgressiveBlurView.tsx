import MaskedView from "@react-native-masked-view/masked-view";
import { BlurView } from "expo-blur";
// import { BlurView } from "@react-native-community/blur";

import { LinearGradient } from "expo-linear-gradient";
import {
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
  style,
}: {
  height: number;
  style?: StyleProp<ViewStyle>;
}) {
  const { width } = useWindowDimensions();
  // const { theme, colors: themeColor } = useAppTheme();
  // PARALLAX SCROLL

  // LINEAR GRADIENT
  const { colors, locations } = easeGradient({
    colorStops: {
      0: { color: "rgba(36, 36, 36,0.1)" },
      0.4: { color: "rgba(36, 36, 36,0.95)" },
      1: { color: "rgba(36, 36, 36)" },
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
                // transform: [{ scale: -1 }],
                top: 0,
                // backgroundColor: "red",
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
                  intensity={10}
                  tint="dark"
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
