import React from "react";
import Logo from "../../../public/logo/logo.svg";

type Props = {
  className: string;
};

const Banner = ({ className }: Props) => {
  return (
    <div
      className={`${className} h-full flex flex-col gap-[60px] justify-center items-center`}
    >
      <Logo width={"50%"} />
      <p className="text-[#A3A3A3]">
        indieGo는 공연문화 발전을 도모하는 <br></br>서비스 플랫폼입니다.{" "}
        <br></br>
        <br></br> 회원가입을 통해 indieGo 커뮤니티를 <br></br>이용할 수
        있습니다.
      </p>
    </div>
  );
};

export default Banner;
