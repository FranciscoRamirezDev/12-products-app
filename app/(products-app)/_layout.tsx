import LogoutIconButton from '@/presentation/auth/components/LogoutIconButton';
import { useAuthStore } from '@/presentation/auth/store/useAuthStore';
import { useThemeColor } from '@/presentation/theme/hooks/useThemeColor';
import { Redirect, Stack } from 'expo-router';
import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

const CheckAuthenticationAppLayout = () => {
    const { status, checkStatus } = useAuthStore();
  const colorBackground = useThemeColor({},'background');


    useEffect(() => {
     checkStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
if (status==='checking') {
  
  return (
  <View style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      marginBottom:5
  }}>
      <ActivityIndicator></ActivityIndicator>
  </View>
  );
}

if (status==='unauthenticated') {
  return <Redirect href={'/auth/login'}/>
}

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: colorBackground,
        },
        contentStyle: {
          backgroundColor: colorBackground,
        },
      }}
    >
      <Stack.Screen
        name="(home)/index"
        options={{
          title: "Productos",
          headerLeft: () => <LogoutIconButton/>,
        }}
      />
    </Stack>
  );
}

export default CheckAuthenticationAppLayout