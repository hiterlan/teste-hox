import React, { useState } from "react";
import { useSelector } from "react-redux";
import { productsQt } from "../../../store/productsSlice";
import { useDispatch } from "react-redux";
import {
  setPagenation,
  setProductsPerPage,
} from "../../../store/productsSlice";
export function PaginationSelect() {
  const productsQtt = useSelector(productsQt);
  const [select, setSelect] = useState(productsQtt);
  const dispatch = useDispatch();

  const handleSelectPagenation = (page: number) => {
    dispatch(setPagenation(page));
    dispatch(setProductsPerPage());
  };

  const limit = 10;
  const qnt_pagination = Math.ceil(productsQtt / limit);

  return (
    <select
      onChange={(e) => handleSelectPagenation(parseInt(e.target.value))}
      className="border-0 bg-no-repeat bg-1 bg-right-midz rounded-md px-2 pr-4 w-16 py-0 drop-shadow-md appearance-none h-8 focus:ring-1 focus:ring-[#D13429] focus:border-[#D13429] focus:outline-none ml-2 sm:w-16 "
    >
      {Array.from({ length: qnt_pagination })
        .map((_, index) => index + 1)
        .map((page) => {
          return (
            <option key={page} value={page}>
              {page}
            </option>
          );
        })}
    </select>
  );
}

export default PaginationSelect;
