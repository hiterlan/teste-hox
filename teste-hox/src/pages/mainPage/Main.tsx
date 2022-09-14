import { useSelector } from "react-redux";
import { CreateProduct } from "./CreateProduct";
import { createIsTrue } from "../../store/pageSlice";
import { SearchNavbar } from "./navbar/SearchNavbar";
import { ListProducts } from "./ListProducts";

export function Main() {
  const pageCreate = useSelector(createIsTrue);

  return (
    <div className="lg:w-4/5 w-full  flex items-center justify-center flex-col mt-10 font-main mx-auto -z-10">
      <SearchNavbar />
      <div className="p-8 bg-white drop-shadow-md font-main w-full h-96 scrollbar scrollbar-thumb-red-400 scrollbar-rounded-md scrollbar-track-gray-100">
        {pageCreate ? <CreateProduct /> : <ListProducts />}
      </div>
    </div>
  );
}

export default Main;
