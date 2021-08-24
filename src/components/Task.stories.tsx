import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Task from './Task';

export default {
  component: Task,
  title: 'Components/Task',
  argTypes: {
    size: { control: {type: 'range', min: 12, max: 32, step: 1}}
  } 
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = args => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_ARCHIVED'
  }
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED'
  }
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_INBOX'
  }
};