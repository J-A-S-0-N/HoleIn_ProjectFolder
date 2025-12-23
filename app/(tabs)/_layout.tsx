import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useColorScheme } from '@/hooks/use-color-scheme';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { moderateScale } from 'react-native-size-matters';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#00B277",
        headerShown: false,
        tabBarButton: HapticTab,
        // tab bar style
        tabBarStyle: {
          backgroundColor: "#18181B",
          borderTopColor: "transparent",
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '홈',
          tabBarIcon: ({ color }) => <IconSymbol size={moderateScale(28)} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: '스코어 기록',
          tabBarIcon: ({ color }) => 
            <MaterialCommunityIcons name="clipboard-text-multiple-outline" size={moderateScale(24)} color={color} />,
        }}
      />
    </Tabs>
  );
}
