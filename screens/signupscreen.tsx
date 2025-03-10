import { router } from 'expo-router';
import React from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';
import { Box, Text, useTheme } from 'theme';
import { Cta } from '~/components/Global/Cta';
import { LinearGradientA22 } from '~/components/Global/Gradient/LinearGradientA22';

import LogoScreen from '~/components/logocomponents';
import { useDefaultSettingStore } from '~/stores/defaultSetting';

const SignUpScreen = () => {
  const theme = useTheme();

  const { screenHeight, screenWidth } = useDefaultSettingStore()

  return (
    <Box>
      <ImageBackground
        source={require('../assets/nike-woman-run.png')}
        style={{ flex: 1, width: screenWidth, height: screenHeight }}
        resizeMode="cover">
        <Box 
        padding={'ml_24'}
        position={'absolute'}
        bottom={40}
        width={"100%"}
        zIndex={2}
        >
          <Box
          marginBottom={'l_48'}>
            <LogoScreen width={70} height={40} />
          </Box>
          <Text
            fontSize={theme.textSize.fs_28}
            variant="display_xl_medium"
            color="primaryWhite"
            textAlign="left"
            marginBottom="l_32">
            {'Nike App\nBringing Nike Members\nthe best products, inspiration, and stories\nin sport.'}
          </Text>
          <Box
            flexDirection="row"
            alignItems="center"
            gap={'m_12'}
            >
              <Box flex={1}>
              <Cta backGroundColor='primaryWhite' borderColor='primaryWhite' action={() => router.push('/onboarding')}>Join Us</Cta>
                </Box>
              <Box flex={1}>
                <Cta borderColor='primaryWhite' textColor='primaryWhite' action={() => router.push('/onboarding')}>Sign In</Cta>
              </Box>
          </Box>
        </Box>
      </ImageBackground>
      <LinearGradientA22 indexZ={1} />
    </Box>
  );
};

export default SignUpScreen;
