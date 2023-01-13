import React from 'react';
import data from './assets/data.json';

import {ProductsDemo} from "./ProductsDemo";

export default {
  title: 'Hartree Demo Bootstrap Tabs',
  component: ProductsDemo,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <ProductsDemo {...args} />;

export const Products = Template.bind({data});
