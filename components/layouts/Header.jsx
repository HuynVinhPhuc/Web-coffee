"use client";

import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Search from "./Search";
import CartContext from "@/context/CartContext";
import { useSession } from "next-auth/react";
import AuthContext from "@/context/AuthContext";
import { signOut } from "next-auth/react";

const Header = () => {
  const { user, setUser } = useContext(AuthContext);

  const { data } = useSession();

  useEffect(() => {
    if (data) {
      setUser(data?.user);
    }
  }, [data]);

  const { cart } = useContext(CartContext);
  const cartItems = cart?.cartItems;

  const logoutHandler = () => {
    signOut();
  };

  const [navResponesive, setNavResponsive] = useState(false);
  const toggleNavResponsive = () => {
    setNavResponsive(!navResponesive);
  };

  return (
    <>
      <header className="bg-white py-2 border-b">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-content-between">
            <div className="flex-shrink-0 mr-5">
              <a href="/">
                <img
                  src="/images/logo.png"
                  style={{ height: "50px", width: "60px" }}
                  height="40"
                  width="120"
                  alt="BuyItNow"
                />
              </a>
            </div>

            <div className="mx-3 hidden lg:block">
              <Link
                href={"/"}
                className="font-medium px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm rounded-md hover:bg-gray-100 hover:border-gray-300"
              >
                <span>Trang chủ</span>
              </Link>
              <Link
                href={"/about"}
                className="font-medium px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm rounded-md hover:bg-gray-100 hover:border-gray-300"
              >
                <span>Giới thiệu</span>
              </Link>
              <Link
                href={"/product"}
                className="font-medium px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm rounded-md hover:bg-gray-100 hover:border-gray-300"
              >
                <span>Sản phẩm</span>
              </Link>
              <Link
                href={"/contact"}
                className="font-medium px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm rounded-md hover:bg-gray-100 hover:border-gray-300"
              >
                <span>Liên hệ</span>
              </Link>
            </div>

            <Search />

            <div className="flex items-center space-x-2 ml-auto">
              <Link
                href="/cart"
                className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
              >
                <i className="text-gray-400 w-5 fa fa-shopping-cart"></i>
                <span className="hidden lg:inline ml-1">
                  {/* Giỏ hàng  */}(<b>{cartItems?.length || 0}</b>)
                </span>
              </Link>

              {!user ? (
                <Link
                  href="/login"
                  className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
                >
                  <i className="text-gray-400 w-5 fa fa-user"></i>
                  <span className="hidden lg:inline ml-1">Đăng nhập</span>
                </Link>
              ) : (
                <Link href="/me" className="relative group">
                  <div className="flex items-center mb-4 space-x-3 mt-4 cursor-pointer rounded-md">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={
                        user?.avatar
                          ? user?.avatar?.url
                          : "./images/default.png"
                      }
                    />
                    <div className="space-y-1 font-medium">
                      <p>
                        {user?.name}
                        <time className="block text-xs text-gray-500 dark:text-gray-400">
                          {user?.email}
                        </time>
                      </p>
                    </div>
                  </div>
                  <div className="divide-y divide-gray-100 rounded-lg shadow w-44 absolute z-10 hidden bg-grey-200 group-hover:block">
                    <div className="block px-4 py-2 bg-white hover:bg-gray-100">
                      <Link href="/me">Cá nhân</Link>
                    </div>

                    <div className="block px-4 py-2 bg-white hover:bg-gray-100">
                      <a onClick={logoutHandler}>Đăng xuất</a>
                    </div>
                  </div>
                </Link>
              )}
            </div>

            <div className="lg:hidden ml-2">
              <button
                type="button"
                className="bg-white p-3 inline-flex items-center rounded-md text-black hover:bg-gray-200 hover:text-gray-800 border border-transparent"
                onClick={toggleNavResponsive}
              >
                {navResponesive ? (
                  <i className="fa fa-x fa-lg"></i>
                ) : (
                  <>
                    <span className="sr-only">Open menu</span>
                    <i className="fa fa-bars fa-lg"></i>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
      {navResponesive && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href={"/"}
              className="font-medium px-3 py-2 block text-center text-gray-700 bg-white shadow-sm rounded-md hover:bg-gray-100 hover:border-gray-300"
            >
              <span>Trang chủ</span>
            </Link>
            <Link
              href={"/about"}
              className="font-medium px-3 py-2 block text-center text-gray-700 bg-white shadow-sm rounded-md hover:bg-gray-100 hover:border-gray-300"
            >
              <span>Giới thiệu</span>
            </Link>
            <Link
              href={"/product"}
              className="font-medium px-3 py-2 block text-center text-gray-700 bg-white shadow-sm rounded-md hover:bg-gray-100 hover:border-gray-300"
            >
              <span>Sản phẩm</span>
            </Link>
            <Link
              href={"/contact"}
              className="font-medium px-3 py-2 block text-center text-gray-700 bg-white shadow-sm rounded-md hover:bg-gray-100 hover:border-gray-300"
            >
              <span>Liên hệ</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
