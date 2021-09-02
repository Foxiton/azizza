import React from "react";
import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router";

import '../src/styles/variables.scss';
import '../src/styles/fonts.scss';
import '../src/styles/index.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);