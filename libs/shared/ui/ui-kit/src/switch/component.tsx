'use client';

import React, { ReactElement, useState } from 'react';
import { Switch, styled } from 'tamagui';

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

export function AppSwitch(): ReactElement {
  const [checked, setChecked] = useState(false);

  return (
    <CustomSwitch onCheckedChange={(checked: boolean) => setChecked(checked)} checked={checked}>
      <Switch.Thumb width={24} height={24} backgroundColor='$textForeground' animation='quicker' />
    </CustomSwitch>
  );
}
