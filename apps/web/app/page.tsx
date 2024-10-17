/* eslint-disable @nx/enforce-module-boundaries */
'use client';

import { useState } from 'react';
import { Theme } from 'tamagui';
import { AppAccordion, AppButton, AppLayout, AppSwitch, AppTextField, H1 } from '@my-project/shared/ui/ui-kit';

export default function Index() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <Theme name={theme}>
      <AppLayout>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            padding: '40px',
            maxWidth: '700px',
            margin: 'auto',
          }}>
          <H1>H1 Title</H1>
          <AppButton pressStyle={{ scale: 1.2 }} animation='medium' type='primary'>
            Button
          </AppButton>
          <AppSwitch onCheckedChange={(value) => setTheme(value ? 'light' : 'dark')} checked={theme === 'light'} />
          <AppTextField />
          <AppAccordion />
        </div>
      </AppLayout>
    </Theme>
  );
}
