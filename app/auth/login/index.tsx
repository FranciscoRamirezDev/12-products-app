import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import ThemeButton from "@/presentation/theme/components/ThemeButton";
import { ThemedText } from "@/presentation/theme/components/ThemedText";
import ThemeLink from "@/presentation/theme/components/ThemeLink";
import ThemeTextInput from "@/presentation/theme/components/ThemeTextInput";
import { useThemeColor } from "@/presentation/theme/hooks/useThemeColor";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, KeyboardAvoidingView, ScrollView, useWindowDimensions, View } from "react-native";
const LoginScreen = () => {

  const { login } = useAuthStore();

  const { height } = useWindowDimensions();
  const colorBackground = useThemeColor({},'background');
  const [isPosting, setIsPosting] = useState(false)

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const onLogin = async () =>{
    const { email, password } = form;
    
    if (email.length===0||password.length===0) {
      /* return Platform.OS==='ios'?
        Alert.alert('Aviso','Ingresa algún valor')
      : ToastAndroid.show('Ingresa algún valor',1000) */
      return;
    }
    setIsPosting(true);

    const wasSucessful = await login(email, password);

    setIsPosting(false);

    if (wasSucessful===true) {
      router.replace('/(products-app)/(home)')
      return;
    }

    Alert.alert('Error','Usuario ó contraseña no son correctos');

  }

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
            Ingresar
          </ThemedText>
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
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <ThemeTextInput
            placeholder="Contraseña"
            secureTextEntry
            autoCapitalize="none"
            icon="lock-closed-outline"
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
        </View>
        {/* spacer */}
        <View style={{ margin: 10 }} />
        {/* buttons */}
        <ThemeButton icon="arrow-forward-outline" onPress={onLogin} disabled={isPosting}>Ingresar</ThemeButton>
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
          <ThemedText>¿No tienes cuenta?</ThemedText>
          <ThemeLink href="/auth/register" style={{ marginHorizontal: 5 }}>
            Crear cuenta
          </ThemeLink>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default LoginScreen;
