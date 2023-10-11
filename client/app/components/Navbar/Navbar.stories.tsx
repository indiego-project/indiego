import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "./Navbar";

const ExampleNavbar: Meta<typeof Navbar> = {
  component: Navbar,
};
type Story = StoryObj<typeof ExampleNavbar>;

export default ExampleNavbar;

export const Default: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className="flex w-screen h-screen bg-white justify-center items-center">
        <Story />
      </div>
    ),
  ],
};
