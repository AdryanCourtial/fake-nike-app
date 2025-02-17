import { ThemeProvider } from '@shopify/restyle';
import { Stack } from 'expo-router';
import { theme } from 'theme';
import HeaderMain from '~/components/Global/Header';

export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <HeaderMain></HeaderMain>
      <Stack />
    </ThemeProvider>
  );
}
