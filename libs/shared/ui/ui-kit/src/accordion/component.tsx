'use client';

import React, { ReactElement } from 'react';
import { Accordion } from 'tamagui';
import { H4 } from '../heading';
import { AppText } from '../text';

export function AppAccordion(): ReactElement {
  return (
    <Accordion width={'100%'} overflow='hidden' type='multiple' collapsable>
      <Accordion.Item value='1'>
        <Accordion.Trigger unstyled borderWidth={0}>
          {({ open }: { open: boolean }) => <H4>Accordion</H4>}
        </Accordion.Trigger>
        <Accordion.HeightAnimator animation='medium'>
          <Accordion.Content>
            <AppText>
              Cold showers can help reduce inflammation, relieve pain, improve circulation, lower stress levels, and
              reduce muscle soreness and fatigue.
            </AppText>
          </Accordion.Content>
        </Accordion.HeightAnimator>
      </Accordion.Item>
    </Accordion>
  );
}
