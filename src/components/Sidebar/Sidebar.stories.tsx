import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Sidebar from "./Sidebar";

export default {
    component: Sidebar,
    title: 'Dashboard/Sidebar'
  } as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = args => <Sidebar />;

export const Default = Template.bind({});