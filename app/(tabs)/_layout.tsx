import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default () => {
  return (
    <Tabs>
      {/* Halaman Login tanpa Tab Navigasi */}
      <Tabs.Screen
        name="login"
        options={{
          tabBarStyle: { display: 'none' }, // Menyembunyikan seluruh tab navigasi di halaman login
          headerShown: false, // Menyembunyikan header jika diperlukan
        }}
      />

      {/* Halaman Input dengan Tab Navigasi */}
      <Tabs.Screen
        name="input"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle" size={size} color={color} />
          ),
        }}
      />

      {/* Halaman Produk dengan Tab Navigasi */}
      <Tabs.Screen
        name="produk"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cube" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};
