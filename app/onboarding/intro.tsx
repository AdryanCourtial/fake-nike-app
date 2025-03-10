import { useTheme } from '@shopify/restyle';
import React from 'react';
import { Dimensions, ImageBackground } from 'react-native';
import { Box, Text } from 'theme';
import { useDefaultSettingStore } from '~/stores/defaultSetting';

export default function IntroScreen() {
  const theme = useTheme();

  const { screenHeight, screenWidth} = useDefaultSettingStore()


  return (
    <Box width={screenWidth}>
      <ImageBackground
        resizeMode="cover"
        source={require('../../assets/intro.png')}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: screenWidth,
          height: screenHeight,
        }}
      />

      <Box justifyContent="center" alignItems="center" zIndex={1} padding="l_32">
        <Text
          fontSize={theme.textSize.fs_18}
          color="primaryWhite"
          textAlign="center"
          marginBottom="ml_28"
          style={{
            width: screenWidth * 0.9,
            flexWrap: 'wrap',
            textAlign: 'center',
          }}>
          To personalize your experience
        </Text>
        <Text
          fontSize={theme.textSize.fs_18}
          color="primaryWhite"
          textAlign="center"
          marginBottom="l_32"
          style={{
            width: screenWidth * 0.9,
            flexWrap: 'wrap',
            textAlign: 'center',
          }}>
          and connect you to sport, we've got a few questions for you.
        </Text>
      </Box>
    </Box>
  );
}
