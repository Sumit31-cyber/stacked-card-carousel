import { Author } from "@/constants/mockData";
import { useAppTheme } from "@/hooks/useAppTheme";
import { timeAgo } from "@/utils/utilityFunctions";
import { Plus } from "lucide-react-native";
import React, { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface Props {
  authorDetail: Author;
  created_at: string;
}
const IMAGE_SIZE = 45;
const CardAuthorSection: FC<Props> = ({ authorDetail, created_at }) => {
  const { image_url, name } = authorDetail;
  const { colors } = useAppTheme();
  return (
    <View style={{ flexDirection: "row", gap: 10, marginBottom: 15 }}>
      <View
        style={{
          height: IMAGE_SIZE,
          aspectRatio: 1,
          borderRadius: 50,
          overflow: "hidden",
        }}
      >
        <Image style={{ flex: 1 }} source={{ uri: image_url }} />
      </View>
      <View style={{ justifyContent: "center" }}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "semibold",
            bottom: -1,
            color: colors.textColor,
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: "regular",
            top: -1,
            color: colors.secondaryText,
          }}
        >
          {timeAgo(created_at)}
        </Text>
      </View>
      <View
        style={{
          height: IMAGE_SIZE,
          aspectRatio: 1,
          borderRadius: 100,
          backgroundColor: colors.textColor,
          marginLeft: "auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Plus color={colors.backgroundColor} />
      </View>
    </View>
  );
};

export default CardAuthorSection;

const styles = StyleSheet.create({});
