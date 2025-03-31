import { ThemeProvider } from '@shopify/restyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { theme } from 'theme';
import 'react-native-reanimated'
import 'react-native-gesture-handler'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const queryClient = new QueryClient();

export default function Layout() {
  const router = useRouter();
  const [loaded, error] = useFonts({
    'HelveticaNowText-Black': require('../assets/fonts/HelveticaNowText-Black.ttf'),
    'HelveticaNowText-BlackItalic': require('../assets/fonts/HelveticaNowText-BlackItalic.ttf'),
    'HelveticaNowText-Bold': require('../assets/fonts/HelveticaNowText-Bold.ttf'),
    'HelveticaNowText-BoldItalic': require('../assets/fonts/HelveticaNowText-BoldItalic.ttf'),
    'HelveticaNowText-ExtBdIta': require('../assets/fonts/HelveticaNowText-ExtBdIta.ttf'),
    'HelveticaNowText-ExtLtIta': require('../assets/fonts/HelveticaNowText-ExtLtIta.ttf'),
    'HelveticaNowText-ExtraBold': require('../assets/fonts/HelveticaNowText-ExtraBold.ttf'),
    'HelveticaNowText-ExtraLight': require('../assets/fonts/HelveticaNowText-ExtraLight.ttf'),
    'HelveticaNowText-Light': require('../assets/fonts/HelveticaNowText-Light.ttf'),
    'HelveticaNowText-LightItalic': require('../assets/fonts/HelveticaNowText-LightItalic.ttf'),
    'HelveticaNowText-Medium': require('../assets/fonts/HelveticaNowText-Medium.ttf'),
    'HelveticaNowText-MediumItalic': require('../assets/fonts/HelveticaNowText-MediumItalic.ttf'),
    'HelveticaNowText-RegIta': require('../assets/fonts/HelveticaNowText-RegIta.ttf'),
    'HelveticaNowText-Regular': require('../assets/fonts/HelveticaNowText-Regular.ttf'),
    'HelveticaNowText-Thin': require('../assets/fonts/HelveticaNowText-Thin.ttf'),
    'HelveticaNowText-ThinItalic': require('../assets/fonts/HelveticaNowText-ThinItalic.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView>
        <QueryClientProvider client={queryClient}>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
        </QueryClientProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
