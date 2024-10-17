'use client';

import { styled, Text } from 'tamagui';

export const AppText = styled(Text, {
  name: 'AppText',
  fontFamily: '$regular',
  tag: 'p',
  color: '$textPrimary',
  unstyled: true,
  variants: {
    type: {
      bodyLarge: {
        lineHeight: 22.5,
        fontSize: 18,
        $mobile: {
          fontSize: 17,
          lineHeight: 21.25,
        },
      },
      bodyDefault: {
        fontSize: 16,
        lineHeight: 24,
        $mobile: {
          fontSize: 14,
          lineHeight: 21,
        },
      },
      bodySmall: {
        fontSize: 13,
        lineHeight: 19.5,
        $mobile: {
          fontSize: 12,
          lineHeight: 18,
        },
      },
      bodyExtraSmall: {
        fontSize: 11,
        lineHeight: 17,
        $mobile: {
          fontSize: 10,
          lineHeight: 15.5,
        },
      },
    },
    bold: {
      true: {
        fontFamily: '$bold',
      } as const,
    },
  },
});
