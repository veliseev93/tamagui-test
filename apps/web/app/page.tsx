/* eslint-disable @nx/enforce-module-boundaries */
'use client';

import { AppAccordion, AppButton, AppSwitch, AppTextField, H1 } from '@my-project/shared/ui/ui-kit';

export default function Index() {
  return (
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
      <AppButton type='primary'>Button</AppButton>
      <AppSwitch />
      <AppTextField />
      <AppAccordion />
    </div>
  );
}
