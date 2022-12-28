import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { MenuListItem, MenuListItemInputProps } from './MenuListItem';
import { HomeOutlinedIcon } from '../../../assets/icons';
import { BrowserRouter } from 'react-router-dom';
export default {
  title: 'Menu List Item Component',
  component: MenuListItem,
} as ComponentMeta<typeof MenuListItem>;

const Template: Story<MenuListItemInputProps> = (args: any) => (
  <BrowserRouter>
    <MenuListItem {...args} />
  </BrowserRouter>
);

export const Active_MenuListItem_NoChildren_Opened = Template.bind({
  open: true,
  name: 'Dashboard',
  id: 'Dashboard',
  active: true,
  icon: <HomeOutlinedIcon />,
  handleClick: () => console.log('clicked'),
});
