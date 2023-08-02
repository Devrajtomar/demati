import React, { useState } from "react";
import { Categories, Products } from "../components";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useSnapshot } from "valtio";
import { pages } from "../states/states";

const MoreProducts = () => {
  useSnapshot(pages);
  const page = pages.page;
  const setPage = (num) => {
    if (pages.page >= 10) {
      return (pages.page = 1);
    }
    return (pages.page = num);
  };
  console.log(page);
  return (
    <div className="pt-10">
      <Categories containerStyle="flex py-1 text-lg overflow-x-scroll gap-2 fixed top-10 z-20 px-4 " />
      <Products num={48} />
      <div className="flex items-center mx-auto bg-slate-200 justify-center gap-3 my-5">
        {page !== 1 && (
          <div className="pageNo" onClick={() => setPage(page-1)}>
            <AiOutlineArrowLeft />
          </div>
        )}
        {page !== 1 && (
          <div className="pageNo" onClick={() => setPage(page - 1)}>
            {page - 1}
          </div>
        )}
        <div className="pageNo bg-gray-600 text-white">{page}</div>
        <div className="pageNo" onClick={() => setPage(page + 1)}>
          {page + 1}
        </div>
        <div className="pageNo" onClick={() => setPage(page + 2)}>
          {page + 2}
        </div>
        <div className="pageNo" onClick={() => setPage(page + 3)}>
          {page + 3}
        </div>
        <div className="pageNo" onClick={() =>setPage(page+1)}>
          <AiOutlineArrowRight />
        </div>
      </div>
    </div>
  );
};

export default MoreProducts;
