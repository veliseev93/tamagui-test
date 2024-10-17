'use client';

import { Button, styled } from 'tamagui';

export const AppButton = styled(Button, {
  name: 'AppButton',
  unstyled: true,
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: '$bold',
  borderRadius: 26,
  alignSelf: 'flex-start',
  cursor: 'pointer',
  variants: {
    type: {
      primary: {
        backgroundColor: '$brandPrimary',
        color: '$textForeground',
        disabledStyle: {
          backgroundColor: '$backgroundTertiary',
          color: '$textSecondary',
        },
        pressStyle: {
          backgroundColor: '$brandPrimaryPressed',
        },
        hoverStyle: {
          backgroundColor: '$brandPrimaryHover',
        },
      },
      secondary: {
        backgroundColor: '$backgroundPrimary',
        borderColor: '$brandPrimary',
        color: '$brandPrimary',
        borderWidth: 1,
        hoverStyle: {
          borderColor: '$brandPrimaryHover',
          color: '$brandPrimaryHover',
        },
        pressStyle: {
          borderColor: '$brandPrimaryPressed',
          color: '$brandPrimaryHover',
        },
      },
      tertiary: {
        color: '$brandPrimary',
        hoverStyle: {
          color: '$brandPrimaryHover',
        },
        pressStyle: {
          color: '$brandPrimaryPressed',
        },
      },
    },
    size: {
      $default: (_, { font, tokens }) => ({
        fontSize: font?.size['default'],
        lineHeight: 24,
        paddingHorizontal: 45,
        height: tokens.size.$regular,
        $mobile: {
          width: '100%',
        },
      }),
      $small: (_, { font, tokens }) => ({
        fontSize: font?.size['small'],
        height: tokens.size.small,
        lineHeight: 19.5,
        paddingHorizontal: 16,
      }),
    } as const,
  },
  defaultVariants: {
    size: '$default',
    type: 'primary',
  },
});
