import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "ui/components/atoms/Badge";

const meta = {
  title: "Components/Atoms/Budge",
  component: Badge,
  parameters: {},
  tags: ["autodocs"],
  // argTypes: {
  //   children: { control: "React.ReactNode" },
  // },
  render: ({ ...args }) => (
    <Badge {...args}>
      <Container />
    </Badge>
  ),
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

const Container = () => {
  return (
    <div
      style={{
        height: "50px",
        width: "50px",
        backgroundColor: "skyblue",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontWeight: 700,
      }}
    >
      SR
    </div>
  );
};

export const TopRightBullet: Story = {
  args: {},
};

export const TopLeftBullet: Story = {
  args: {
    dotPosition: "top-left",
    dotColor: "#5966f7",
  },
};

export const BottomRightBullet: Story = {
  args: {
    dotPosition: "bottom-right",
    dotColor: "#27f25d",
  },
};

export const BottomLeftBullet: Story = {
  args: {
    dotPosition: "bottom-left",
    dotColor: "tomato",
  },
};
