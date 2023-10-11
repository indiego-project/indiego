import type { Meta } from "@storybook/react";
import Searchbar from "./Searchbar";

const meta: Meta<typeof Searchbar> = {
  component: Searchbar,
  decorators: [
    (Story) => (
      <div className="flex w-screen h-screen justify-center items-center bg-white">
        <div className="w-full max-w-mb_base">
          <Story />
        </div>
      </div>
    ),
  ],
  args: {},
};

export default meta;

export const DefaultSearchbar = () => {
  return <Searchbar mode="default" />;
};

export const DetailSearchbar = () => {
  return <Searchbar mode="detail" />;
};
