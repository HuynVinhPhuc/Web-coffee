"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5 ">
          <ul>
            <p className="text-gray-800 font-bold text-3xl pb-6">
              Espresso<span className="text-blue-600">Hub</span>
            </p>
            <div className="flex gap-6 pb-5">
              <div className="text-2xl cursor-pointer hover:text-yellow-600">
                <a href="https://www.instagram.com/">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
              <div className="text-2xl cursor-pointer hover:text-blue-600">
                <a href="https://twitter.com/">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
              <div className="text-2xl cursor-pointer hover:text-blue-600">
                <a href="https://www.linkedin.com/">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
              <div className="text-2xl cursor-pointer hover:text-red-600">
                <a href="https://www.youtube.com/">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Sản phẩm</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href={"/product?category=Nguyên+hạt"}>
                Cà phê Nguyên hạt
              </Link>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href={"/product?category=Xay+hạt+lớn"}>Cà phê Xay hạt</Link>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href={"/product?category=Bột+cà+phê"}>Cà phê Bột</Link>
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">
              Liên kết nhanh
            </p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href={"/about"}>Về chúng tôi</Link>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href={"/product"}>Sản phẩm</Link>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href={"/contact"}>Liên hệ</Link>
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Địa chỉ</p>
            <li className="text-gray-500 text-md pb-5 font-semibold ">
              <i className="fa fa-location-dot mr-1"></i>
              Liên hệ
            </li>
            <li className="text-gray-500 text-xs pb-2 font-semibold ">
              178/9B Lý Chính Thắng <br />
              Ninh Kiều, Cần Thơ.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
        <h1 className=" text-gray-800 font-semibold">
          © 2024 Bản quyền thuộc về tổng công cty B&P. Cấm sao chép dưới mọi
          hình thức nếu không có sự chấp thuận bằng văn bản | Được xây dựng bằng
          ❤💩 bởi{" "}
          <span className="hover:text-blue-600 font-semibold cursor-pointer">
            B&P{" "}
          </span>
        </h1>
      </div>
    </>
  );
};

export default Footer;
