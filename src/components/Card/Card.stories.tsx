import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from "./Card";

export default {
    component: Card,
    title: 'Dashboard/Card',
    argTypes: {
      background: {control: 'text'}
    } 
  } as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => <Card {...args}/>;

export const Default = Template.bind({});
Default.args = {
  width: '200px',
  height: '300px',
  title: "Test 123"
};

export const ImageTemplate = Template.bind({});
ImageTemplate.args = {
  background: './panda.png', //uri  
  width: '200px',
  height: '300px',
  title: "Test 123"
};