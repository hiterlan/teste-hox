import { useAppDispatch } from "../../../../store/hooks";
import { deleteProduct, getProducts } from "../../../../store/api";
import {
  removeProduct,
  setProductsPerPage,
} from "../../../../store/productsSlice";
interface DeleteButtonProps {
  id: number;
}

export function DeleteButton(props: DeleteButtonProps) {
  const dispatch = useAppDispatch();

  const deleteFunc = (data: any) => {
    dispatch(removeProduct({ id: props.id }));
    dispatch(setProductsPerPage());
    dispatch(deleteProduct(data));
  };
  return (
    <button
      onDoubleClick={() => deleteFunc(props.id)}
      className="w-6 h-6 bg-contain bg-no-repeat bg-[url('./images-icons/trash-can.png')]   bg-center 
  focus:bg-[url('./images-icons/trash-focus.png')] align-bottom outline-none
  "
    />
  );
}
