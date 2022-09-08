import * as z from "zod";

export const schema = z
  .object({
    name: z
      .string({
        required_error: "Nome não informado",
        invalid_type_error: "Nome inserido inválido",
      })
      .min(3, { message: "Nome muito Pequeno" })
      .max(35, { message: "Nome muito grande" }),
    price: z
      .number({
        required_error: "Preço não informado",
        invalid_type_error: "Preço informado inválido",
      })
      .positive({ message: "Preço não deve ser negativo" })
      .max(999999, { message: "Preço muito alto" }),
    dt_fabric: z.preprocess(
      (arg) => {
        if (typeof arg == "string" || arg instanceof Date) return new Date(arg);
      },

      z.date({
        required_error: "Data não informada",
        invalid_type_error: "Data inválida",
      })
    ),
    dt_validity: z.preprocess(
      (arg) => {
        if ((typeof arg == "string" && arg != "") || arg instanceof Date) {
          return new Date(arg);
        } else {
          return null;
        }
      },

      z
        .date({
          invalid_type_error: "Data inválida",
        })

        .nullable()
    ),
  })
  .refine(
    (data) =>
      data.dt_validity
        ? data.dt_validity >= data.dt_fabric
        : data.dt_fabric != null,
    {
      message: "O Produto está vencido antes de ser produzido?",
      path: ["dt_validity"], // path of error
    }
  );
