import { DarkTheme, DefaultTheme, Theme } from "@react-navigation/native";

export const Colors = {
  light: {
    ...DefaultTheme.colors,
    backgroundColor: "#e0e1df",
    textColor: "#000000",
    secondaryText: "#4a4a47",
    cardBackground: "#FFFFFF",
  },
  dark: {
    ...DarkTheme.colors,
    backgroundColor: "#131517",
    textColor: "#FFFFFF",
    secondaryText: "#74797c",
    cardBackground: "#080a0c",
  },
};

type AppColors = {
  [K in keyof typeof Colors.light]: string;
};

export interface AppTheme extends Omit<Theme, "colors"> {
  colors: AppColors;
}

export const CustomLightTheme: AppTheme = {
  ...DefaultTheme,
  colors: Colors.light,
};

export const CustomDarkTheme: AppTheme = {
  ...DarkTheme,
  colors: Colors.dark,
};
