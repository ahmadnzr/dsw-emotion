import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "ui/components/atoms/Icon";

const meta = {
  title: "Components/Atoms/Icon",
  component: Icon,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "select",
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SmallIcon: Story = {
  args: {
    name: "plus",
    size: "sm",
  },
};

export const MediumIcon: Story = {
  args: {
    name: "plus",
    size: "md",
  },
};

export const LargeIcon: Story = {
  args: {
    name: "plus",
    size: "lg",
  },
};
