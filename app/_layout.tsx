import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useEffect } from 'react';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import 'react-native-reanimated';

import { useColorScheme } from '@/presentation/theme/hooks/useColorScheme';
import { useThemeColor } from '@/presentation/theme/hooks/useThemeColor';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const colorBackground = useThemeColor({}, "background");

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    kanitRegular: require("@/assets/fonts/Kanit-Regular.ttf"),
    kanitThin: require("@/assets/fonts/Kanit-Thin.ttf"),
    kanitBold: require("@/assets/fonts/Kanit-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{flex: 1, backgroundColor:colorBackground}}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack
          screenOptions={{
            headerShown: false,
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: colorBackground,
            },
            contentStyle: {
              backgroundColor: colorBackground,
            },
          }}
        >
          {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" /> */}
        </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
