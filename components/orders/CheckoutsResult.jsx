"use client";

import AuthContext from "@/context/AuthContext";
import CartContext from "@/context/CartContext";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import OrderContext from "@/context/OrderContext";
import { useRouter } from "next/navigation";

const CheckoutsResult = () => {

  const { cart, clearCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  let userOrder = user;
  const [paymentStatus, setPaymentStatus] = useState("Thanh toán không thành công");
  const [paymentOrderInfo, setPaymentOrderInfo] = useState();

  const router = useRouter();

  const { newOrder } = useContext(OrderContext);

  useEffect(() => { 
    
      if (window.location.href.indexOf('delivery') !== -1){
        setPaymentOrderInfo("Thanh toán khi nhận hàng");  
        setPaymentStatus("Thanh toán khi nhận hàng");                 
      } 
      if (window.location.href.indexOf('vnp_TransactionStatus=00') !== -1) {
        setPaymentOrderInfo("Thanh toán trực tuyến");  
        setPaymentStatus("Thanh toán thành công");
      }
    
      if (cart?.cartItems !== undefined && userOrder !== null && (window.location.href.indexOf('vnp_TransactionStatus=00') !== -1 || window.location.href.indexOf('delivery') !== -1) && paymentStatus !== "Thanh toán không thành công") {

        const data = {
          shippingInfo: cart?.checkoutInfo?.shippinginfo,
          user: userOrder?._id,
          orderItems: cart?.cartItems,
          paymentInfo: paymentOrderInfo,
          totalAmount: Number(cart?.checkoutInfo?.totalAmount) + Number(cart?.checkoutInfo?.deliveryCharges.toFixed(0)),
          deliveryCharges: cart?.checkoutInfo?.deliveryCharges,
        };

        newOrder(data);
        
        router.replace("/shipping/checkoutresult");
        //clearCart();
      }
  }, [cart, userOrder]);

  return (
    <>
      <h3 className="text-xl font-semibold mb-5">Your Orders</h3>
      <article className="p-3 lg:p-5 mb-5 bg-white border border-blue-600 rounded-md">
        <header className="lg:flex justify-between mb-4">
          <div className="mb-4 lg:mb-0">
            <p className="font-semibold">
              <span></span>
              {paymentStatus === "Thanh toán khi nhận hàng" ? (
                <span className="text-yellow-500">
                  {paymentStatus.toUpperCase()}
                </span>
              ) : (
                paymentStatus === "Thanh toán không thành công" ? (
                  <span className="text-red-500">
                    {paymentStatus.toUpperCase()}
                  </span>
                ) : (
                  <span className="text-green-500">
                    {paymentStatus.toUpperCase()}
                  </span>
                )
              )}
            </p>
            <p className="text-gray-500">Ngày tháng</p>
          </div>
        </header>
        <div className="grid md:grid-cols-3 gap-2">
          <div>
            <p className="text-gray-400 mb-1">Person</p>
            <ul className="text-gray-600">
              <li>{user?.name}</li>
              <li>Phone: {cart?.checkoutInfo?.shippinginfo?.phoneNo}</li>
              <li>Email: {user?.email}</li>
            </ul>
          </div>
          <div>
            <p className="text-gray-400 mb-1">Delivery address</p>
            <ul className="text-gray-600">
              <li>{cart?.checkoutInfo?.shippinginfo?.street}</li>
              <li>Orlando, FL, 12345</li>
              <li>US</li>
            </ul>
          </div>
          <div>
            <p className="text-gray-400 mb-1">Payment</p>
            <ul className="text-gray-600">
              <li className="text-green-400">PAID</li>
              <li>Phí vận chuyển: {cart?.checkoutInfo?.deliveryCharges.toFixed(0)}.000 VNĐ</li>
              <li>Tổng tiền: {Number(cart?.checkoutInfo?.totalAmount) + Number(cart?.checkoutInfo?.deliveryCharges.toFixed(0))}.000 VNĐ</li>
            </ul>
          </div>
        </div>

        <hr className="my-4" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
          {cart?.cartItems?.map((item) => (
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
                  {item.quantity}x = ${item.price * item.quantity}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </article>
    </>
  );
};

export default CheckoutsResult;
