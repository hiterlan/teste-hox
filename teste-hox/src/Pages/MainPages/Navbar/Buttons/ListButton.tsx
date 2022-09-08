import { useDispatch } from "react-redux";
import { toList } from "../../../../store/pageSlice";

export function ListButton() {
  const dispatch = useDispatch();

  const setListPage = () => {
    dispatch(toList());
  };
  return (
    <>
      <button
        onClick={setListPage}
        className=" bg-[#F96C62] bg-[url('./images-icons/list.png')] bg-[length:2em_2em] bg-no-repeat bg-center focus:ring-2 focus:ring-offset-2 outline-none focus:ring-[#F13429] h-12 w-12 rounded-md block mt-5 mx-2  sm:mt-0"
      ></button>
    </>
  );
}

export default ListButton;
