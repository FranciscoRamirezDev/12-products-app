import ThemeButton from "@/presentation/theme/components/ThemedButton";
import ThemeLink from "@/presentation/theme/components/ThemedLink";
import { ThemedText } from "@/presentation/theme/components/ThemedText";
import ThemeTextInput from "@/presentation/theme/components/ThemedTextInput";
import { useThemeColor } from "@/presentation/theme/hooks/useThemeColor";
import {
  KeyboardAvoidingView,
  ScrollView,
  useWindowDimensions,
  View,
} from "react-native";
const RegisterScreen = () => {
  const { height } = useWindowDimensions();
  const colorBackground = useThemeColor({}, "background");
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{
        flex: 1,
      }}
    >
      <ScrollView
        style={{ paddingHorizontal: 40, backgroundColor: colorBackground }}
      >
        {/* header */}
        <View style={{ paddingTop: height * 0.35 }}>
          <ThemedText type="title" style={{ paddingBottom: 5 }}>
            Crear cuenta
          </ThemedText>
          <ThemedText style={{ color: "grey" }}>
            Porfavor crea una cuenta para continuar
          </ThemedText>
        </View>
        {/* email and password */}
        <View style={{ marginTop: 20 }}>
          <ThemeTextInput
            placeholder="Nombre completo"
            keyboardType="default"
            autoCapitalize="words"
            icon="person-outline"
          />
          <ThemeTextInput
            placeholder="Correo electronico"
            keyboardType="email-address"
            autoCapitalize="none"
            icon="mail-outline"
          />
          <ThemeTextInput
            placeholder="Contraseña"
            secureTextEntry
            autoCapitalize="none"
            icon="lock-closed-outline"
          />
        </View>
        {/* spacer */}
        <View style={{ margin: 10 }} />
        {/* buttons */}
        <ThemeButton icon="arrow-forward-outline">Crear cuenta</ThemeButton>
        {/* spacer */}
        <View
          style={{ marginTop: 20, borderWidth: 0.3, borderColor: "#ccc" }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <ThemedText>¿Ya tienes cuenta?</ThemedText>
          <ThemeLink href="/auth/login" style={{ marginHorizontal: 5 }}>
            Ingresar
          </ThemeLink>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default RegisterScreen;
