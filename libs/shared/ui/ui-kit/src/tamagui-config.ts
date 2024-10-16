'use client';

import { config } from '@tamagui/config/v3';
import { createTamagui } from 'tamagui'; // or '@tamagui/core'

export const appConfig = createTamagui(config);

export type AppConfig = typeof appConfig;

declare module 'tamagui' {
  // or '@tamagui/core'
  // overrides TamaguiCustomConfig so your custom types
  // work everywhere you import `tamagui`
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface TamaguiCustomConfig extends AppConfig {}
}
