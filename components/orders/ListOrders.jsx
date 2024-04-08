"use client";

import React, { useContext, useEffect } from "react";
import OrderItem from "./OrderItem";
import CustomPagination from "../layouts/CustomPagination";

const ListOrders = ({ orders }) => {
  return (
    <>
      <h3 className="text-xl font-semibold mb-5">Danh sách đơn hàng của bạn</h3>
      {orders?.orders?.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}

      <CustomPagination
        resPerPage={orders?.resPerPage}
        productsCount={orders?.ordersCount}
      />
    </>
  );
};

export default ListOrders;
