"use client";

import React, { useState, useContext, useEffect } from "react";

import Sidebar from "../layouts/Sidebar";
import AuthContext from "@/context/AuthContext";
import { toast } from "react-toastify";
import axios from "axios";

const NewAddress = () => {
  const { error, addNewAddress, clearErrors, updated, setUpdated } =
    useContext(AuthContext);

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [street, setStreet] = useState("");

  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json"
        );
        setCities(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();

    if (updated) {
      setUpdated(false);
      toast.success("Thêm địa chỉ thành công !!!");
    }

    if (error) {
      toast.error(error);
      clearErrors();
    }
  }, [error, updated]);

  const handleCityChange = (e) => {
    const cityName = e.target.value;
    setCity(cityName);
    setDistrict("");
    setWard("");
    if (cityName !== "") {
      const selectedCityData = cities.find((city) => city.Name === cityName);
      setDistricts(selectedCityData.Districts);
    } else {
      setDistricts([]);
      setWards([]);
    }
  };

  const handleDistrictChange = (e) => {
    const districtName = e.target.value;
    setDistrict(districtName);
    setWard("");
    if (districtName !== "") {
      const selectedCityData = cities.find(
        (selectedCity) => selectedCity.Name === city
      );
      const selectedDistrictData = selectedCityData.Districts.find(
        (district) => district.Name === districtName
      );
      setWards(selectedDistrictData.Wards);
    } else {
      setWards([]);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newAddress = {
      name,
      city,
      district,
      phoneNo,
      ward,
      street,
    };

    if (phoneNo.length !== 10) {
      toast.error("Hãy nhập số điện thoại hợp lệ !!!");
    } else {
      addNewAddress(newAddress);
    }
  };

  return (
    <>
      <section className="py-10">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row -mx-4">
            <Sidebar />
            <main className="md:w-2/3 lg:w-3/4 px-4">
              <div
                style={{ maxWidth: "480px" }}
                className="mt-1 mb-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg"
              >
                <form onSubmit={submitHandler}>
                  <h2 className="mb-5 text-2xl font-semibold">
                    Thêm địa chỉ mới
                  </h2>

                  <div className="mb-4 md:col-span-2">
                    <label className="block mb-1"> Tên địa chỉ </label>
                    <input
                      className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                      type="text"
                      placeholder="Nhập tên địa chỉ"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-x-3">
                    <div className="mb-4 md:col-span-1">
                      <label className="block mb-1"> Tỉnh thành </label>
                      <select
                        className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                        value={city}
                        onChange={(e) => {
                          setCity(e.target.value);
                          handleCityChange(e);
                        }}
                      >
                        <option value="">Chọn tỉnh thành</option>
                        {cities.map((city) => (
                          <option key={city.Name} value={city.Name}>
                            {city.Name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-4 md:col-span-1">
                      <label className="block mb-1"> Quận huyện </label>
                      <select
                        className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                        value={district}
                        onChange={(e) => {
                          setDistrict(e.target.value);
                          handleDistrictChange(e);
                        }}
                      >
                        <option value="">Chọn quận huyện</option>
                        {districts.map((district) => (
                          <option key={district.Name} value={district.Name}>
                            {district.Name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-x-2">
                    <div className="mb-4 md:col-span-1">
                      <label className="block mb-1"> Phường xã </label>
                      <select
                        className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                        value={ward}
                        onChange={(e) => setWard(e.target.value)}
                      >
                        <option value="">Chọn phường xã</option>
                        {wards.map((ward) => (
                          <option key={ward.Name} value={ward.Name}>
                            {ward.Name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-4 md:col-span-1">
                      <label className="block mb-1"> Số điện thoại </label>
                      <input
                        className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                        type="number"
                        placeholder="Nhập số điện thoại"
                        value={phoneNo}
                        onChange={(e) => setPhoneNo(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="mb-4 md:col-span-2">
                    <label className="block mb-1"> Đường và số nhà </label>
                    <input
                      className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                      type="text"
                      placeholder="Nhập đường và số nhà"
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="my-2 px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                  >
                    Thêm
                  </button>
                </form>
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewAddress;
