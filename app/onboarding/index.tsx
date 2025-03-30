import { Stack, useRouter } from 'expo-router';
import React, { Component, useEffect, useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import AccountS1 from './accountS1';
import AccountS2 from './accountS2';
import AccountS3 from './accountS3';
import AccountS4 from './accountS4';
import AccountS5 from './accountS5';
import AccountS6 from './accountS6';
import WelcomeScreen from './welcome';

import ProgressBar from '~/components/Global/ProgressBar';
import { useStorage } from '~/core/storage';
import { Box } from '~/theme';

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const [onBoarding, setOnboarding] = useStorage('onBoarding');

  useEffect(() => {
    if (onBoarding === null) return;

    console.log(currentIndex);

    if (currentIndex === 6) {
      setOnboarding('true');
    }
  }, [onBoarding, currentIndex]);

  useEffect(() => {
    if (onBoarding === 'true') {
      router.push('/home');
    }
  }, [onBoarding]);

  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const pageWidth = event.nativeEvent.layoutMeasurement.width;

    const index = Math.floor(contentOffsetX / pageWidth);
    setCurrentIndex(index);
  };

  const ShowAccountSetup = [
    <AccountS1 key={0} />,
    <AccountS2 key={1} />,
    <AccountS3 key={2} />,
    <AccountS4 key={3} />,
    <AccountS5 key={4} />,
    <AccountS6 key={5} />,
  ];

  return (
    <Box flex={1} backgroundColor="primaryBlack">
      <Box backgroundColor="primaryBlack">
        <SafeAreaView>
          <Box justifyContent="center" alignItems="center" height={40}>
            {currentIndex !== 0 ? (
              <ProgressBar currentValue={currentIndex} maxValue={ShowAccountSetup.length} />
            ) : null}
          </Box>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}>
            <Stack.Screen options={{ headerShown: false }} />

            <WelcomeScreen />

            {ShowAccountSetup.map((item) => item)}
          </ScrollView>
        </SafeAreaView>
      </Box>
    </Box>
  );
}
