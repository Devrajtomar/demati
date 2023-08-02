import React from "react";
import {
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

const menuItems = [
  { name: "Home", icon: <AiOutlineHome />, to: "/" },
  { name: "Cart", icon: <AiOutlineShoppingCart />, to: "/cart" },
  { name: "Wishlist", icon: <AiOutlineHeart />, to: "/wishlist" },
  { name: "Account", icon: <AiOutlineUser />, to: "/account" },
];

export default menuItems;
