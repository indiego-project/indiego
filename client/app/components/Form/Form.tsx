import React, { ReactElement } from "react";
import IconLogo from "../../../public/logo/icon.svg";
import Link from "next/link";

type InputProps = {
  className?: string;
  value: string;
  placeholder: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type ToggleProps = {
  className?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type ButtonProps = {
  className?: string;
  value: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Form = ({ children, className }: any) => {
  let subComponentList = Object.keys(Form);

  let subComponents = subComponentList.map((key) => {
    return React.Children.map(children, (child) => {
      return child.type.formElementType === key ? child : null;
    });
  });

  return (
    <div
      className={`${className} w-full h-full rounded-[8px] flex flex-col items-center px-[58px] py-[40px] border-box bg-white`}
    >
      {subComponents.map((component) => component)}
    </div>
  );
};

const Input = ({
  className = "",
  placeholder,
  type = "text",
  value,
  onChange,
}: InputProps) => {
  return (
    <input
      placeholder={placeholder}
      className={`${className} w-full border-b-[1px] text-[14px] py-[8px] border-[#97A0A7] outline-none mb-[20px]`}
      type={type}
      value={value}
      onChange={onChange}
    ></input>
  );
};

const Button = ({ className = "", value, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${className} w-full py-[8px] rounded-[6px] border-[1px] border-[#5483E8] text-[#5483E8] text-[12px]`}
      type="button"
    >
      {value}
    </button>
  );
};

const Logo = () => <IconLogo width={"37px"} className="mb-[30px]" />;

const Toggle = ({ className = "", value, onChange }: ToggleProps) => {
  return (
    <div className={`${className} flex gap-[30px] font-[600] mb-[30px]`}>
      <label
        htmlFor="#general"
        className={`${
          value == "일반"
            ? "border-b-[2px] border-[#5483E8] text-[#5483E8]"
            : "text-[#97A0A7]"
        } cursor-pointer`}
      >
        <input
          id="#general"
          className={``}
          type="radio"
          name="formGroup"
          value="일반"
          checked={value == "일반"}
          onChange={onChange}
        />
        일반
      </label>

      <label
        htmlFor="#performer"
        className={`${
          value == "퍼포머"
            ? "border-b-[2px] border-[#5483E8] text-[#5483E8]"
            : "text-[#97A0A7]"
        } cursor-pointer`}
      >
        <input
          id="#performer"
          className={``}
          type="radio"
          name="formGroup"
          value="퍼포머"
          checked={value == "퍼포머"}
          onChange={onChange}
        />
        퍼포머
      </label>
    </div>
  );
};

const RegisterLink = () => {
  return (
    <span className="text-[#5483E8] text-[10px] mt-[50px] text-center sm:hidden">
      회원이 아니신가요? <br></br>
      <Link className="font-bold" href={"/signup"}>
        회원가입하기
      </Link>
    </span>
  );
};

Logo.formElementType = "Logo";
Toggle.formElementType = "Toggle";
Input.formElementType = "Input";
Button.formElementType = "Button";
RegisterLink.formElementType = "RegisterLink";

Form.Logo = Logo;
Form.Toggle = Toggle;
Form.Input = Input;
Form.Button = Button;
Form.RegisterLink = RegisterLink;

export default Form;
