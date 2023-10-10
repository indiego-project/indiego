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
const CompositedFormWithHooks = () => {
  // Sets the hooks for both the label and primary props
  const { value: emailValue, onChange: emailOnChange } = useInput("");
  const { value: passwordValue, onChange: passwordOnChange } = useInput("");
  const { value: toggleValue, onChange: toggleOnChange } = useInput("일반");

  return (
    <Form className="w-[100%]">
      <Form.Logo />
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

const LogoFormWithHooks = () => {
  return (
    <Form className="w-[100%]">
      <Form.Logo />
    </Form>
  );
};

const ToggleFormWithHooks = () => {
  // Sets the hooks for both the label and primary props
  const { value: toggleValue, onChange: toggleOnChange } = useInput("일반");

  return (
    <Form className="w-[100%]">
      <Form.Toggle value={toggleValue} onChange={toggleOnChange} />
    </Form>
  );
};

const InputFormWithHooks = () => {
  // Sets the hooks for both the label and primary props
  const { value: emailValue, onChange: emailOnChange } = useInput("");
  const { value: passwordValue, onChange: passwordOnChange } = useInput("");

  return (
    <Form className="w-[100%]">
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
    </Form>
  );
};

const ButtonFormWithHooks = () => {
  return (
    <Form className="w-[100%]">
      <Form.Button value="로그인" onClick={() => {}}></Form.Button>
    </Form>
  );
};

const RegisterLinkFormWithHooks = () => {
  return (
    <Form className="w-[100%]">
      <Form.RegisterLink />
    </Form>
  );
};

export const Composited: Story = {
  render: () => <CompositedFormWithHooks />,
};

export const Logo: Story = {
  render: () => <LogoFormWithHooks />,
};

export const Toggle: Story = {
  render: () => <ToggleFormWithHooks />,
};

export const Input: Story = {
  render: () => <InputFormWithHooks />,
};

export const Button: Story = {
  render: () => <ButtonFormWithHooks />,
};

export const RegisterLink: Story = {
  render: () => <RegisterLinkFormWithHooks />,
};
