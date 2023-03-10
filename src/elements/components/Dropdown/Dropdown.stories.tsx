// Dropdown.stories.ts|tsx

// https://storybook.js.org/docs/react/writing-stories/introduction
import { ComponentMeta, Story } from '@storybook/react';

import { Dropdown } from './Dropdown';
import { DropdownInputProps } from './types';

export default {
  /* ๐ The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Dropdown Component',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

//๐ We create a โtemplateโ of how args map to rendering
const Template: Story<DropdownInputProps> = (args: any) => <Dropdown {...args} />;

//๐ Each story then reuses that template
export const DropdownComponent_V1 = Template.bind({});
DropdownComponent_V1.args = {
  value: 'Option 1',
  options: [
    { value: 'o1', label: 'Option 1' },
    { value: 'o2', label: 'Option 2' },
    { value: 'o3', label: 'Option 3' },
  ],
};
