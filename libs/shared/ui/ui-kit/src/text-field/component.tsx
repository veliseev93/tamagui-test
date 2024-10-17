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
  fontSize: '$default',
  width: '100%',
  color: '$textPrimary',
  focusStyle: {
    borderWidth: 1,
    borderColor: '$brandPrimary',
    backgroundColor: '$backgroundPrimary',
  },
  variants: {
    isError: {
      true: {
        borderWidth: 1,
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
