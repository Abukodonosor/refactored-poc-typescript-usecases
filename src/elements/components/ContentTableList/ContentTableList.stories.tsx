import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { ContentTableList, ToCListInputProps } from './ContentTableList';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Content table list',
  component: ContentTableList,
} as ComponentMeta<typeof ContentTableList>;

const Template: Story<ToCListInputProps> = (args: any) => <ContentTableList {...args} />;

export const ToCComponent_Default = Template.bind({});
ToCComponent_Default.args = {
  active: 'general',
  title: 'TABLE OF CONTENTS',
};

export const ToCComponent_Different_Title = Template.bind({});
ToCComponent_Different_Title.args = {
  active: 'general',
  title: 'Menu',
};

export const ToCComponent_Search_Active = Template.bind({});
ToCComponent_Search_Active.args = {
  active: 'search',
  title: 'Search',
};
