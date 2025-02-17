import { createTheme, useTheme as useRestyleTheme } from '@shopify/restyle';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

const palette = {
  primaryWhite: '#FFFFFF',
  primaryBlack: '#000000',
  grey100: '',
  grey200: '',
  grey300: '',
  grey400: '',
  grey500: '',
  grey600: '',
  grey700: '',
  grey800: '',
  grey900: '',
  error100: '',
  error200: '',
  error300: '',
  error400: '',
  error500: '',
  error600: '',
  error700: '',
  error800: '',
  error900: '',
  succes100: '',
  succes200: '',
  succes300: '',
  succes400: '',
  succes500: '',
  succes600: '',
  succes700: '',
  succes800: '',
  succes900: '',
  warning100: '',
  warning200: '',
  warning300: '',
  warning400: '',
  warning500: '',
  warning600: '',
  warning700: '',
  warning800: '',
  warning900: '',
};

const theme = createTheme({
  colors: {
    ...palette,
  },
  gradient: {
    
  },
  spacing: {
    xs_4: 4,
    s_6: 6,
    sm_8: 8,
    m_16: 16,
    ml_24: 24,
    ml_28: 28,
    l_32: 32,
    xl_64: 64,
  },
  borderRadii: {
    s_3: 3,
    m_6: 6,
    l_12: 12,
    xl_24: 24,
  },
  textVariants: {
    body: {
      fontSize: 16,
    },
    title: { fontSize: 20, fontWeight: 'bold' },
    large: {
      fontSize: 36,
    },
    extra_large: {
      fontSize: 64,
      fontWeight: 'bold',
    },
    defaults: {
      // We can define a default text variant here.
    },
  },
});

export const useTheme = () => {
  return useRestyleTheme<Theme>();
};

export const makeStyles = <T extends NamedStyles<T> | NamedStyles<unknown>>(
  styles: (theme: Theme) => T
) => {
  return () => {
    return styles(theme);
  };
};

export type Theme = typeof theme;
export default theme;
