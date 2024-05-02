import React from "react";
import Image from "next/image";

const OrderItem = ({ order }) => {
  return (
    <article className="p-3 lg:p-5 mb-5 bg-white border border-blue-600 rounded-md">
      <header className="lg:flex justify-between mb-4">
        <div className="mb-4 lg:mb-0">
          <p className="font-semibold">
            <span>ID đơn hàng: {order?._id} </span>
            {order?.orderStatus == "Đang xử lý" ? (
              <span className="text-red-500">
                • {order?.orderStatus.toUpperCase()}
              </span>
            ) : (
              <span className="text-green-500">
                • {order?.orderStatus.toUpperCase()}
              </span>
            )}
          </p>
          <p className="font-semibold ">
            Phương thức thanh toán:{" "}
            <span className="font-normal text-[#666]">
              {order?.paymentInfo === "Thanh toán khi nhận hàng" ? (
                <span className="text-yellow-500">
                  {order?.paymentInfo.toUpperCase()}
                </span>
              ) : order?.paymentInfo === "Thanh toán không thành công" ? (
                <span className="text-red-500">
                  {order?.paymentInfo.toUpperCase()}
                </span>
              ) : (
                <span className="text-green-500">
                  {order?.paymentInfo.toUpperCase()}
                </span>
              )}
              .
            </span>
          </p>
          <p className="text-gray-500">{order?.createAt?.substring(0, 10)} </p>
        </div>
      </header>
      <div className="grid md:grid-cols-3 gap-2">
        <div>
          <p className="text-gray-400 mb-1">Người nhận</p>
          <ul className="text-gray-600">
            <li>{order?.user?.name}</li>
            <li>Số điện thoại: {order?.shippingInfo?.phoneNo}</li>
            <li>Địa chỉ Email: {order?.user?.email}</li>
          </ul>
        </div>
        <div>
          <p className="text-gray-400 mb-1">Địa chỉ giao hàng</p>
          <ul className="text-gray-600">
            <li>
              {order?.shippingInfo?.city}, {order?.shippingInfo?.district},{" "}
              {order?.shippingInfo?.ward}
            </li>
            <li>{order?.shippingInfo?.street}</li>
          </ul>
        </div>
        <div>
          <p className="text-gray-400 mb-1">Thanh toán</p>
          <ul className="text-gray-600">
            <li className="text-green-400">
              {order?.paymentInfo?.status?.toUpperCase()}
            </li>
            <li>
              Phí vận chuyển: {(+order?.deliveryCharges).toLocaleString()}.000
              VNĐ
            </li>
            <li>Tổng tiền: {(+order?.totalAmount).toLocaleString()}.000 VNĐ</li>
          </ul>
        </div>
      </div>

      <hr className="my-4" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {order?.orderItems?.map((item) => (
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
    </article>
  );
};

export default OrderItem;
