import { ThemeProvider } from '@shopify/restyle';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { Box, Text, theme } from 'theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


SplashScreen.preventAutoHideAsync();

export default function Layout() {

  const router = useRouter()
  const insets = useSafeAreaInsets();

  return (
          <Stack screenOptions={{
            headerShown: false,
            contentStyle: {
              paddingTop: insets.top,
            },
            autoHideHomeIndicator: false
          }} />
    );
}
