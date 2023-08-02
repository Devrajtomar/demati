import { useEffect } from "react";
import { data, navbar, pages } from "./states";
import { useSnapshot } from "valtio";

const FetchData = () => {
  useSnapshot(data);
  const setProducts = (data_) => {
    data.products = [...data_.products];
  };
  const setCategories = (data_) => {
    data.categories = [...data_];
  };
  const setBrands = (data_) => {
    data.brands = data_;
  };
  useEffect(() => {
    try {
      const fetch_ = async () => {
        await fetch("https://dummyjson.com/products/categories")
          .then((res) => res.json())
          .then(setCategories);
      };
      fetch_();
    } catch (err) {
      console.log(err);
    }
  }, []);
  useEffect(() => {
    try {
      const fetch_ = async () => {
        await fetch(
          `https://dummyjson.com/products${
            navbar.selectedCategory === "All"
              ? "?skip=30"
              : `/category/${navbar.selectedCategory}`
          }`,
        )
          .then((res) => res.json())
          .then(setProducts);
      };
      fetch_();
    } catch (err) {
      console.log(err);
    }
  }, [navbar.selectedCategory]);
};
export default FetchData;
