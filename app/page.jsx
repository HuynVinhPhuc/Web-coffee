import Banner from "@/components/layouts/Banner";
import React from "react";
import Link from "next/link";
import ImageSlider from "@/components/layouts/ImageSlider";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen bg-banner-bg bg-center">
        <div className="w-full h-full bg-black opacity-80 text-white">
          <Banner />
        </div>
      </div>
      <div className="container max-w-screen-xl mx-auto px-4 mt-20 ">
        <div className="mb-20 font-semibold text-3xl md:text-5xl text-center">
          Các sản phẩm bán chạy
        </div>
        <div className="flex flex-col justify-between md:flex-row flex-wrap">
          <article className="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5 mr-5 flex max-w-fit md:w-1/4 hover:bg-gray-100 hover:border-gray-300">
            <div className="flex flex-col max-w-max ">
              <div className=" flex p-3 ">
                <div
                  style={{
                    width: "80%",
                    height: "70%",
                    position: "relative",
                  }}
                  className="mx-auto"
                >
                  <img src="/images/default_product.png" />
                </div>
              </div>
              <div className="">
                <div className=" mx-auto p-3">
                  <Link href={"/product"} className="hover:text-blue-600">
                    Product 1
                  </Link>
                  <p className="text-gray-500 mb-2 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium, autem.
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article className="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5 mr-5 flex max-w-fit md:w-1/4 hover:bg-gray-100 hover:border-gray-300">
            <div className="flex flex-col max-w-max ">
              <div className=" flex p-3 ">
                <div
                  style={{
                    width: "80%",
                    height: "70%",
                    position: "relative",
                  }}
                  className="mx-auto"
                >
                  <img src="/images/default_product.png" />
                </div>
              </div>
              <div className="">
                <div className=" mx-auto p-3">
                  <Link href={"/product"} className="hover:text-blue-600">
                    Product 1
                  </Link>
                  <p className="text-gray-500 mb-2 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium, autem.
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article className="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5 mr-5 flex max-w-fit md:w-1/4 hover:bg-gray-100 hover:border-gray-300">
            <div className="flex flex-col max-w-max ">
              <div className=" flex p-3 ">
                <div
                  style={{
                    width: "80%",
                    height: "70%",
                    position: "relative",
                  }}
                  className="mx-auto"
                >
                  <img src="/images/default_product.png" />
                </div>
              </div>
              <div className="">
                <div className=" mx-auto p-3">
                  <Link href={"/product"} className="hover:text-blue-600">
                    Product 1
                  </Link>
                  <p className="text-gray-500 mb-2 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium, autem.
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article className="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5 mr-5 flex max-w-fit md:w-1/4 hover:bg-gray-100 hover:border-gray-300">
            <div className="flex flex-col max-w-max ">
              <div className=" flex p-3 ">
                <div
                  style={{
                    width: "80%",
                    height: "70%",
                    position: "relative",
                  }}
                  className="mx-auto"
                >
                  <img src="/images/default_product.png" />
                </div>
              </div>
              <div className="">
                <div className=" mx-auto p-3">
                  <Link href={"/product"} className="hover:text-blue-600">
                    Product 1
                  </Link>
                  <p className="text-gray-500 mb-2 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium, autem.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="container max-w-screen-xl mx-auto my-40">
        <ImageSlider />
      </div>
    </>
  );
}
