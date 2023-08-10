import { Footer, Product } from "../components";
import "../styles/cart.css";
import { data } from "../states/states";
const Wishlist = () => {
  const wishlist = window.localStorage.getItem("wishlist");
  console.log(wishlist);
  const wishlistItems = JSON.parse(wishlist);
  console.log(wishlistItems);
  return (
    <div className="Cart">
      <h1 className="heading_1">Your Wishlist</h1>
      <div className="products">
        {data.wishlistItems.length === 0 ? (
          <h1 className="h-[300px] w-full flex items-center justify-center text-5xl">
            No items added in Your Wishlist.
          </h1>
        ) : (
          wishlistItems.map((product) => {
            console.log(product);
            return <Product product={product} />;
          })
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
