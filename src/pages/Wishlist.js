import { Footer, Product } from "../components";
import "../styles/cart.css";
import { data } from "../states/states";
const Wishlist = () => {
  return (
    <div className="Cart">
      <h1 className="heading_1">Your Cart</h1>
      <div className="products">
        {data.wishlistItems.length === 0 ? (
          <h1 className="h-[300px] w-full flex items-center justify-center text-5xl">
            No items added in Your Wishlist.
          </h1>
        ) : (
          data.wishlistItems.map((product) => {
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
