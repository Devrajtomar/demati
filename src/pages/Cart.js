import { Footer, Product } from "../components";
import "../styles/cart.css";
import { data } from "../states/states";
const Cart = () => {
  return (
    <div className="Cart">
      <h1 className="heading_1">Your Cart</h1>
      <div className="products">
        {data.cartItems.length === 0 ? (
          <h1 className="h-[300px] w-full flex items-center justify-center text-5xl">
            No items in Your Cart.
          </h1>
        ) : (
          data.cartItems.map((product) => {
            console.log(product);
            return <Product key={product.id} product={product} />;
          })
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
