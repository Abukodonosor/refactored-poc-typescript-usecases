// MonitoringTable.stories.ts|tsx

// https://storybook.js.org/docs/react/writing-stories/introduction
import { ComponentMeta, Story } from '@storybook/react';

import { MonitoringTable } from './index';
import { MonitoringTableControllerHookInputProps } from './types';
import { mockedData } from '../../pages/MonitoringPage/mockedData';
import { MaterialThemeProvider } from '../../../providers/ThemeProvider';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

export default {
  /* ๐ The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Monitoring Table Component',
  component: MonitoringTable,
} as ComponentMeta<typeof MonitoringTable>;

//๐ We create a โtemplateโ of how args map to rendering
const Template: Story<MonitoringTableControllerHookInputProps> = (args: any) => (
  <MaterialThemeProvider>
    <MemoryRouter>
      <Routes>
        <Route path="/*" element={<MonitoringTable {...args} />} />
      </Routes>
    </MemoryRouter>
  </MaterialThemeProvider>
);

//๐ Each story then reuses that template
export const MonitoringTableComponent_V1 = Template.bind({});
MonitoringTableComponent_V1.args = {
  data: mockedData('inbox'),
};
