import { router } from 'expo-router';
import React from 'react';
import { Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { Box, Text, useTheme } from 'theme';

import LogoScreen from '~/components/logocomponents';

const SignUpScreen = () => {
  const theme = useTheme();

  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;

  return (
    <Box flex={1}>
      <ImageBackground
        source={require('../assets/nike-woman-run.png')}
        style={{ flex: 1, width: screenWidth, height: screenHeight }}
        resizeMode="cover">
        <Box flex={1} justifyContent="center">
          <LogoScreen width={132} height={47} />
          <Text
            fontSize={theme.textSize.fs_28}
            variant="title"
            color="primaryWhite"
            textAlign="left"
            marginBottom="ml_28">
            Nike App
          </Text>
          <Text
            fontSize={theme.textSize.fs_28}
            variant="body"
            color="primaryWhite"
            textAlign="left"
            marginBottom="l_32">
            Bringing Nike Members the best products, inspiration, and stories in sport.
          </Text>
          <Box
            height={51}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            width={327}
            marginBottom="l_32">
            <TouchableOpacity onPress={() => router.push('/onboarding')}>
              <Box
                borderRadius="xxxl_100"
                width={157}
                backgroundColor="primaryWhite"
                paddingVertical="m_16"
                paddingHorizontal="l_51">
                <Text textAlign="center" color="primaryBlack" fontSize={theme.textSize.fs_16}>
                  Join Us
                </Text>
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/onboarding')}>
              <Box
                borderRadius="xxxl_100"
                borderColor="primaryWhite"
                borderWidth={2}
                width={157}
                paddingVertical="m_16"
                paddingHorizontal="l_51">
                <Text textAlign="center" color="primaryWhite" fontSize={theme.textSize.fs_16}>
                  Sign In
                </Text>
              </Box>
            </TouchableOpacity>
          </Box>
        </Box>
      </ImageBackground>
    </Box>
  );
};

export default SignUpScreen;
