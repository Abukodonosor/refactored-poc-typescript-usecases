// Button.stories.ts|tsx

import React from 'react';

// https://storybook.js.org/docs/react/writing-stories/introduction
import { ComponentMeta, Story } from '@storybook/react';

import { HelpCard, HelpCardInputProps } from './HelpCard';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Help card view',
  component: HelpCard,
} as ComponentMeta<typeof HelpCard>;

//👇 We create a “template” of how args map to rendering
const Template: Story<HelpCardInputProps> = (args: any) => <HelpCard {...args} />;

//👇 Each story then reuses that template
export const HelpCardComponent_V1 = Template.bind({});
HelpCardComponent_V1.args = {
  itemId: 'some-general-id',
  title: 'General',
  description: 'This text is regarding general behavior of this application',
};

export const HelpCardComponent_V2 = Template.bind({});
HelpCardComponent_V2.args = {
  itemId: 'some-random-id',
  title: 'Random',
  description:
    'Aperiam quam eveniet quaerat non voluptatem atque ad. Autem expedita quia cum nam enim ea eveniet tempora quas. Exercitationem minus corrupti provident at quibusdam. Doloremque dicta perferendis. Non tempora nemo deserunt veritatis. Doloribus pariatur eius odio aliquam quae aliquam eligendi. Sint reiciendis corrupti. Eligendi quos cupiditate facilis esse aliquid maxime. Occaecati unde assumenda dolorem. Dolorum dolor quas reprehenderit impedit quas aliquid earum consequuntur. Autem officia ad consectetur. Quaerat alias vel repudiandae dolores placeat repellendus. Tempore modi perferendis rem cumque ratione deleniti. Dolore beatae architecto similique labore nobis earum adipisci quidem enim. Aperiam repellat ad tempore velit nam quia nemo optio. Eos velit dignissimos molestiae ',
};
