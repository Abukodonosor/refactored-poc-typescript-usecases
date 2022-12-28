// Text.stories.ts|tsx

// https://storybook.js.org/docs/react/writing-stories/introduction
import { ComponentMeta, Story } from '@storybook/react';

import { Text } from './index';
import { TextInputProps } from './types';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Text Component',
  component: Text,
} as ComponentMeta<typeof Text>;

//👇 We create a “template” of how args map to rendering
const Template: Story<TextInputProps> = (args: any) => (
  <Text {...args}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id fermentum enim. Sed sodales
    justo tellus, sit amet lacinia augue pharetra et. In hac habitasse platea dictumst.
  </Text>
);

//👇 Each story then reuses that template
export const TextComponent_V1 = Template.bind({});
TextComponent_V1.args = {};
