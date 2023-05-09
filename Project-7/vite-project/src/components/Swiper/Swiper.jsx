import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export default function Swiper1(props) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div
            data-aos="zoom-out-down"
            className=" flex flex-col gap-[11px]"
          >
            <div className="flex flex-col gap-[19px] items-center">
              <img src={props.img} alt="" />
              <h1 className="text-center">Сниженное загрязнение</h1>
            </div>
            <p className="text-center text-[#72787D]">
              При оптимизации логистики требуется меньше поездок, что приводит к
              снижению выбросов CO2. Выбрасываемый CO2 контролируется, что
              позволяет ставить цели и вносить ощутимые улучшения.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div data-aos="zoom-out-down" className=" flex flex-col gap-[11px]">
            <div className="flex flex-col gap-[19px] items-center">
              <img src={props.img} alt="" />
              <h1 className="text-center">Сниженное загрязнение</h1>
            </div>
            <p className="text-center text-[#72787D]">При оптимизации логистики требуется меньше поездок, что приводит к снижению выбросов CO2. Выбрасываемый CO2 контролируется, что позволяет ставить цели и вносить ощутимые улучшения.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div data-aos="zoom-out-down" className=" flex flex-col gap-[11px]">
            <div className="flex flex-col gap-[19px] items-center">
              <img src={props.img} alt="" />
              <h1 className="text-center">Сниженное загрязнение</h1>
            </div>
            <p className="text-center text-[#72787D]">При оптимизации логистики требуется меньше поездок, что приводит к снижению выбросов CO2. Выбрасываемый CO2 контролируется, что позволяет ставить цели и вносить ощутимые улучшения.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div data-aos="zoom-out-down" className=" flex flex-col gap-[11px]">
            <div className="flex flex-col gap-[19px] items-center">
              <img src={props.img} alt="" />
              <h1 className="text-center">"Сниженное загрязнение"</h1>
            </div>
            <p className="text-center text-[#72787D]">При оптимизации логистики требуется меньше поездок, что приводит к снижению выбросов CO2. Выбрасываемый CO2 контролируется, что позволяет ставить цели и вносить ощутимые улучшения.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div data-aos="zoom-out-down" className=" flex flex-col gap-[11px]">
            <div className="flex flex-col gap-[19px] items-center">
              <img src={props.img} alt="" />
              <h1 className="text-center">Сниженное загрязнение</h1>
            </div>
            <p className="text-center text-[#72787D]">При оптимизации логистики требуется меньше поездок, что приводит к снижению выбросов CO2. Выбрасываемый CO2 контролируется, что позволяет ставить цели и вносить ощутимые улучшения.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div data-aos="zoom-out-down" className=" flex flex-col gap-[11px]">
            <div className="flex flex-col gap-[19px] items-center">
              <img src={props.img} alt="" />
              <h1 className="text-center">Сниженное загрязнение</h1>
            </div>
            <p className="text-center text-[#72787D]">При оптимизации логистики требуется меньше поездок, что приводит к снижению выбросов CO2. Выбрасываемый CO2 контролируется, что позволяет ставить цели и вносить ощутимые улучшения.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
