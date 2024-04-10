"use client";

import React, { useRef, useContext, useEffect } from "react";
import StarRatings from "react-star-ratings";
import BreadCrumbs from "../layouts/BreadCrumbs";
import CartContext from "@/context/CartContext";
import NewReview from "../review/NewReview";
import OrderContext from "@/context/OrderContext";
import Reviews from "../review/Reviews";

const ProductDetails = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { canUserReview, canReview } = useContext(OrderContext);
  const imgRef = useRef(null);

  const setImgPreview = (url) => {
    imgRef.current.src = "https://" + url;
  };

  useEffect(() => {
    canUserReview(product?._id);
  }, []);

  const inStock = product?.stock >= 1;

  const addToCartHandler = () => {
    addItemToCart({
      product: product._id,
      name: product.name,
      price: product.price,
      image: "https://" + product.images[0].url,
      stock: product.stock,
      seller: product.seller,
      discount: product.discount,
    });
  };

  const breadCrumbs = [
    { name: "Trang Chủ", url: "/" },
    { name: "Sản Phẩm", url: "/product" },
    {
      name: `${product?.name?.substring(0, 100)}...`,
      url: `/products/${product?._id}`,
      key: product?._id,
    },
  ];

  return (
    <>
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <section className="bg-white py-10">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-5">
            <aside>
              <div className="border border-gray-200 shadow-sm p-3 text-center rounded mb-5">
                <img
                  ref={imgRef}
                  className="object-cover inline-block"
                  src={
                    "https://" +
                    (product?.images[0]
                      ? product?.images[0].url
                      : "res.cloudinary.com/huynvinhphuc/image/upload/v1711561942/Web-Coffee/Products/default_product.png")
                  }
                  alt="Product title"
                  width="340"
                  height="340"
                />
              </div>
              <div className="space-x-2 overflow-auto text-center whitespace-nowrap">
                {product?.images?.map((img) => (
                  <a
                    key={img.url}
                    className="inline-block border border-gray-200 p-1 rounded-md hover:border-blue-500 cursor-pointer"
                    onClick={() => setImgPreview(img?.url)}
                  >
                    <img
                      className="w-14 h-14"
                      src={"https://" + img.url}
                      alt="Product title"
                      width="500"
                      height="500"
                    />
                  </a>
                ))}
              </div>
            </aside>
            <main>
              <h2 className="font-semibold text-2xl mb-4">{product?.name}</h2>

              <div className="flex flex-wrap items-center space-x-2 mb-2">
                <div className="ratings mb-2">
                  <StarRatings
                    rating={product?.ratings}
                    starRatedColor="#ffb829"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="2px"
                    name="rating"
                  />
                </div>
                <span className="text-yellow-500">{product?.ratings}</span>

                <svg
                  width="6px"
                  height="6px"
                  viewBox="0 0 6 6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="3" cy="3" r="3" fill="#DBDBDB" />
                </svg>

                <span className="text-green-500">
                  <i className="fa fa-circle-check" />
                </span>
              </div>

              {product?.discount !== "0" ? (
                <>
                  <p className="mb-1 font-semibold text-sm text-[#666] line-through">
                    {product?.price}.000 VNĐ
                  </p>
                  <p className="mb-4 font-semibold text-xl">
                    {product?.price -
                      (product?.price * product?.discount) / 100}
                    .000 VNĐ
                  </p>
                </>
              ) : (
                <p className="mb-4 font-semibold text-xl">
                  {product?.price}.000 VNĐ
                </p>
              )}

              {/* <p className="mb-4 font-semibold text-xl">{product?.price}.000 VNĐ</p>

              {product.discount !== "0" && (
                <p className="font-semibold text-red-500">-{(product?.price * product?.discount / 100).toFixed(0)}.000 VNĐ</p>
              )} */}

              <p className="mb-4 text-gray-500">{product?.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                <button
                  className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                  onClick={addToCartHandler}
                  disabled={!inStock}
                >
                  <i className="fa fa-shopping-cart mr-2"></i>
                  Thêm vào giỏ
                </button>
              </div>

              <ul className="mb-5">
                <li className="mb-1">
                  {" "}
                  <b className="font-medium w-36 inline-block">Tình trạng</b>
                  {inStock ? (
                    <span className="text-green-500">Còn hàng</span>
                  ) : (
                    <span className="text-red-500">Hết hàng</span>
                  )}
                </li>
                <li className="mb-1">
                  {" "}
                  <b className="font-medium w-36 inline-block">Loại:</b>
                  <span className="text-gray-500">{product?.category}</span>
                </li>
                <li className="mb-1">
                  {" "}
                  <b className="font-medium w-36 inline-block">Hãng:</b>
                  <span className="text-gray-500">{product?.seller}</span>
                </li>
              </ul>
            </main>
          </div>

          {canReview && <NewReview product={product} />}
          <hr />

          <div className="font-semibold">
            <h1 className="text-gray-500 review-title mb-6 mt-10 text-2xl">
              Những đánh giá khác
            </h1>
            <Reviews reviews={product?.reviews} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
