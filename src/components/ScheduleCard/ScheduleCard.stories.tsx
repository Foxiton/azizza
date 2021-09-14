import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ScheduleCard from "./ScheduleCard";

import imagePanda from '../../assets/panda.png';
import imageRiver from '../../assets/river.jpg';

export default {
    component: ScheduleCard,
    title: 'Dashboard/ScheduleCard',
    argTypes: {
      background: {control: 'text'}
    } 
  } as ComponentMeta<typeof ScheduleCard>;

const Template: ComponentStory<typeof ScheduleCard> = args => <ScheduleCard {...args}/>;

export const Default = Template.bind({});
Default.args = {
  background: `${imageRiver}`,
  title: 'Crooked Valley',
  scheduledDates: '16 June - 20 June'
};

export const ImageTemplate = Template.bind({});
ImageTemplate.args = {
  background: `${imagePanda}`,
  size: {
    width: '200px',
    height: '300px'
  }
};