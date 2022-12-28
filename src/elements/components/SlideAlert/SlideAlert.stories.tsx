// SlideAlert.stories.ts|tsx

// https://storybook.js.org/docs/react/writing-stories/introduction
import { ComponentMeta, Story } from '@storybook/react';

import { SlideAlert } from './index';
import { SlideAlertInputProps } from './types';

import ThemeProvider from '@mui/styles/ThemeProvider';
import { DefaultConfigTheme } from '../../../theme';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'SlideAlert Component',
  component: SlideAlert,
} as ComponentMeta<typeof SlideAlert>;

//👇 We create a “template” of how args map to rendering
const Template: Story<SlideAlertInputProps> = (args: any) => (
  <ThemeProvider theme={DefaultConfigTheme}>
    <SlideAlert {...args} />
  </ThemeProvider>
);

//👇 Each story then reuses that template
export const SlideAlertComponent_V1 = Template.bind({});
SlideAlertComponent_V1.args = {
  type: 'success',
  text: 'Success alert',
};

export const SlideAlertComponent_V2 = Template.bind({});
SlideAlertComponent_V2.args = {
  type: 'warning',
  text: 'Warning alert',
};

export const SlideAlertComponent_V3 = Template.bind({});
SlideAlertComponent_V3.args = {
  type: 'error',
  text: 'Error alert',
};
