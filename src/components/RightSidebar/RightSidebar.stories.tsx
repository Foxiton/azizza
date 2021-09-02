import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RightSidebar from "./RightSidebar";

export default {
    component: RightSidebar,
    title: 'Dashboard/RightSidebar'
  } as ComponentMeta<typeof RightSidebar>;

const Template: ComponentStory<typeof RightSidebar> = args => <RightSidebar />;

export const Default = Template.bind({});