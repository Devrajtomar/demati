import React, { useCallback } from "react";
import { navbar } from "../states/states";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Product } from "../components";
const SearchResults = () => {
  const [SearchResults, setSearchResults] = useState([]);
  const query = navbar.searchQuery;
  const getData = useCallback(async () => {
    const res = await axios.get(
      `https://dummyjson.com/products/search?q=${query}`,
    );
    const data = await res.data;
    setSearchResults(data);
    console.log(SearchResults);
  }, [query, SearchResults]);
  useEffect(() => {
    getData();
  }, [query]);
  if (SearchResults.length === 0) {
    return (
      <div className="products">
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div key={i} className="loading product" />
        ))}
      </div>
    );
  }
  return (
    <div className="w-full h-full">
      {SearchResults.length === 0 && <div>No Results</div>}
      {SearchResults.length !== 0 && (
        <div className="products">
          {SearchResults.products.map((product) => (
            <Product product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
