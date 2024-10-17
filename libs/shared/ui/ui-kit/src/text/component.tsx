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
        fontSize: 18,
        lineHeight: '125%',
        $mobile: {
          fontSize: 17,
        },
      },
      bodyDefault: {
        fontSize: 16,
        lineHeight: '150%',
        $mobile: {
          fontSize: 14,
        },
      },
      bodySmall: {
        fontSize: 13,
        lineHeight: '150%',
        $mobile: {
          fontSize: 12,
        },
      },
      bodyExtraSmall: {
        fontSize: 11,
        lineHeight: '155%',
        $mobile: {
          fontSize: 10,
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
