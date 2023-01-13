import React from 'react';
import data from './assets/data.json';

import {Tabs} from "./Tabs";

export default {
  title: 'Hartree Demo Grafana Tabs',
  component: Tabs,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Tabs {...args} />;

export const Products = Template.bind({data});
