import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProduct } from "../../store/api";
import { schema } from "../../utils/schema";
import { useAppDispatch } from "../../store/hooks";

export function CreateProduct() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const submitForm = (data: any) => {
    dispatch(createProduct(data));
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="my-12 flex h-full w-full forms flex-col sm:flex-row  ">
        <div className="flex flex-col w-1/2 mt-3">
          <input
            className="ml-4"
            type="text"
            placeholder="Nome"
            {...register("name")}
          />
          <small className="ml-4 mb-3 text-red-600">
            {errors.name && errors.name.message?.toString()}
          </small>

          <input
            className="ml-4 mt-3"
            type="text"
            placeholder="Preço"
            {...register("price", {
              required: "Preço Não preenchido",
              valueAsNumber: true,
            })}
          />
          <small className="ml-4 text-red-600">
            {errors.price && errors.price.message?.toString()}
          </small>
        </div>
        <div className=" flex-col">
          <label className="w-80 h-6 mt-4 mx-auto flex justify-between">
            <span>Data de Fabricação:</span>
            <input
              className=" focus:outline-none focus:ring-2 focus:ring-[#F96C62] self-end rounded-md pl-2"
              type="date"
              {...register("dt_fabric")}
            />
          </label>
          <small className="mb-6 text-red-600">
            {errors.dt_fabric && errors.dt_fabric.message?.toString()}
          </small>

          <label className="w-80 h-6 mt-3 mx-auto flex justify-between">
            <span>Data de Validade:</span>
            <input
              className=" focus:outline-none focus:ring-2 focus:ring-[#F96C62] self-end rounded-md pl-2"
              type="date"
              {...register("dt_validity")}
            />
          </label>
          <small className="mb-6 text-red-600">
            {errors.dt_validity && errors.dt_validity.message?.toString()}
          </small>
        </div>
      </div>
      <footer className=" mt-8 flex justify-between ">
        <span className="mx-2 p-2 rounded-md text-black">
          OBS: Só preencha a data de validade caso seja perecível!
        </span>

        <button
          type="submit"
          className="bg-[#F96C62] mx-2 py-2 px-4 rounded-md focus:ring-2 focus:ring-offset-2 outline-none focus:ring-[#F13429] text-white"
        >
          Salvar
        </button>
      </footer>
    </form>
  );
}
