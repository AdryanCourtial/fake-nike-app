import { createTheme, useTheme as useRestyleTheme } from '@shopify/restyle';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

export const palette = {
  primaryWhite: '#FFFFFF',
  primaryBlack: '#000000',
  grey100: '#F6F6F6',
  grey200: '#E4E4E4',
  grey300: '#CDCDCD',
  grey400: '#BABABA',
  grey500: '#8C8C8C',
  grey600: '#767676',
  grey700: '#57595B',
  grey800: '#1F1F1F',
  error100: '#F8E2DD',
  error200: '#EDB7AA',
  error300: '#E79A88',
  error400: '#DC6E57',
  error500: '#CA462A',
  error600: '#99351F',
  error700: '#662415',
  error800: '#44180E',
  succes100: '#CFF2D8',
  succes200: '#9DE5B0',
  succes300: '#6ED989',
  succes400: '#35C75A',
  succes500: '#2AA147',
  succes600: '#32862B',
  succes700: '#19612B',
  succes800: '#11401D',
  warning100: '#FFE1C8',
  warning200: '#FFBF8C',
  warning300: '#FF9E4F',
  warning400: '#FF821D',
  warning500: '#FC5100',
  warning600: '#D94601',
  warning700: '#A33501',
  warning800: '#622001',
};

const theme = createTheme({
  breakpoints: {
    phone: 0,
    tablet: 768,
    largeScreen: 1024,
  },
  colors: {
    ...palette,
  },
  gradient: {},
  spacing: {
    none: 0,
    xs_2: 2,
    xs_4: 4,
    s_6: 6,
    sm_8: 8,
    m_12: 12,
    m_16: 16,
    m_18: 18,
    m_20: 20,
    ml_24: 24,
    ml_28: 28,
    l_32: 32,
    l_35: 35,
    l_40: 40,
    l_48: 48,
    l_51: 51,
    xl_64: 64,
  },
  borderRadii: {
    s_3: 3,
    m_6: 6,
    m_8: 8,
    l_12: 12,
    xl_24: 24,
    xxxl_48: 48,
    xxxl_100: 100,
  },
  textSize: {
    fs_10: 10,
    fs_12: 12,
    fs_14: 14,
    fs_16: 16,
    fs_20: 20,
    fs_24: 24,
    fs_28: 28,
    fs_32: 32,
  },
  textHeight: {
    fw_100: 100,
    fw_120: 120,
    fw_110: 110,
    fw_150: 150,
  },
  dropShadowVariant: {
    xs: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 3,
    },
    xm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 3,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 3,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 16 },
      shadowOpacity: 0.08,
      shadowRadius: 8,
      elevation: 3,
    },
    xl: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 24 },
      shadowOpacity: 0.08,
      shadowRadius: 24,
      elevation: 3,
    },
    xxl: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 24 },
      shadowOpacity: 0.18,
      shadowRadius: 48,
      elevation: 3,
    },
    xxxl: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 32 },
      shadowOpacity: 0.14,
      shadowRadius: 64,
      elevation: 3,
    },
  },
  textVariants: {
    xs_regular: {
      fontSize: 12,
      fontFamily: 'HelveticaNowText-Regular',
    },
    xs_bold: {
      fontSize: 12,
      fontFamily: 'HelveticaNowText-Bold',
    },
    xs_black: {
      fontSize: 12,
      fontFamily: 'HelveticaNowText-Black',
    },
    display_xl_medium: {
      fontSize: 28,
      fontFamily: "HelveticaNowText-Medium",
      lineHeight: 35
    },
    display_xxl_medium: {
      fontSize: 32,
      fontFamily: "HelveticaNowText-Medium",
      lineHeight: 35
    },
    lg_regular: {
      fontSize: 16,
      fontFamily: 'HelveticaNowText-Regular',
    },
    xxl_regular: {
      fontSize: 16,
      fontFamily: 'HelveticaNowText-Regular',
    },
    xl_medium: {
      fontSize: 16,
      fontFamily: 'HelveticaNowText-Medium',
    },
    xxl_medium: {
      fontSize: 16,
      fontFamily: 'HelveticaNowText-Medium',
    },
    md_bold: {
      fontSize: 14,
      fontFamily: 'HelveticaNowText-Bold',
    },
    body: {
      fontSize: 16,
      fontFamily: 'HelveticaNowText-Black',
    },
    title: { fontSize: 20, fontWeight: 'bold', fontFamily: 'HelveticaNowText-Regular' },
    large: {
      fontSize: 36,
      fontFamily: 'HelveticaNowText-Regular',
    },
    extra_large: {
      fontSize: 64,
      fontWeight: 'bold',
      fontFamily: 'HelveticaNowText-Regular',
    },
    defaults: {
      fontFamily: 'HelveticaNowText-Regular',
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
export type TextVariants = keyof Theme['textVariants'];
export type ColorVariants = keyof Theme['colors'];
export type SpacingVariants = keyof Theme['spacing'];

export default theme;
