// app/onboarding/index.tsx
import { Stack } from 'expo-router';
import React from 'react';
import { ScrollView, View } from 'react-native';

import IntroScreen from './intro';
import WelcomeScreen from './welcome';

export default function Onboarding() {
  return (
    <ScrollView
    contentContainerStyle={{ flexGrow: 1 }}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}>
      <Stack.Screen options={{ headerShown: false }} />

      <WelcomeScreen />

      <IntroScreen />

    </ScrollView>
  );
}
