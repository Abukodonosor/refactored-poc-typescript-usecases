// TabPanel.stories.ts|tsx

// https://storybook.js.org/docs/react/writing-stories/introduction
import { ComponentMeta, Story } from '@storybook/react';
import { MaterialThemeProvider } from '../../../providers';

import { TabPanel } from './index';
import { TabPanelInputProps } from './types';

export default {
  /* ๐ The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'TabPanel Component',
  component: TabPanel,
} as ComponentMeta<typeof TabPanel>;

//๐ We create a โtemplateโ of how args map to rendering
const Template: Story<TabPanelInputProps> = (args: any) => (
  <MaterialThemeProvider>
    <TabPanel {...args}>Panel</TabPanel>
  </MaterialThemeProvider>
);

//๐ Each story then reuses that template
export const TabPanelComponent_V1 = Template.bind({});
TabPanelComponent_V1.args = {};
