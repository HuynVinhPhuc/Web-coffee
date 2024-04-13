"use client";

import AuthContext from "@/context/AuthContext";
import CartContext from "@/context/CartContext";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import OrderContext from "@/context/OrderContext";
import { useRouter } from "next/navigation";
import moment from "moment";
import Link from "next/link";
import ProductContext from "@/context/ProductContext";

const CheckoutsResult = () => {
  const { cart, clearCart, cartOrder, addCartToCartOrder } =
    useContext(CartContext);
  const { updateProduct } = useContext(ProductContext);
  const { user } = useContext(AuthContext);
  let userOrder = user;
  const [paymentStatus, setPaymentStatus] = useState(
    "Thanh toán không thành công"
  );
  const [paymentOrderInfo, setPaymentOrderInfo] = useState();

  const router = useRouter();

  const { newOrder } = useContext(OrderContext);

  useEffect(() => {
    if (cartOrder?.cartItems == undefined) {
      addCartToCartOrder();
    }

    if (window.location.href.indexOf("delivery=true") !== -1) {
      setPaymentOrderInfo("Thanh toán khi nhận hàng");
      setPaymentStatus("Thanh toán khi nhận hàng");
    }
    if (
      window.location.href.indexOf("vnp_TransactionStatus") !== -1 ||
      window.location.href.indexOf("vnpay") !== -1
    ) {
      setPaymentOrderInfo("Thanh toán trực tuyến");
      if (
        window.location.href.indexOf("vnp_TransactionStatus=00") !== -1 ||
        window.location.href.indexOf("vnpay=true") !== -1
      ) {
        setPaymentStatus("Thanh toán thành công");
        console.log("do");
      }
      if (
        (window.location.href.indexOf("vnp_TransactionStatus") !== -1 &&
          window.location.href.indexOf("vnp_TransactionStatus=00") == -1) ||
        window.location.href.indexOf("vnpay=false") !== -1
      ) {
        setPaymentStatus("Thanh toán không thành công");
      }
    }

    if (
      cart?.cartItems !== undefined &&
      userOrder !== null &&
      (window.location.href.indexOf("vnp_TransactionStatus=00") !== -1 ||
        window.location.href.indexOf(`delivery=true&userid=${user._id}`) !==
          -1) &&
      paymentStatus !== "Thanh toán không thành công"
    ) {
      const data = {
        shippingInfo: cart?.checkoutInfo?.shippinginfo,
        user: userOrder?._id,
        orderItems: cart?.cartItems,
        paymentInfo: paymentOrderInfo,
        totalAmount:
          Number(cart?.checkoutInfo?.totalAmount) +
          Number(cart?.checkoutInfo?.deliveryCharges.toFixed(0)),
        deliveryCharges: cart?.checkoutInfo?.deliveryCharges,
      };

      {
        cart?.cartItems?.map((item) => updateStock(item));
      }

      newOrder(data);

      if (window.location.href.indexOf("vnp_TransactionStatus=00") !== -1) {
        router.replace("/shipping/checkoutresult?vnpay=true");
      }
      if (window.location.href.indexOf("delivery=true") !== -1) {
        router.replace("/shipping/checkoutresult?delivery=true");
      }
      clearCart();
    }

    if (
      window.location.href.indexOf("vnp_TransactionStatus") !== -1 &&
      window.location.href.indexOf("vnp_TransactionStatus=00") == -1
    ) {
      router.replace("/shipping/checkoutresult?vnpay=false");
    }
  }, [cart, userOrder]);

  const updateStock = (item) => {
    const updateData = {
      name: item?.name,
      description: item?.description,
      seller: item?.seller,
      price: item?.price,
      stock: item?.stock - item?.quantity,
      category: item?.category,
      discount: item?.discount,
    };
    updateProduct(updateData, item?.product, true);
  };

  return (
    <>
      <div className="container mx-auto max-w-screen-xl ">
        <h3 className="text-xl font-semibold my-5 pl-5">Đơn hàng của bạn</h3>
        <article className="p-3 lg:p-5 mb-5 bg-white border border-blue-600 rounded-md">
          <header className="lg:flex justify-between mb-4">
            <div className="mb-4 lg:mb-0">
              <p className="font-semibold">
                <span></span>
                {paymentStatus === "Thanh toán khi nhận hàng" ? (
                  <span className="text-yellow-500">
                    {paymentStatus.toUpperCase()}
                  </span>
                ) : paymentStatus === "Thanh toán không thành công" ? (
                  <span className="text-red-500">
                    {paymentStatus.toUpperCase()}
                  </span>
                ) : (
                  <span className="text-green-500">
                    {paymentStatus.toUpperCase()}
                  </span>
                )}
              </p>
              <p className="text-gray-500">{moment().format("YYYY-MM-DD")} </p>
            </div>
          </header>
          <div className="grid md:grid-cols-3 gap-2">
            <div>
              <p className="text-gray-400 mb-1">Người nhận</p>
              <ul className="text-gray-600">
                <li>{user?.name}</li>
                <li>
                  Số điện thoại:{" "}
                  {cartOrder?.checkoutInfo?.shippinginfo?.phoneNo}
                </li>
                <li>Địa chỉ Email: {user?.email}</li>
              </ul>
            </div>
            <div>
              <p className="text-gray-400 mb-1">Địa chỉ giao hàng</p>
              <ul className="text-gray-600">
                <li>
                  {cartOrder?.checkoutInfo?.shippinginfo?.city},{" "}
                  {cartOrder?.checkoutInfo?.shippinginfo?.district},{" "}
                  {cartOrder?.checkoutInfo?.shippinginfo?.ward}
                </li>
                <li>{cartOrder?.checkoutInfo?.shippinginfo?.street}</li>
              </ul>
            </div>
            <div>
              <p className="text-gray-400 mb-1">Thanh toán</p>
              <ul className="text-gray-600">
                <li>
                  Phí vận chuyển:{" "}
                  {(+cartOrder?.checkoutInfo?.deliveryCharges).toLocaleString()}
                  .000 VNĐ
                </li>
                <li>
                  Tổng tiền:{" "}
                  {(
                    Number(cartOrder?.checkoutInfo?.totalAmount) +
                    Number(cartOrder?.checkoutInfo?.deliveryCharges)
                  ).toLocaleString()}
                  .000 VNĐ
                </li>
              </ul>
            </div>
          </div>

          <hr className="my-4" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
            {cartOrder?.cartItems?.map((item) => (
              <figure className="flex flex-row mb-4">
                <div>
                  <div className="block w-20 h-20 rounded border border-gray-200 overflow-hidden p-3">
                    <Image
                      src={item?.image}
                      height="60"
                      width="60"
                      alt={item.name}
                    />
                  </div>
                </div>
                <figcaption className="ml-3">
                  <p>{item.name.substring(0, 35)}</p>
                  <p className="mt-1 font-semibold">
                    {item.quantity}x ={" "}
                    {
                      +(
                        (item.price - item.price * (item.discount / 100)) *
                        item.quantity
                      )
                        .toFixed(0)
                        .toLocaleString()
                    }
                    .000 VNĐ
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="flex justify-end">
            <Link
              href="/product"
              className="px-4 py-2 inline-block border border-transparent bg-gray-400 text-white rounded-md hover:bg-gray-500"
            >
              Trở về
            </Link>
            <Link
              href="/me/orders"
              className="mx-4 px-4 py-2 inline-block border border-transparent bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Danh sách đơn hàng
            </Link>
          </div>
        </article>
      </div>
    </>
  );
};

export default CheckoutsResult;
