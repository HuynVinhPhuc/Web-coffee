"use client";

import Banner from "@/components/layouts/Banner";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ImageSlider from "@/components/layouts/ImageSlider";
import moment from "moment/moment";

const HomePage = ({ orders }) => {

  const data = {};
  const [bestSelling, setBestSelling] = useState();

  useEffect(() => {
    getProductSalesMap();
  }, []);

  const getProductSalesMap = async () => {
    {orders?.orders?.map((order) => (
      getItemsOrder(order)
    ))}

    const orderItemsArray = Object.values(data);
    orderItemsArray.sort((a, b) => b.quantity - a.quantity);
  
    setBestSelling(orderItemsArray.slice(0, 3));
  };

  const getItemsOrder = (order) => {    
    if ( order?.createAt.split("T")[0] > moment().subtract(92, "days").format("YYYY-MM-DD")) {
      {order?.orderItems?.map((item) => (
      countProducts(item)
      ))}
    }     
  };

  const countProducts = (item) => {
    if (!data[item?.product]) {
      data[item?.product] = item;
    } else {
      data[item?.product].quantity =
        parseInt(item?.quantity) + parseInt(data[item?.product].quantity);
    }
  };

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
        <div className=" border border-gray-300">
          <div className="mx-5 my-5">
            <div className="flex flex-col justify-between md:flex-row flex-wrap">
              {bestSelling?.map((product) => (
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
                        <img src={product?.image} />
                      </div>
                    </div>
                    <div className="">
                      <div className=" mx-auto p-3">
                        <Link
                          href={`/product/${product.product}`}
                          className="hover:text-blue-600"
                        >
                          {product?.name}
                        </Link>
                        <p className="text-gray-500 mb-2 mt-2">
                          {product?.description.substring(0, 100)}...
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container max-w-screen-xl mx-auto my-40">
        <ImageSlider />
      </div>
    </>
  );
};

export default HomePage;
