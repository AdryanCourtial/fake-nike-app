import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Cta } from '~/components/Global/Cta';
import { useDefaultSettingStore } from '~/stores/defaultSetting';
import { Box, Text } from '~/theme';

export default function AccountS3() {
  const { screenHeight, screenWidth } = useDefaultSettingStore();
  const insets = useSafeAreaInsets()

  return (
    <Box 
    flex={1} 
    height={screenHeight}
    width={screenWidth}
    padding={'m_16'}
    >
      <Text 
      margin={'m_12'}
      variant={'display_xxl_medium'} 
      color={'primaryWhite'}
      >
        Stay in the know with notifications about First Access to product, invites to experiences, personalized offers, and order updated.
      </Text>
      <Box 
      zIndex={2} 
      elevation={2}
      position={'absolute'}
      bottom={100 + insets.bottom}
      width={screenWidth}
      justifyContent={'center'}
      alignItems={'center'}
      >
        <Cta
        backGroundColor={"primaryWhite"} 
        width={190} 
        textColor={"primaryBlack"}
        borderColor={"primaryWhite"}>Next</Cta>
      </Box>

    </Box>
  );
}
