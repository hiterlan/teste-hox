import { useDispatch, useSelector } from "react-redux";
import { toFilter } from "../../../../store/pageSlice";
import { SlideOver } from "../SlideOver/FilterSlideOver";

export function SearchSettingsButton() {
  const dispatch = useDispatch();

  const setFiltering = () => {
    dispatch(toFilter());
  };
  return (
    <>
      <button
        onClick={setFiltering}
        className=" bg-[#F96C62] bg-[url('./images-icons/settings.png')] bg-[length:2em_2em] bg-no-repeat bg-center focus:ring-2 focus:ring-offset-2 outline-none focus:ring-[#F13429] h-12 w-12 rounded-md block mt-5 mx-2  sm:mt-0"
      />
      <SlideOver />
    </>
  );
}

export default SearchSettingsButton;
