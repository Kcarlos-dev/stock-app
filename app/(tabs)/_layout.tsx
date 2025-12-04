import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';

export default function TabLayout() {
  //const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary.tint,
        tabBarInactiveTintColor: Colors.primary.background,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.primary.backgroundSecondary,
          paddingTop: 10
        },
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'pedidos',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
 
      />
      <Tabs.Screen
          name="add_item"
          options={{
            title: 'adicionar',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="plus.circle" color={color} />,
          }}
        />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="gearshape.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
