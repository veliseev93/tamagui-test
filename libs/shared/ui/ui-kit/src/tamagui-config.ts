'use client';

import { createAnimations } from '@tamagui/animations-moti';
import { config as defaultConfig } from '@tamagui/config/v3';
import { createTamagui } from '@tamagui/core';
import { createFont } from 'tamagui';

const fontSizes = {
  h1: 44,
  h1Mobile: 32,
  h2: 28,
  h2Mobile: 26,
  h3: 22,
  h3Mobile: 18,
  h4: 20,
  h4Mobile: 18,
  h5: 18,
  h5Mobile: 17,
  default: 16,
  defaultMobile: 14,
  small: 13,
  smallMobile: 12,
  extraSmall: 11,
  extraSmallMobile: 10,
};

const lineHeights = {
  h1: 50.6,
  h1Mobile: 36.8,
  h2: 32.2,
  h2Mobile: 29.9,
  h3: 26.4,
  h3Mobile: 21.6,
  h4: 25,
  h4Mobile: 20.7,
  h5: 22.5,
  h5Mobile: 22.5,
  default: 24,
  defaultMobile: 21,
  small: 19.5,
  smallMobile: 18,
  extraSmall: 17,
  extraSmallMobile: 15.5,
};

const zonaProBold = createFont({
  family: 'ZonaPro Bold',
  size: {
    ...defaultConfig.fonts.body.size,
    ...fontSizes,
  },
  lineHeight: lineHeights,
  weight: {
    1: '700',
  },
  letterSpacing: {
    1: 0,
    2: -1,
    // 3 will be -1
  },
  // (native only) swaps out fonts by face/style
});

const zonaProRegular = createFont({
  family: 'ZonaPro Regular',
  size: {
    ...defaultConfig.fonts.body.size,
    ...fontSizes,
  },
  lineHeight: lineHeights,
});

const lightTheme = {
  brandPrimary: '#167BF1',
  brandPrimaryHover: '#3391FE',
  brandPrimaryPressed: '#126EDA',
  brandPrimaryTransparent: '#167BF166',
  brandPrimaryTransparentHover: '#3391FE',
  brandSecondary: '#CA45F9',
  textPrimary: '#181818',
  textSecondary: '#93989C',
  textTertiary: '#E2E5E9',
  textForeground: '#FFFFFF',
  backgroundPrimary: '#FFFFFF',
  backgroundSecondary: '#F7F8FA',
  backgroundTertiary: '#ECEEF0',
  danger: '#E71D32',
};

export const tamaguiConfig = createTamagui({
  tokens: {
    space: defaultConfig.tokens.space,
    radius: {},
    zIndex: {},
    color: {},
    size: {
      ...defaultConfig.tokens.size,
      regular: 48,
      small: 32,
    },
  },
  fonts: {
    bold: zonaProBold,
    regular: zonaProRegular,
  },
  themes: {
    light: lightTheme,
    dark: {
      ...lightTheme,
      textPrimary: '#FFFFFF',
      textSecondary: '#A1A9B4',
      textTertiary: '#485056',
      backgroundPrimary: '#222526',
      backgroundSecondary: '#32393C',
      backgroundTertiary: '#2C3035',
    },
  },
  media: {
    mobile: { maxWidth: 767 },
  },
  animations: createAnimations({
    fast: {
      type: 'spring',
      damping: 20,
      mass: 1.2,
      stiffness: 250,
    },
    medium: {
      type: 'spring',
      damping: 10,
      mass: 0.9,
      stiffness: 100,
    },
    slow: {
      type: 'spring',
      damping: 20,
      stiffness: 60,
    },
  }),
});

type Conf = typeof tamaguiConfig;
declare module '@tamagui/core' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface TamaguiCustomConfig extends Conf {}
}

export type ITamaguiComponentsConfig = typeof tamaguiConfig;
