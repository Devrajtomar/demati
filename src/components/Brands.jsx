import { data } from "../states/states";
import "../styles/brands.css";

const Brands = () => {
  const Brands = data.brands;
  if (Brands.length === 0) {
    return (
      <div className="brands">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <div
            key={i}
            className="loading rounded-full min-w-[96px] md:min-w-[128px] h-24 md:h-32"
          />
        ))}
      </div>
    );
  }
  return (
    <div className="brands">
      {Brands.map((brand) => (
        <div key={brand.id}>
          <a href={`/brand/${brand}`} className="brand">
            <img src={brand} alt={brand} className="object-contain" />
          </a>
          <a href={`/brand/${brand}`} className="heading_2">
            {brand.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Brands;
