import { CreateButton } from "./Buttons/CreateButton";
import { ListButton } from "./Buttons/ListButton";
import { SearchSettingsButton } from "./Buttons/SettingsSearchButton";
import {
  searchProduct,
  setProductsPerPage,
} from "../../../store/productsSlice";
import { useDispatch } from "react-redux";
import PaginationSelect from "./PaginationSelect";
import { useState } from "react";

export function SearchNavbar() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleSearch = (
    e: React.FormEvent<HTMLFormElement>,
    search: string
  ) => {
    e.preventDefault();
    dispatch(searchProduct(search));
  };

  return (
    <div className="w-full bg-[#FFE2E0] h-2/6 py-12 flex flex-col  navbar font-main items-center drop-shadow-md sm:flex-row justify-around">
      <div className="flex justify-start   ">
        <form onSubmit={(e) => handleSearch(e, search)}>
          <input
            type="text"
            autoFocus
            onChange={(e) => setSearch(e.target.value)}
            className="border-0 h-8 focus:outline-none rounded-md px-2 drop-shadow-md focus:ring-1 focus:ring-[#D13429] focus:border-[#D13429] mx-2"
            placeholder="Nome do Produto"
          />
        </form>
        <PaginationSelect />
      </div>
      <div className="flex justify-end ">
        <SearchSettingsButton />
        <ListButton />
        <CreateButton />
      </div>
    </div>
  );
}
