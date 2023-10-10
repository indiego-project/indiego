import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import Banner from "./Banner";

const meta: Meta<typeof Banner> = {
  component: Banner,
  decorators: [
    (Story) => (
      <div style={{ width: "800px" }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Banner>;

/*
 * Example Button story with React Hooks.
 * See note below related to this example.
 */

export const Primary: Story = {
  render: () => <Banner className="" />,
};
