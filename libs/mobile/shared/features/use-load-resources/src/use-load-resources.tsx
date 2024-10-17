// eslint-disable-next-line import/no-unresolved
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import { fontFamily } from '@my-project/shared/ui/styles';

export function useLoadResources(...args: Array<boolean>): boolean {
  const [areFontsLoaded] = useFonts({
    [fontFamily.bold]: require('@my-project/shared/ui/assets/fonts/ZonaPro-Bold.ttf'),
    [fontFamily.regular]: require('@my-project/shared/ui/assets/fonts/ZonaPro-Regular.ttf'),
  });

  const [appIsReady, setAppIsReady] = useState(false);

  const isInitialLoadingFinished = args.every((arg) => !!arg) && areFontsLoaded;

  const onInitialLoadingFinished = async (): Promise<void> => {
    setAppIsReady(true);
  };

  useEffect(() => {
    if (isInitialLoadingFinished) {
      onInitialLoadingFinished();
    }
  }, [isInitialLoadingFinished]);

  return appIsReady;
}
