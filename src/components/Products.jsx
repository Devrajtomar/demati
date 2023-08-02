import "../styles/products.css";
import { Product } from ".";
import { data, functions } from "../states/states";

const Products = ({ num }) => {
  const products = data.products;

  if (products.length === 0) {
    return (
      <div className="products">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <div key={i}>
            <div className="loading min-w-[300px] min-h-[300px] rounded-md shadow-md shadow-black" />
          </div>
        ))}
      </div>
    );
  }
  return (
    <div>
      <div className="products">
        <div
          className="absolute -top-[40px] right-2 text-blue-500 font-extralight cursor-pointer"
          onClick={() => functions.setTab("Products")}
        >
          more
        </div>
        <div className="products">
          {products.map((product, index) => (
            <div key={product.id}>
              {index < num && <Product index={index} product={product} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
