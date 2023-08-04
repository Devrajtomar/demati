import {
  AiOutlineShoppingCart,
  AiFillShopping,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlinePercentage,
  AiFillStar,
} from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import { useSnapshot } from "valtio";
import { data } from "../states/states";

const Product = ({ product }) => {
  const cart = window.localStorage.getItem("cart");
  const oldcart = cart === "" ? [] : JSON.parse(cart);
  const wishlist = window.localStorage.getItem("wishlist");
  const oldwishlist = wishlist === "" ? [] : JSON.parse(wishlist);

  useSnapshot(data);
  const product_ = product;
  const name = product.title;
  const ID = product.id;
  const rating = product.rating;
  const image = product.thumbnail;
  const discount = product.discountPercentage;
  const brand = product.brand;
  const price = product.price;
  const sellPrice = price - price * (discount / 100);
  const AddCart = (productData) => {
    const newcart = [...oldcart, productData];
    console.log(newcart);

    data.cartItems.push(productData);
    window.localStorage.setItem("cart", JSON.stringify(newcart));
  };
  const AddWishlist = (productData) => {
    const newwishlist = [...oldwishlist, productData];
    console.log(newwishlist);

    data.wishlistItems.push(productData);
    window.localStorage.setItem("wishlist", JSON.stringify(newwishlist));
  };

  const RemoveCart = (id) => {
    console.log(cart);
    const indexToDelete = data.cartItems.findIndex((obj) => obj.id === id);
    data.cartItems.splice(indexToDelete, 1);

    const index = oldcart.findIndex((obj) => obj.id === id);
    oldcart.splice(index, 1);

    window.localStorage.setItem("cart", JSON.stringify(oldcart));
  };
  const RemoveWishlist = (id) => {
    console.log(wishlist);
    const indexToDelete = data.wishlistItems.findIndex((obj) => obj.id === id);
    data.wishlistItems.splice(indexToDelete, 1);

    const index = oldwishlist.findIndex((obj) => obj.id === id);
    oldwishlist.splice(index, 1);

    window.localStorage.setItem("wishlist", JSON.stringify(oldwishlist));
  };

  const matchCart = data.cartItems.find(
    (product) => product.id === product_.id,
  );

  const matchWishlist = oldwishlist.find(
    (product) => product.id === product_.id,
  );

  return (
    <div className="product">
      <div className="top">
        <div className="discount">
          {discount}
          <AiOutlinePercentage className="font-semibold" /> Off
        </div>
        <div className="rating">
          <AiFillStar className="font-semibold" color="orange" size={20} />
          {rating}
        </div>
      </div>
      <a href={`productDetail/${ID}`}>
        <div className="product_image">
          <img
            src={image}
            alt={name}
            className="object-fill w-full h-full rounded-md"
          />
        </div>
        <div className="product_description">
          <div className="description_name">{name}</div>
          <div className="description_price">
            <div className="original">
              <BiDollar size={17} fontWeight={100} />
              <div className="h-[1px] rounded-sm w-full absolute" />
              {price}
            </div>
            <div className="afterDiscount">
              <BiDollar size={17} fontWeight={100} />
              {parseInt(sellPrice)}
            </div>
          </div>
        </div>
      </a>
      <div className="icons">
        <div className="flex justify-between items-center px-1">
          <div className="flex items-center  gap-2 px-1 ">
            {matchCart ? (
              <AiFillShopping
                title="cart"
                className="icon"
                onClick={() => RemoveCart(product_.id)}
              />
            ) : (
              <AiOutlineShoppingCart
                title="cart"
                className="icon"
                onClick={() => AddCart(product_)}
              />
            )}
            {matchWishlist ? (
              <AiFillHeart
                title="wishlist"
                className="icon"
                onClick={() => RemoveWishlist(product_.id)}
              />
            ) : (
              <AiOutlineHeart
                title="wishlist"
                className="icon"
                onClick={() => AddWishlist(product_)}
              />
            )}
          </div>
        </div>
        <a className="btn" href={`/buy/prductID=${ID}/productName=${name}`}>
          Bye Now
        </a>
      </div>
    </div>
  );
};

export default Product;
