'use client';

import React, { ReactElement } from 'react';
import { Switch, styled, SwitchProps } from 'tamagui';

const CustomSwitch = styled(Switch, {
  backgroundColor: '$textSecondary',
  borderColor: 'transparent',
  height: 28,
  minHeight: 28,
  width: 44,
  variants: {
    checked: {
      true: {
        backgroundColor: '$brandPrimary',
      },
    },
  },
});

export function AppSwitch(props: SwitchProps): ReactElement {
  return (
    <CustomSwitch {...props}>
      <Switch.Thumb width={24} height={24} backgroundColor='$textForeground' animation='quicker' />
    </CustomSwitch>
  );
}
