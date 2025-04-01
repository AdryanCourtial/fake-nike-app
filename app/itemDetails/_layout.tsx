import { Stack } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Layout() {

  const insets = useSafeAreaInsets();

  return (
          <Stack screenOptions={{
            headerShown: false,
            contentStyle: {
              paddingTop: insets.top,
            },
            autoHideHomeIndicator: false
          }} >

            <Stack.Screen name='modalSize' options={{
              presentation: "transparentModal",
              animation: "none"
            }} />
          </Stack>
    );
}
