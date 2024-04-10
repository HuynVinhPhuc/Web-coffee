"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { images } from "@/context/ImageSlider";

function ImageSlider() {
  return (
    <>
      <section className="py-12">
        <div className="container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            navigation={false}
            pagination={{ type: "fraction" }}
            onSwiper={(swiper) => console.log(swiper)}
            className="h-full w-full rounded-lg"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex h-full w-full items-center justify-center">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="block object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default ImageSlider;
