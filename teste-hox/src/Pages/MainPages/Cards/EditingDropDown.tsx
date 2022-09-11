import { updateProduct, getProducts } from "../../../store/api";
import { useAppDispatch } from "../../../store/hooks";
import { schema } from "../../../utils/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface EditProps {
  id: number;
  name: string;
  price: number;
  dt_fabric: Date;
  dt_validity: Date;
}

export function EditingDropDown(props: EditProps) {
  const dispatch = useAppDispatch();
  const dateFabric = props.dt_fabric.toString().substring(0, 10);
  const dateValidity = props.dt_validity?.toString().substring(0, 10);

  const productValue = {
    name: props.name,
    price: props.price,
    dt_fabric: dateFabric,
    dt_validity: dateValidity,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema), defaultValues: productValue });

  const submitForm = (data: any) => {
    data["id"] = props.id;
    dispatch(updateProduct(data));
  };

  return (
    <div className="flex-col flex justify-between card mt-0 sm:mt-8 sm:flex-row hover:transition-all">
      <input
        className="w-44 my-2 sm:my-1"
        type="text"
        placeholder="Nome"
        {...register("name")}
      />
      <input
        className="w-28 my-2 sm:my-1"
        type="date"
        {...register("dt_fabric")}
      />
      <input
        className="w-16 my-2 sm:my-1"
        type="text"
        placeholder="Preço"
        {...register("price", {
          required: "Preço Não preenchido",
          valueAsNumber: true,
        })}
      />
      <input
        className="w-28 my-2 sm:my-1"
        type="date"
        {...register("dt_validity")}
      />
      <button
        onClick={handleSubmit(submitForm)}
        className="bg-[#d13429] text-white p-2 rounded-md focus:ring-2 focus:ring-offset-2 outline-none focus:ring-[#F13429]"
      >
        Salvar
      </button>
    </div>
  );
}
