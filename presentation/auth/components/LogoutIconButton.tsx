import { useThemeColor } from '@/presentation/theme/hooks/useThemeColor';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useAuthStore } from '../store/useAuthStore';

const LogoutIconButton = () => {

    const colorPrimary = useThemeColor({},'primary');
    const { logout } = useAuthStore();
  return (
    <TouchableOpacity
        style={{
            marginRight: 8 
        }}
        onPress={logout}
    >
      <Ionicons name='log-out-outline' size={24} color={colorPrimary}/>
    </TouchableOpacity>
  )
}

export default LogoutIconButton