/* eslint-disable jsx-a11y/accessible-emoji */
// eslint-disable-next-line import/no-unresolved
import { useLoadResources } from '@my-project/mobile/shared/features/use-load-resources';
import {
  AppAccordion,
  AppButton,
  AppSwitch,
  AppTextField,
  H1,
  tamaguiConfig,
  AppLayout,
} from '@my-project/shared/ui/ui-kit';
import { TamaguiProvider, Theme } from '@tamagui/core';
import React, { useState } from 'react';
import { View } from 'react-native';

export const App = () => {
  const appIsReady = useLoadResources();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  if (!appIsReady) {
    return null;
  }

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Theme name={theme}>
        <AppLayout>
          <View
            style={{
              gap: 20,
              padding: 20,
              maxWidth: 500,
              width: '100%',
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}>
            <H1>H1 Title</H1>
            <AppButton pressStyle={{ scale: 1.2 }} animation='medium' type='primary'>
              Button
            </AppButton>
            <AppSwitch onCheckedChange={(value) => setTheme(value ? 'light' : 'dark')} checked={theme === 'light'} />
            <AppTextField />
            <AppAccordion />
          </View>
        </AppLayout>
      </Theme>
    </TamaguiProvider>
  );
};

export default App;
