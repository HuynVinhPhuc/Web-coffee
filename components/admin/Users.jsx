"use client";

import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import CustomPagination from "../layouts/CustomPagination";
import AuthContext from "@/context/AuthContext";
import CloseDialog from "../layouts/CloseDialog";

const Users = ({ data }) => {
  const { error, deleteUser, clearErrors } = useContext(AuthContext);

  const [showDialog, setShowDialog] = useState(false);
  const [deleteId, setDeleteId] = useState();

  useEffect(() => {
    if (error) {
      toast.error(error);
      clearErrors();
    }
  }, [error]);

  const deleteHandler = (id) => {
    setDeleteId(id);
    setShowDialog(true);
  };

  const confirmDialog = () => {
    setShowDialog(false);
    if (deleteId) {
      deleteUser(deleteId);
      setDeleteId(null);
    }
  };

  const cancel = () => {
    setShowDialog(false);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <h1 className="text-3xl my-5 ml-4 font-bold">
        {data?.usersCount} Người dùng
      </h1>
      <table className="w-full text-sm text-left">
        <thead className="text-l text-gray-700 uppercase">
          <tr>
            <th scope="col" className="px-6 py-3">
              Tên người dùng
            </th>
            <th scope="col" className="px-6 py-3">
              Địa chỉ Email
            </th>
            <th scope="col" className="px-6 py-3">
              Vai trò
            </th>
            <th scope="col" className="px-6 py-3">
              Hành động
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.users?.map((user) => (
            <tr key={user?._id} className="bg-white">
              <td className="px-6 py-2">{user?.name}</td>
              <td className="px-6 py-2">{user?.email}</td>
              <td className="px-6 py-2">{user?.role}</td>
              <td className="px-6 py-2">
                <div>
                  <Link
                    href={`/admin/users/${user?._id}`}
                    className="px-2 py-2 inline-block text-yellow-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer mr-2"
                  >
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                  </Link>
                  <a
                    className="px-2 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer"
                    onClick={() => deleteHandler(user?._id)}
                  >
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </a>
                </div>
              </td>
            </tr>
          ))}
          <CloseDialog
            show={showDialog}
            title={"Bạn có chắc ?"}
            message={"Bạn có muốn xoá người dùng này không ?"}
            confirm={confirmDialog}
            cancel={cancel}
          />
        </tbody>
      </table>
      {data?.usersCount > data?.resPerPage && (
        <div className="mb-6">
          <CustomPagination
            resPerPage={data?.resPerPage}
            productsCount={data?.usersCount}
          />
        </div>
      )}
    </div>
  );
};

export default Users;
