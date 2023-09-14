import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const ExampleButton: Meta<typeof Button> = {
  component: Button,
};
type Story = StoryObj<typeof ExampleButton>;

export default ExampleButton;

export const Example: Story = {
  args: {
    primary: true,
    label: "Button",
  },
  render: () => <Button />,
};
