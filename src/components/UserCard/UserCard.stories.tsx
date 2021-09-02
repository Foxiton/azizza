import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import UserCard from "./UserCard";

export default {
    component: UserCard,
    title: 'Dashboard/UserCard'
  } as ComponentMeta<typeof UserCard>;

const Template: ComponentStory<typeof UserCard> = args => <UserCard />;

export const Default = Template.bind({});