'use client';

import { styled, H1 as TamaguiH1, H2 as TamaguiH2, H3 as TamaguiH3, H4 as TamaguiH4, H5 as TamaguiH5 } from 'tamagui';

export const H1 = styled(TamaguiH1, {
  name: 'h1',
  fontFamily: '$bold',
  color: '$textPrimary',
  unstyled: true,
  size: '$h1',
  lineHeight: '$h1',
  $mobile: {
    size: '$h1Mobile',
    lineHeight: '$h1Mobile',
  },
});

export const H2 = styled(TamaguiH2, {
  name: 'h2',
  fontFamily: '$bold',
  color: '$textPrimary',
  unstyled: true,
  lineHeight: '$h2',
  size: '$h2',
  $mobile: {
    size: '$h2Mobile',
    lineHeight: '$h2Mobile',
  },
});

export const H3 = styled(TamaguiH3, {
  name: 'h3',
  fontFamily: '$bold',
  color: '$textPrimary',
  unstyled: true,
  lineHeight: '$h3',
  size: '$h3',
  $mobile: {
    size: '$h3Mobile',
    lineHeight: '$h3Mobile',
  },
});

export const H4 = styled(TamaguiH4, {
  name: 'h4',
  fontFamily: '$bold',
  color: '$textPrimary',
  unstyled: true,
  lineHeight: '$h4',
  size: '$h4',
  $mobile: {
    fontSize: '$h4Mobile',
    lineHeight: '$h4Mobile',
  },
});

export const H5 = styled(TamaguiH5, {
  name: 'h5',
  fontFamily: '$bold',
  color: '$textPrimary',
  unstyled: true,
  lineHeight: '$h5',
  fontSize: '$h5',
  $mobile: {
    size: '$h5Mobile',
    lineHeight: '$h5Mobile',
  },
});
