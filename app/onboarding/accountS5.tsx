import * as Notifications from 'expo-notifications';
import React, { useEffect } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Cta } from '~/components/Global/Cta';

import { useDefaultSettingStore } from '~/stores/defaultSetting';
import { Box, Text } from '~/theme';

export default function AccountS5() {
  const { screenHeight, screenWidth } = useDefaultSettingStore();

  // Fonction pour demander les permissions de notification
  const requestNotificationPermission = async () => {
    try {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status === 'granted') {
        console.log('Notification permission granted!');
      } else {
        console.log('Notification permission denied!');
      }
    } catch (error) {
      console.error('Error requesting notification permissions:', error);
    }
  };

  // Demande de permission dès que la page est chargée
  useEffect(() => {
    requestNotificationPermission();
  }, []);

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
        How about Bluetooth? Turning it on will help verify your location in select Nike stores to improve your experience.
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
  )
}
