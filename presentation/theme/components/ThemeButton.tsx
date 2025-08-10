import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";
import { useThemeColor } from "../hooks/useThemeColor";

interface Props extends PressableProps {
  children: string;
  icon?: keyof typeof Ionicons.glyphMap;
}

const ThemeButton = ({ children, icon, ...rest }: Props) => {
  const colorPrimary = useThemeColor({}, "primary");

  return (
    <Pressable {...rest} style={({pressed})=>[
        {
            backgroundColor: pressed?colorPrimary+'90':colorPrimary
        },
        styles.button
    ]}>
      <Text style={{color:'white'}}>{children}</Text>
      {icon && <Ionicons name={icon} size={24} color='white' style={{marginHorizontal: 5}} />}
    </Pressable>
  );
};

export default ThemeButton;

export const styles = StyleSheet.create({
    button:{
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    }
})
