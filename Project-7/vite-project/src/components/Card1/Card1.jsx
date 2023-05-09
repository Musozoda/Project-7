import React from "react";

const Card1 = (props) => {
  return (
      <div data-aos="zoom-out-right" className="flex flex-col gap-[10px] items-center max-w-[325px]">
          <div className="flex flex-col gap-[20px] items-center">
            <img src={props.img} alt="" />
            <h1 className="text-center">{props.h1}</h1>
          </div>
          <p className="text-center text-[#72787D]">{props.p}</p>
      </div>
  );
};

export default Card1;
