import { Stack, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import IntroScreen from './intro';
import WelcomeScreen from './welcome';
import ProgressBar from '~/components/Global/ProgressBar';
import { Box } from '~/theme';
import AccountSetupShoesSize from './account-setup';
import { useStorage } from '~/core/storage';

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
    <Box flex={1} backgroundColor={'primaryBlack'}>
      <Box backgroundColor={'primaryBlack'}>
        <SafeAreaView>
          <Box 
          justifyContent={'center'} 
          alignItems={'center'}
          height={40}
          >
            <ProgressBar currentValue={currentIndex} maxValue={2} />
          </Box>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          >
          <Stack.Screen options={{ headerShown: false }} />

          <WelcomeScreen />

          <IntroScreen />

          <AccountSetupShoesSize />
          
        </ScrollView>
        </SafeAreaView>
      </Box>
    </Box>
  );
}
