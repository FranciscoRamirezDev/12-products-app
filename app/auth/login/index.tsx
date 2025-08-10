import ThemeButton from "@/presentation/theme/components/ThemeButton";
import { ThemedText } from "@/presentation/theme/components/ThemedText";
import ThemeLink from "@/presentation/theme/components/ThemeLink";
import ThemeTextInput from "@/presentation/theme/components/ThemeTextInput";
import { KeyboardAvoidingView, ScrollView, useWindowDimensions, View } from "react-native";
const LoginScreen = () => {
  const { height } = useWindowDimensions();
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{
        flex: 1,
      }}
    >
      <ScrollView style={{ paddingHorizontal: 40 }}>
        {/* header */}
        <View style={{ paddingTop: height * 0.35 }}>
          <ThemedText type="title">Ingresar</ThemedText>
          <ThemedText style={{ color: "grey" }}>
            Porfavor ingrese para continuar
          </ThemedText>
        </View>
        {/* email and password */}
        <View style={{ marginTop: 20 }}>
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
        <View style={{ margin: 10}} />
        {/* buttons */}
        <ThemeButton icon="arrow-forward-outline">Ingresar</ThemeButton>
        {/* spacer */}
        <View style={{ marginTop: 20, borderWidth: 0.3, borderColor: "#ccc" }} />
        <View
          style={{
            flexDirection:'row',
            justifyContent:'center',
            alignItems: 'center',
            marginTop:10
          }}
        >

        <ThemedText>¿No tienes cuenta?</ThemedText>
        <ThemeLink href="/auth/register" style={{marginHorizontal: 5}}>Crear cuenta</ThemeLink>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default LoginScreen;
