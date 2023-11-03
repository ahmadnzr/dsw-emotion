import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "ui/components/atoms/Input";

const meta = {
  title: "Components/Atoms/Input/Text",
  component: Input,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    leftIcon: {
      control: "select",
    },
    rightIcon: {
      control: "select",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NormalInput: Story = {
  args: {
    placeholder: "Input Placeholder",
  },
};
