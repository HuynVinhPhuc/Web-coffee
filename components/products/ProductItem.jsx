import React, { useContext } from "react";
import Link from "next/link";
import StarRatings from "react-star-ratings";
import Image from "next/image";
import CartContext from "@/context/CartContext";

const ProductItem = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);

  const addToCartHandler = () => {
    addItemToCart({
      product: product._id,
      name: product.name,
      price: product.price,
      image: "https://" + product.images[0].url,
      stock: product.stock,
      seller: product.seller,
      discount: product.discount,
      description: product.description,
      category: product.category,
    });
  };

  return (
    <article className="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 flex py-5 pl-6">
          <div
            style={{
              width: "80%",
              height: "70%",
              position: "relative",
            }}
          >
            <Image
              src={
                "https://" +
                (product?.images[0]
                  ? product?.images[0].url
                  : "res.cloudinary.com/huynvinhphuc/image/upload/v1711561942/Web-Coffee/Products/default_product.png")
              }
              alt="product anme"
              height="240"
              width="240"
            />
          </div>
        </div>
        <div className="md:w-2/4">
          <div className="p-4">
            <Link
              href={`/product/${product._id}`}
              className="hover:text-blue-600"
            >
              {product.name}
            </Link>
            <div className="flex flex-wrap items-center space-x-2 mb-2">
              <div className="ratings">
                <div className="my-1">
                  <StarRatings
                    rating={product?.ratings}
                    starRatedColor="#ffb829"
                    numberOfStars={5}
                    starDimension="18px"
                    starSpacing="1px"
                    name="rating"
                  />
                </div>
              </div>
              <b className="text-gray-300 pt-1">•</b>
              <span className="ml-1 text-yellow-500 pt-1.5">
                {product?.ratings}
              </span>
            </div>
            <p className="text-gray-500 mb-2">
              {product?.description.substring(0, 150)}...
            </p>
          </div>
        </div>
        <div className="md:w-1/4 border-t lg:border-t-0 lg:border-l border-gray-200">
          <div className="p-5">
            {product?.discount !== "0" ? (
              <>
                <span className="text-sm font-semibold text-[#666] line-through">
                  {(+product?.price).toLocaleString()}.000 VNĐ
                </span>
                <br />
                <span className="text-xl font-semibold text-red-600">
                  {(+(
                    product?.price -
                    (product?.price * product?.discount) / 100
                  ).toFixed(0)).toLocaleString()}
                  .000 VNĐ
                </span>
              </>
            ) : (
              <span className="text-xl font-semibold text-black">
                {(+product?.price).toLocaleString()}.000 VNĐ
              </span>
            )}
            {/* <span className="text-xl font-semibold text-black">
              {product?.price}.000 VNĐ
            </span>

            {product?.discount !== "0" && (
              <p className="font-semibold text-red-500">
                -{((product?.price * product?.discount) / 100).toFixed(0)}.000
                VNĐ
              </p>
            )} */}
            <div className="my-3">
              <a
                className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 cursor-pointer"
                onClick={addToCartHandler}
              >
                {" "}
                Thêm vào giỏ{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductItem;
