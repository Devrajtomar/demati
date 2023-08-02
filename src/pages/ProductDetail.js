import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  AiFillStar,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineStar,
} from "react-icons/ai";
import { useSnapshot } from "valtio";
import { productInfo } from "../states/states";
import { Footer, Product } from "../components";
import Rating from "react-rating";
import "../styles/productInfo.css";
import { BiDollar } from "react-icons/bi";

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  useSnapshot(productInfo);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };
    fetchProduct();
  }, []);
  console.log(product);
  if (product.length === 0) {
    return (
      <div className="loading_">
        <div className="loading-spinner"></div>
      </div>
    );
  }
  const i = productInfo.img;
  const title = product.title;
  const imgUrl = product.images[i];
  const ImgCount = product.images.length;
  const price = product.price;
  const category = product.category;
  const rating = product.rating;
  const discount = product.discountPercentage;
  const sellPrice = price - (price * discount) / 100;
  const description = product.description;
  const brand = product.brand;

  const dots = [];
  for (let i = 0; i < ImgCount; i++) {
    dots.push(i + 1);
  }
  return (
    <div className="mt-10 p-5 rounded-lg bg-gray-200">
      <a href="/" className="back_btn">
        <AiOutlineArrowLeft />
        &nbsp; {title}
      </a>
      <div className="ProductInfo">
        <div className="img">
          <img
            src={imgUrl}
            className=" rounded-lg w-full h-full object-cover"
          />
          <AiOutlineArrowLeft
            className="skip_icon left-0"
            onClick={() => productInfo.PrevImg(ImgCount)}
          />
          <AiOutlineArrowRight
            className="skip_icon right-0"
            onClick={() => productInfo.NextImg(ImgCount)}
          />
          <div className="dots">
            {dots.map((i) => (
              <div
                key={i}
                className="dot"
                onClick={() => productInfo.setImg(i - 1)}
              />
            ))}
          </div>
        </div>
        <div className="Details">
          <div className="Detail_Name">
            {title}&nbsp;from&nbsp;{brand}
          </div>
          <div className="heading_2">{category}</div>
          <div className="price">
            <div className="relative">
              <BiDollar size={20} />
              {price}
              <div className="absolute h-0.5 w-full bg-black" />
            </div>
            <div>
              <BiDollar size={20} />
              {parseInt(sellPrice)}
            </div>
          </div>
          <div className="rating">
            <Rating
              start={0}
              stop={5}
              readonly
              fractions={100}
              fullSymbol={<AiFillStar size={24} />}
              emptySymbol={<AiOutlineStar size={24} />}
              initialRating={rating}
            />
            {rating}
          </div>
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div className="otherData">
            <a href={`/brand/${brand}`} className="text-xl">
              {brand}
            </a>
          </div>
        </div>
      </div>
      {/* {variants.length != 0 && (
        <div>
          <h1 className="heading_1">Similer Products</h1>
          <div className="flex items-center justify-center gap-3 mb-4">
            {variants.map((products) => (
              <a
                key={products.id}
                href={` /productDetail/${products.id}`}
                className="bg-white  rounded-sm "
              >
                <h1 className="heading_2 w-full bg-white px-2 rounded-md text-black p-[auto] flex flex-col items-center justify-center gap-2">
                  <div>{products.colour}</div>
                  <hr className="bg-black" />
                  <div>{products.price.current.text}</div>
                </h1>
              </a>
            ))}
          </div>
        </div>
      )}*/}
      <Footer />
    </div>
  );
};

export default ProductDetail;
