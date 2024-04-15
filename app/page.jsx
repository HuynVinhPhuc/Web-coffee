import axios from "axios";
import React from "react";

import queryString from "query-string";
import HomePage from "@/components/home/HomePage";

const getOrders = async (searchParams) => {

  const urlParams = {
    page: searchParams.page || 1,
  };

  const searchQuery = queryString.stringify(urlParams);

  const { data } = await axios.get(
    `${process.env.API_URL}/api/home/orders?${searchQuery}`
  );

  return data;
};

const Home = async ({ searchParams }) => {
  const orders = await getOrders(searchParams);

  return <HomePage orders={orders} />;
};

export default Home;
