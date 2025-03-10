// app/onboarding/index.tsx
import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';

import IntroScreen from './intro';
import WelcomeScreen from './welcome';

import ProgressBar from '~/components/Global/ProgressBar';

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const pageWidth = event.nativeEvent.layoutMeasurement.width;

    const index = Math.floor(contentOffsetX / pageWidth);
    setCurrentIndex(index);
  };

  return (
    <View style={{ flex: 1 }}>
      <ProgressBar currentValue={currentIndex} maxValue={2} />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={5}>
        <Stack.Screen options={{ headerShown: false }} />
        <WelcomeScreen />
        <IntroScreen />
      </ScrollView>
    </View>
  );
}
