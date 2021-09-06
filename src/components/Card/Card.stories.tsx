import { Story, Meta } from "@storybook/react";
import React from "react";
import Card, { CardProps } from "./Card";

export default {
  title: "Components/Content Related/Card",
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => {
  return <Card {...args} />;
};

export const Default = Template.bind({}) as Story;
Default.args = {};

export const Square = Template.bind({}) as Story;
Square.args = {
  square: true,
};
