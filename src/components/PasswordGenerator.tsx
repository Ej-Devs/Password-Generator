import React from "react";
import Button from "./ui/Button";

const PasswordGenerator: React.FC = () => {

  return (
    <div className="flex items-center justify-center font-mono">
      <div className="lg:w-[540px] md:w-[540px] w-[343px] lg:h-[632px] md:h-[695px] h-[540px] lg:mx-[450px] lg:my-[196px] md:mx-[114px] md:my-[133px] mx-[16px] my-[64px]">
        <h1 className="text-mediumGrey lg:text-headingM md:text-headingM text-body text-center">
          Password Generator
        </h1>
        <div className="lg:w-full md:w-full lg:h-[80px] md:h-[80px] w-[343px] h-[64px] bg-darkGrey flex items-center justify-between lg:mt-[31px] md:mt-[31px] mt-[16px]">
          <input
            type="text"
            readOnly
            value={"P4$5W0rD!"}
            className="lg:w-[192px] md:w-[192px] lg:h-[42px] md:h-[42px] w-[144px] h-[32px] lg:pl-[32px] md:pl-[32px] pl-[16px] pt-[15px] lg:py-[19px] md:py-[19px] lg:text-headingL md:text-headingL text-headingM outline-none bg-darkGrey text-lightGrey"
          />
          <Button className="group">
            <svg width="21" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"
                className="fill-current text-neonGreen group-hover:text-lightGrey transition-colors duration-300 py-[28px]"
              />
            </svg>
          </Button>
        </div>
        
      </div>
    </div>
  );
};

export default PasswordGenerator;