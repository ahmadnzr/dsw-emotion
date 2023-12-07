import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "ui/components/molecules/Button";

const meta = {
  title: "Components/Molecules/Button",
  component: Button,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    leftIcon: { control: "select" },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    children: "Submit",
    type: "button",
    leftIcon: "plus-circle",
    variant: "contained",
  },
};

export const Outlined: Story = {
  args: {
    children: "Submit",
    type: "button",
    variant: "outlined",
  },
};

export const Text: Story = {
  args: {
    children: "Submit",
    type: "button",
    variant: "text",
  },
};

export const Link: Story = {
  args: {
    children: "Submit",
    type: "button",
    variant: "link",
  },
};

export const Rounded: Story = {
  args: {
    children: "Submit",
    type: "button",
    variant: "contained",
    leftIcon: "plus-circle",
    size: "lg",
    shape: "round",
  },
};

export const Icon: Story = {
  args: {
    children: "Submit",
    type: "button",
    variant: "contained",
    leftIcon: "trash",
    size: "lg",
  },
};

export const CircleIcon: Story = {
  args: {
    leftIcon: "plus-circle",
    type: "button",
    variant: "contained",
    shape: "circle",
  },
};

export const CircleText: Story = {
  args: {
    children: "A",
    type: "button",
    variant: "contained",
    shape: "circle",
  },
};
