// Button.stories.ts|tsx

import React from 'react';

// https://storybook.js.org/docs/react/writing-stories/introduction
import { ComponentMeta, Story } from '@storybook/react';

import { DataTable } from './index';
import { DataTableViewProps } from './types';
import { columns, rows } from './mockedData';

export default {
  /* ๐ The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Data Table Component',
  component: DataTable,
} as ComponentMeta<typeof DataTable>;

//๐ We create a โtemplateโ of how args map to rendering
const Template: Story<DataTableViewProps> = (args: any) => <DataTable {...args} />;

//๐ Each story then reuses that template
export const DataTableComponent_V1 = Template.bind({});
DataTableComponent_V1.args = {
  columns,
  rows,
};
