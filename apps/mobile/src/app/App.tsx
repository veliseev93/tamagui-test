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
import { TamaguiProvider } from '@tamagui/core';
import React from 'react';
import { View } from 'react-native';

export const App = () => {
  const appIsReady = useLoadResources();

  if (!appIsReady) {
    return null;
  }

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <AppLayout>
        <View style={{ gap: 20, padding: 20, maxWidth: 500, alignSelf: 'center' }}>
          <H1>H1 Title</H1>
          <AppButton type='primary'>Button</AppButton>
          <AppSwitch />
          <AppTextField />
          <AppAccordion />
        </View>
      </AppLayout>
    </TamaguiProvider>
  );
};

export default App;
