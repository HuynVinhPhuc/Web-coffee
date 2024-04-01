"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "Nền tảng mua sắm đáng tin cậy của bạn.",
      "Mang lại trải nghiệm sử dụng tốt nhất cho khách hàng.",
      "Giao hàng đúng thời gian theo yêu cầu.",
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="h-96 max-w-screen-2xl mx-auto flex flex-col justify-center items-center">
      <h1 className="pt-56 text-2xl md:text-4xl uppercase font-bold">
        CỬA HÀNG CÀ PHÊ TỐT NHẤT
      </h1>
      <p className="text-base md:text-lg font-semibold mt-2">
        {text} <Cursor cursorBlinking cursorStyle="|" cursorColor="#ffaa17" />
      </p>
    </div>
  );
};

export default Banner;
