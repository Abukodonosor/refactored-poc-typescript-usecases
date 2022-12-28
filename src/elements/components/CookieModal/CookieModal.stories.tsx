// Button.stories.ts|tsx

import React from 'react';

// https://storybook.js.org/docs/react/writing-stories/introduction
import { ComponentMeta, Story } from '@storybook/react';

import { CookieModal, CookieModalInputProps } from './CookieModal';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Cookie Modal Component',
  component: CookieModal,
} as ComponentMeta<typeof CookieModal>;

//👇 We create a “template” of how args map to rendering
const Template: Story<CookieModalInputProps> = (args: any) => <CookieModal {...args} />;

//👇 Each story then reuses that template
export const CookieModalComponent_V1 = Template.bind({});
CookieModalComponent_V1.args = {
  open: true,
  accepted: false,
  handleAgree: () => console.log('Agree'),
  handleDetails: () => console.log('Details'),
};

export const CookieModalComponent_V2 = Template.bind({});
CookieModalComponent_V2.args = {
  open: true,
  accepted: true,
  handleAgree: () => console.log('Agree'),
  handleDetails: () => console.log('Details'),
};
