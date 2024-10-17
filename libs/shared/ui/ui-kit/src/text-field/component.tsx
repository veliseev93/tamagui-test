'use client';

import { Input, styled } from 'tamagui';

export const AppTextField = styled(Input, {
  name: 'AppInput',
  unstyled: true,
  height: 48,
  padding: 12,
  placeholderTextColor: '$textSecondary',
  backgroundColor: '$backgroundSecondary',
  borderRadius: 8,
  fontFamily: '$regular',
  borderWidth: 1,
  borderColor: 'transparent',
  fontSize: '$default',
  width: '100%',
  color: '$textPrimary',
  focusStyle: {
    borderColor: '$brandPrimary',
    backgroundColor: '$backgroundPrimary',
  },
  variants: {
    isError: {
      true: {
        borderColor: '$danger',
        backgroundColor: '$backgroundPrimary',
      },
    },
    disabled: {
      true: {
        backgroundColor: '$backgroundTertiary',
        color: '$textTertiary',
        placeholderTextColor: '$textTertiary',
      },
    },
  },
});
