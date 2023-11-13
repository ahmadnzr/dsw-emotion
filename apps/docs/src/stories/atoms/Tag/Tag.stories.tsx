import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "ui/components/atoms/Tag";

const meta = {
  title: "Components/Atoms/Tag",
  component: Tag,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicTag: Story = {
  args: {
    children: "Success",
    backgroundColor: "#82faa2",
    color: "#2d9148",
  },
};

export const OutlinedTag: Story = {
  args: {
    children: "Success",
    backgroundColor: "#82faa2",
    color: "#2d9148",
    outlined: true,
  },
};
