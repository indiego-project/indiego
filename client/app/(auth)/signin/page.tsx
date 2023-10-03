"use client";

import { useInput } from "@/app/hooks/useInput";
import Form from "../component/Form";
import { useEffect } from "react";
import Link from "next/link";

export default function SignIn() {
  const { value: emailValue, onChange: emailOnChange } = useInput("");
  const { value: passwordValue, onChange: passwordOnChange } = useInput("");
  const { value: toggleValue, onChange: toggleOnChange } = useInput("일반");

  const onLoginClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("버튼 클릭됨");
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="relative w-full h-full flex flex-col sm:h-auto sm:max-w-[330px] lg:w-[50%]">
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
          <Form.Button value="로그인" onClick={onLoginClick}></Form.Button>
          <Form.RegisterLink />
        </Form>
        <span className="hidden text-white text-[10px] mt-[8px] self-end sm:block">
          회원이 아니신가요?{" "}
          <Link className="font-bold" href={"/signup"}>
            회원가입하기
          </Link>
        </span>
      </div>
    </div>
  );
}
