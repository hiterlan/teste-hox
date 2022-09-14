import { useAppDispatch } from "../../../../store/hooks";
import { deleteProduct } from "../../../../store/api";

interface DeleteButtonProps {
  id: number;
}

export function DeleteButton(props: DeleteButtonProps) {
  const dispatch = useAppDispatch();

  const deleteFunc = (data: any) => {
    dispatch(deleteProduct(data));
  };
  return (
    <button
      onDoubleClick={() => deleteFunc(props.id)}
      className="w-6 h-6 bg-contain bg-no-repeat bg-[url('src/assets/trash-can.png')]   bg-center 
  focus:bg-[url('src/assets/trash-focus.png')] align-bottom outline-none
  "
    />
  );
}
