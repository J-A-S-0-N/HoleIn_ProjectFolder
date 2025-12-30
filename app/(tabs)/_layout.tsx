import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useColorScheme } from '@/hooks/use-color-scheme';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { moderateScale } from 'react-native-size-matters';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Onboarding from '@/app/onboarding';
import { useEffect, useState } from 'react';
import { USERNAME_STORAGE_KEY } from '@/contexts/UserContext';


export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const username = await AsyncStorage.getItem(USERNAME_STORAGE_KEY);
      //if (!username) router.replace('/onboarding');
      if (!username) {
        setShowModal(true);
      }
    };
    checkUser();
  }, []);

  return (
    <>
      <Onboarding visible={showModal} onClose={() => setShowModal(false)} />
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
    </>
  );
}
