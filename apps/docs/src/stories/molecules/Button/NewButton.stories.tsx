import type { Meta, StoryObj } from "@storybook/react";
import { NewButton } from "ui/components/molecules/NewButton";
import { Icon as ButtonIcon } from "ui/components/atoms/Icon";

const meta = {
  title: "Components/Molecules/NewButton",
  component: NewButton,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    icon: { control: "React.ReactNode" },
  },
} satisfies Meta<typeof NewButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    children: "Submit",
    type: "button",
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

export const Rounded: Story = {
  args: {
    children: "Submit",
    type: "button",
    variant: "contained",
    icon: <ButtonIcon name="trash" />,
    size: "lg",
    shape: "round",
  },
};

export const Icon: Story = {
  args: {
    children: "Submit",
    type: "button",
    variant: "contained",
    icon: <ButtonIcon name="trash" />,
    size: "lg",
  },
};

export const CircleIcon: Story = {
  args: {
    icon: <ButtonIcon name="trash" />,
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
