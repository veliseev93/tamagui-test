'use client';

// eslint-disable-next-line @nx/enforce-module-boundaries, import/no-unresolved
import { type AppConfig, appConfig } from '@my-project/shared/ui/ui-kit';

/// Customized Tamagui. This replace the import of `tamagui` package for our customization.
declare module 'tamagui' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig;
