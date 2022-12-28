// Button.stories.ts|tsx

import React from 'react';

// https://storybook.js.org/docs/react/writing-stories/introduction
import { ComponentMeta, Story } from '@storybook/react';

import { MonitoringBar } from './index';
import ThemeProvider from '@mui/styles/ThemeProvider';
import { DefaultConfigTheme } from '../../../theme';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'MenuBar Component',
  component: MonitoringBar,
} as ComponentMeta<typeof MonitoringBar>;

//👇 We create a “template” of how args map to rendering
const Template: Story = (args: any) => (
  <ThemeProvider theme={DefaultConfigTheme}>
    <MonitoringBar {...args} />;
  </ThemeProvider>
);

//👇 Each story then reuses that template
export const MonitoringBarComponent_V1 = Template.bind({});
MonitoringBarComponent_V1.args = {};
