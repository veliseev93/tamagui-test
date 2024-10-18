'use client';

import { Check } from '@tamagui/lucide-icons';
import React, { ReactElement, useState } from 'react';
import { Checkbox, styled } from 'tamagui';

const CustomCheckbox = styled(Checkbox, {
  unstyled: true,
  width: 24,
  height: 24,
  backgroundColor: '$backgroundPrimary',
  borderWidth: 1,
  borderRadius: 8,
  alignItems: 'center',
  justifyContent: 'center',
  borderColor: '$textSecondary',
  variants: {
    checked: {
      true: {
        backgroundColor: '$brandPrimary',
        borderColor: '$backgroundPrimary',
      },
    },
  },
});

export function AppCheckBox(): ReactElement {
  const [checked, setChecked] = useState(false);

  return (
    <CustomCheckbox
      checked={checked}
      onCheckedChange={(checked) => setChecked(checked === 'indeterminate' || !checked ? false : true)}>
      <Checkbox.Indicator>
        <Check color='$textForeground' />
      </Checkbox.Indicator>
    </CustomCheckbox>
  );
}
