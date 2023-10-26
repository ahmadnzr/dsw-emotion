import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "ui/components/atoms/Text";

const meta = {
  title: "Components/Atoms/Text",
  component: Text,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
    },
    weight: {
      control: "select",
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ExtraSmall: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    size: "xs",
    weight: "normal",
    color: "",
  },
};

export const Small: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    size: "sm",
    weight: "normal",
    color: "",
  },
};

export const Medium: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    size: "md",
    weight: "normal",
    color: "",
  },
};

export const Large: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    size: "lg",
    weight: "normal",
    color: "",
  },
};
