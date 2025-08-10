import { Ionicons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { useThemeColor } from "../hooks/useThemeColor";

interface Props extends TextInputProps {
  icon?: keyof typeof Ionicons.glyphMap;
}

const ThemeTextInput = ({ icon, ...rest }: Props) => {
  const colorPrimary = useThemeColor({}, "primary");
  const colorText = useThemeColor({}, "text");

  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef<TextInput>(null);

  return (
    <View
      style={{
        ...styles.border,
        //cambiar si tiene el foco
        borderColor: isActive ? colorPrimary : "#ccc",
        backgroundColor: isActive ? "white" : undefined,
      }}
      onTouchStart={() => inputRef.current?.focus}
    >
      {icon && (
        <Ionicons
          name={icon}
          size={24}
          color={isActive ? colorPrimary : "#ccc"}
          style={{ marginRight: 10 }}
        />
      )}
      <TextInput
        ref={inputRef}
        placeholderTextColor="#5c5c5c"
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        style={{
          color: colorText,
          marginRight: 10,
          paddingVertical: 10,
          flex: 1,
        }}
        {...rest}
      />
    </View>
  );
};

export default ThemeTextInput;

const styles = StyleSheet.create({
  border: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
  },
});
