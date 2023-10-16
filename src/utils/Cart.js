import { data } from "../states/states";

const cart = window.localStorage.getItem("cart");
const cartItems = cart === "" ? [] : JSON.parse(cart);

export const AddCart = (product) => {
  cartItems.push(product);

  window.localStorage.setItem("cart", JSON.stringify([...cartItems]));
};
export const RemoveCart = (id) => {
  const index = cartItems.findIndex((obj) => obj.id === id);

  cartItems.splice(index, 1);

  window.localStorage.setItem("cart", JSON.stringify(cartItems));
};
