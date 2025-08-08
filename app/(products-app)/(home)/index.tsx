import { ThemedText } from "@/presentation/theme/components/ThemedText";
import { useThemeColor } from "@/presentation/theme/hooks/useThemeColor";
import React from "react";
import { View } from "react-native";

const HomeScreen = () => {
  const colorPrimary = useThemeColor({},'primary')
  return (
    <View style={{ paddingTop:100,paddingHorizontal:20 }}>
      <ThemedText
        style={{
          color:colorPrimary,
          fontFamily: "kanitBold",
        }}
      >
        HomeScreen
      </ThemedText>
    </View>
  );
};

export default HomeScreen;
