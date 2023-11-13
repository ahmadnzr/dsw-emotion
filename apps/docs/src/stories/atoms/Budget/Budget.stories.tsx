import type { Meta, StoryObj } from "@storybook/react";
import { Badget } from "ui/components/atoms/Badget";

const meta = {
  title: "Components/Atoms/Budget",
  component: Badget,
  parameters: {},
  tags: ["autodocs"],
  // argTypes: {
  //   children: { control: "React.ReactNode" },
  // },
  render: ({ ...args }) => (
    <Badget {...args}>
      <Container />
    </Badget>
  ),
} satisfies Meta<typeof Badget>;

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
