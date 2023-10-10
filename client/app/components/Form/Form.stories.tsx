import React, { useState } from "react";

import { Meta, StoryObj } from "@storybook/react";

import Form from "./Form";
import { useInput } from "../../hooks/useInput";

const meta: Meta<typeof Form> = {
  component: Form,
  decorators: [
    (Story) => (
      <div style={{ width: "400px" }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Form>;

/*
 * Example Button story with React Hooks.
 * See note below related to this example.
 */
const FormWithHooks = () => {
  // Sets the hooks for both the label and primary props
  const { value: emailValue, onChange: emailOnChange } = useInput("");
  const { value: passwordValue, onChange: passwordOnChange } = useInput("");
  const { value: toggleValue, onChange: toggleOnChange } = useInput("일반");

  return (
    <Form className="w-[100%]">
      {/* <Form.Logo /> */}
      <Form.Toggle value={toggleValue} onChange={toggleOnChange} />
      <Form.Input
        placeholder="이메일"
        value={emailValue}
        onChange={emailOnChange}
      ></Form.Input>
      <Form.Input
        placeholder="비밀번호"
        value={passwordValue}
        onChange={passwordOnChange}
        type="password"
      ></Form.Input>
      <Form.Button value="로그인" onClick={() => {}}></Form.Button>
      <Form.RegisterLink />
    </Form>
  );
};

export const Primary: Story = {
  render: () => <FormWithHooks />,
};
