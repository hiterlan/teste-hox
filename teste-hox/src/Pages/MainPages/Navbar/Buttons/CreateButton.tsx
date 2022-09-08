import { useDispatch } from "react-redux";
import { toCreate } from "../../../../store/pageSlice";

export function CreateButton() {
  const dispatch = useDispatch();

  const setCreatePage = () => {
    dispatch(toCreate());
  };
  return (
    <button
      onClick={setCreatePage}
      className="mt-5 bg-[#F96C62] bg-[url('./images-icons/add-button.png')] bg-[length:2em_2em] bg-no-repeat bg-center focus:ring-2 focus:ring-offset-2 outline-none focus:ring-[#F13429] h-12 w-12 rounded-md block mx-2  sm:mt-0"
    />
  );
}

export default CreateButton;
