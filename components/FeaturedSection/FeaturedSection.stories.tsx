import React from 'react';
import { Story, Meta } from '@storybook/react';
import { FeaturedSection } from './FeaturedSection';
import customizationJson from '../../custom/customization';
import localizationJson from '../../custom/localization';

export default {
  title: 'Example/FeaturedSection',
  component: FeaturedSection,
} as Meta;

const Template: Story = (args) => <FeaturedSection {...args} />;

const defaultTemplate = {
  assetsForSale: '__',
  lowestPrice: '__ XUSDC',
  template_id: '__',
  collection: {
    collection_name: 'Collection Name',
    name: 'Collection Display Name',
  },
  immutable_data: { name: 'Template Name', image: '', video: '' },
};

export const Default = Template.bind({});
Default.args = {
  featuredSectionStyles: customizationJson.featuredSection,
  featuredSectionText: localizationJson['en'].featuredSection,
  nftCardText: localizationJson['en'].nftCard,
  templates: [
    defaultTemplate,
    defaultTemplate,
    defaultTemplate,
    defaultTemplate,
    defaultTemplate,
    defaultTemplate,
    defaultTemplate,
  ],
};