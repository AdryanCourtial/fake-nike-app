import * as Notifications from 'expo-notifications';
import React, { useEffect } from 'react';

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

  return (
    <Box
      alignContent="center"
      justifyContent="center"
      backgroundColor="primaryBlack"
      height={screenHeight}
      width={screenWidth}>
      <Text color="primaryWhite" variant="display_xl_medium">
        Stay in the know with notifications about First Access to product, invites to experiences,
        personalized offers, and order updates.
      </Text>
    </Box>
  );
}
