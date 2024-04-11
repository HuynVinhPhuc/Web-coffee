"use client";

import AuthContext from "@/context/AuthContext";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const UpdateUser = ({ user }) => {
  const { error, updateUser, clearErrors, updated, setUpdated } =
    useContext(AuthContext);

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [role, setRole] = useState(user?.role);
  const [status, setStatus] = useState(user?.status);

  useEffect(() => {
    if (updated) {
      setUpdated(false);
      toast.success("Cập nhật người dùng thành công !!!");
    }

    if (error) {
      toast.error(error);
      clearErrors();
    }
  }, [error, updated]);

  const submitHandler = (e) => {
    e.preventDefault();

    const userData = { name, email, role, status };

    updateUser(user?._id, userData);
  };

  return (
    <div
      style={{ maxWidth: "480px" }}
      className="mt-1 mb-20 p-4 md:p-7 mx-auto rounded bg-white"
    >
      <form onSubmit={submitHandler}>
        <h2 className="mb-5 text-2xl font-semibold">Cập nhật người dùng</h2>

        <div className="mb-4">
          <label className="block mb-1"> Họ tên đầy đủ </label>
          <input
            className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
            type="text"
            placeholder="Nhập họ tên đầy đủ"
            value={name}
            readOnly
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1"> Địa chỉ Email </label>
          <input
            className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
            type="text"
            placeholder="Nhập địa chỉ email"
            value={email}
            readOnly
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div class="mb-4">
          <label class="block mb-1"> Vai trò </label>
          <div class="relative">
            <select
              class="block appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              name="category"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              {["user", "admin"].map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
            <i class="absolute inset-y-0 right-0 p-2 text-gray-400">
              <svg
                width="22"
                height="22"
                class="fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M7 10l5 5 5-5H7z"></path>
              </svg>
            </i>
          </div>
        </div>

        <div class="mb-4">
          <label class="block mb-1"> Trạng thái </label>
          <div class="relative">
            <select
              class="block appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              name="category"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              {["enable", "disable"].map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
            <i class="absolute inset-y-0 right-0 p-2 text-gray-400">
              <svg
                width="22"
                height="22"
                class="fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M7 10l5 5 5-5H7z"></path>
              </svg>
            </i>
          </div>
        </div>

        <button
          type="submit"
          className="my-2 px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
        >
          Cập nhật
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
