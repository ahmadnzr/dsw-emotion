import type { Meta, StoryObj } from "@storybook/react";

import { Heading } from "ui/components/atoms/Heading";

const meta = {
  title: "Components/Atoms/Heading",
  component: Heading,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    children: "Heading 1",
    level: "h1",
  },
};

export const Heading2: Story = {
  args: {
    children: "Heading 2",
    level: "h2",
  },
};
