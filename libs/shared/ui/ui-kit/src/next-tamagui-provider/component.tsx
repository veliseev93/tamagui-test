'use client';

import '@tamagui/core/reset.css';
import '@tamagui/polyfill-dev';

import { NextThemeProvider } from '@tamagui/next-theme';
import { useServerInsertedHTML } from 'next/navigation';
import React, { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { TamaguiProvider, Theme } from 'tamagui';
import { tamaguiConfig } from '../tamagui-config';

export const NextTamaguiProvider = ({ children }: { children: ReactNode }) => {
  useServerInsertedHTML(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const rnwStyle = StyleSheet.getSheet();

    return (
      <React.Fragment>
        <style dangerouslySetInnerHTML={{ __html: rnwStyle.textContent }} id={rnwStyle.id} />
        <style
          dangerouslySetInnerHTML={{
            // the first time this runs you'll get the full CSS including all themes
            // after that, it will only return CSS generated since the last call
            __html: tamaguiConfig.getNewCSS(),
          }}
        />
      </React.Fragment>
    );
  });

  return (
    <NextThemeProvider skipNextHead>
      <TamaguiProvider config={tamaguiConfig} disableRootThemeClass defaultTheme='light'>
        <Theme name='light'>{children}</Theme>
      </TamaguiProvider>
    </NextThemeProvider>
  );
};
