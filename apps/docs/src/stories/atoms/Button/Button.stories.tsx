import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "ui/components/atoms/Button";

const meta = {
  title: "Components/Atoms/Button",
  component: Button,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Submit",
    type: "button",
  },
};
