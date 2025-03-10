import { Stack, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import AccountS2 from './accountS2';
import AccountS3 from './accountS3';
import AccountS4 from './accountS4';
import AccountS5 from './accountS5';
import AccountS6 from './accountS6';
import WelcomeScreen from './welcome';

import ProgressBar from '~/components/Global/ProgressBar';
import { Box } from '~/theme';

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const pageWidth = event.nativeEvent.layoutMeasurement.width;

    const index = Math.floor(contentOffsetX / pageWidth);
    setCurrentIndex(index);

    if (index === 5) {
      router.push('/home');
    }
  };

  return (
    <Box>
      <ProgressBar currentValue={currentIndex + 1} maxValue={6} />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={5}>
        <Stack.Screen options={{ headerShown: false }} />
        <WelcomeScreen />
        <AccountS2 />
        <AccountS3 />
        <AccountS4 />
        <AccountS5 />
        <AccountS6 />
      </ScrollView>
    </Box>
  );
}
