'use client';

import { styled, H1 as TamaguiH1, H2 as TamaguiH2, H3 as TamaguiH3, H4 as TamaguiH4, H5 as TamaguiH5 } from 'tamagui';

export const H1 = styled(TamaguiH1, {
  name: 'h1',
  fontFamily: '$bold',
  color: '$textPrimary',
  unstyled: true,
  fontSize: 44,
  lineHeight: 50.6,
  $mobile: {
    fontSize: 32,
    lineHeight: 36.8,
  },
});

export const H2 = styled(TamaguiH2, {
  name: 'h2',
  fontFamily: '$bold',
  color: '$textPrimary',
  unstyled: true,
  lineHeight: 32.2,
  fontSize: 28,
  $mobile: {
    fontSize: 26,
    lineHeight: 29.9,
  },
});

export const H3 = styled(TamaguiH3, {
  name: 'h3',
  fontFamily: '$bold',
  color: '$textPrimary',
  unstyled: true,
  lineHeight: 26.4,
  fontSize: 22,
  $mobile: {
    fontSize: 18,
    lineHeight: 21.6,
  },
});

export const H4 = styled(TamaguiH4, {
  name: 'h4',
  fontFamily: '$bold',
  color: '$textPrimary',
  unstyled: true,
  lineHeight: 25,
  fontSize: 20,
  $mobile: {
    fontSize: 18,
    lineHeight: 20.7,
  },
});

export const H5 = styled(TamaguiH5, {
  name: 'h5',
  fontFamily: '$bold',
  color: '$textPrimary',
  unstyled: true,
  lineHeight: 22.5,
  fontSize: 18,
  $mobile: {
    fontSize: 17,
    lineHeight: 21.25,
  },
});
