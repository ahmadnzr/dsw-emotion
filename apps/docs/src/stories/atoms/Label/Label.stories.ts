import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "ui/components/atoms/Label";

const meta = {
  title: "Components/Atoms/Label",
  component: Label,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
    },
  },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ExtraSmall: Story = {
  args: {
    children: "Label",
    size: "xs",
  },
};

export const Small: Story = {
  args: {
    children: "Label",
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    children: "Label",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    children: "Label",
    size: "lg",
  },
};
