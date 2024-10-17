'use client';

import { styled, H1 as TamaguiH1, H2 as TamaguiH2, H3 as TamaguiH3, H4 as TamaguiH4, H5 as TamaguiH5 } from 'tamagui';

export const H1 = styled(TamaguiH1, {
  name: 'h1',
  fontFamily: '$bold',
  color: '$textPrimary',
  unstyled: true,
  fontSize: 44,
  lineHeight: '115%',
  $mobile: {
    fontSize: 32,
  },
});

export const H2 = styled(TamaguiH2, {
  name: 'h2',
  fontFamily: '$bold',
  color: '$textPrimary',
  unstyled: true,
  lineHeight: '115%',
  fontSize: 28,
  $mobile: {
    fontSize: 26,
  },
});

export const H3 = styled(TamaguiH3, {
  name: 'h3',
  fontFamily: '$bold',
  color: '$textPrimary',
  unstyled: true,
  lineHeight: '120%',
  fontSize: 22,
  $mobile: {
    fontSize: 18,
  },
});

export const H4 = styled(TamaguiH4, {
  name: 'h4',
  fontFamily: '$bold',
  color: '$textPrimary',
  unstyled: true,
  lineHeight: '125%',
  fontSize: 20,
  $mobile: {
    fontSize: 18,
  },
});

export const H5 = styled(TamaguiH5, {
  name: 'h5',
  fontFamily: '$bold',
  color: '$textPrimary',
  unstyled: true,
  lineHeight: '125%',
  fontSize: 18,
  $mobile: {
    fontSize: 17,
  },
});
