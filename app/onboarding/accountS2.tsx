import { useTheme } from '@shopify/restyle';
import React from 'react';
import { Dimensions, ImageBackground, SafeAreaView } from 'react-native';
import { Box, Text } from 'theme';
import { Cta } from '~/components/Global/Cta';
import { LinearGradientA22 } from '~/components/Global/Gradient/LinearGradientA22';
import { useDefaultSettingStore } from '~/stores/defaultSetting';

export default function AccountS2() {

  const { screenHeight, screenWidth } = useDefaultSettingStore()

  return (
      <Box backgroundColor={'primaryBlack'}>
        <ImageBackground
          resizeMode="cover"   
          source={require('../../assets/intro.png')}
          style={{
            position: 'absolute',
            width: screenWidth,
            height: screenHeight,
          }}
        />
        <SafeAreaView>

        </SafeAreaView>
        <Box 
        justifyContent="center" 
        alignItems="center" 
        zIndex={2} 
        padding="m_20"
        elevation={2}>
          <Text
            marginTop={'m_12'}
            color="primaryWhite"
            variant={'display_xl_medium'}
            style={{
              width: screenWidth * 0.9,
            }}>
            {'To personalize your\nexperience and\nconnect you to sport,\n w\'ve got a few\nquestions for you.'}
          </Text>
        </Box>
          <Box 
          zIndex={2} 
          elevation={2}
          position={'absolute'}
          bottom={0}
          left={"50%"}
          style={{
            transform: [{
              translateX: "-50%"
            }]
          }}
          >
            <Cta backGroundColor='primaryWhite' width={190} borderColor='primaryWhite'>Get Started</Cta>
          </Box>
          <LinearGradientA22 indexZ={1} />
      </Box>
  );
}
