interface Product {
  name: string;
  dt_fabric: string;
  dt_validity?: string;
  price: number;
}

export const initialValue: Array<Product> = [
  {
    name: "Arroz Chinês",
    dt_fabric: "2022-08-16T00:00:00.000Z",
    dt_validity: "2022-11-16T00:00:00.000Z",
    price: 4.5,
  },
  {
    name: "Arroz Vermelho",
    dt_fabric: "2022-08-16T00:00:00.000Z",
    dt_validity: "2022-10-16T00:00:00.000Z",
    price: 3.75,
  },
  {
    name: "Arroz Branco Seridó",
    dt_fabric: "2022-08-16T00:00:00.000Z",
    dt_validity: "2022-10-20T00:00:00.000Z",
    price: 3.9,
  },
  {
    name: "Arroz Tropeiro",
    dt_fabric: "2022-08-20T00:00:00.000Z",
    dt_validity: "2022-08-30T00:00:00.000Z",
    price: 25.25,
  },
  {
    name: "Arroz Carioca",
    dt_fabric: "2022-03-12T00:00:00.000Z",
    dt_validity: "2022-08-16T00:00:00.000Z",
    price: 32,
  },
  {
    name: "Arroz Fradinho",
    dt_fabric: "2022-08-16T00:00:00.000Z",
    dt_validity: "2022-10-16T00:00:00.000Z",
    price: 13.75,
  },
  {
    name: "Feijão Branco",
    dt_fabric: "2022-08-16T00:00:00.000Z",
    dt_validity: "2022-08-20T00:00:00.000Z",
    price: 10.25,
  },
  {
    name: "Feijão Vermelho",
    dt_fabric: "2021-08-16T00:00:00.000Z",
    dt_validity: "2021-08-30T00:00:00.000Z",
    price: 21.45,
  },
  {
    name: "Feijão Mágico",
    dt_fabric: "2022-08-16T00:00:00.000Z",
    price: 2000.0,
  },
  {
    name: "Feijão do João",
    dt_fabric: "2022-08-16T00:00:00.000Z",
    price: 20000.0,
  },
  {
    name: "João do Feijão",
    dt_fabric: "2003-08-10T00:00:00.000Z",
    dt_validity: "2040-08-16T00:00:00.000Z",
    price: 20.0,
  },
  {
    name: "Bolacha Passa-Tempo",
    dt_fabric: "2022-08-16T00:00:00.000Z",
    dt_validity: "2022-08-16T00:00:00.000Z",
    price: 2.5,
  },
  {
    name: "Café Itans",
    dt_fabric: "2022-08-16T00:00:00.000Z",
    price: 5.0,
  },
  {
    name: "Café Hiterlans",
    dt_fabric: "2022-08-16T00:00:00.000Z",
    price: 99.99,
  },
  {
    name: "Farinha pra Farofa",
    dt_fabric: "2022-08-16T00:00:00.000Z",
    dt_validity: "2022-08-16T00:00:00.000Z",
    price: 0.5,
  },
  {
    name: "Extrato de Tomate",
    dt_fabric: "2022-08-16T00:00:00.000Z",
    price: 4.5,
  },
  {
    name: "Leite de Alpha",
    dt_fabric: "2022-08-16T00:00:00.000Z",
    price: 50.0,
  },
  {
    name: "Leite de Moça",
    dt_fabric: "2022-08-16T00:00:00.000Z",
    dt_validity: "2022-11-16T00:00:00.000Z",
    price: 5.0,
  },
  {
    name: "Atum Enlatado",
    dt_fabric: "2021-10-16T00:00:00.000Z",
    price: 3.5,
  },
  {
    name: "Sardinha Enlatada",
    dt_fabric: "2022-08-16T00:00:00.000Z",
    price: 4.75,
  },
  {
    name: "Óleo Vegetal",
    dt_fabric: "2022-08-16T00:00:00.000Z",
    dt_validity: "2022-12-16T00:00:00.000Z",
    price: 3.5,
  },
  {
    name: "Óleo de babosa",
    dt_fabric: "2022-08-16T00:00:00.000Z",
    dt_validity: "2022-08-16T00:00:00.000Z",
    price: 32.5,
  },
  {
    name: "Maionese HeaveMan",
    dt_fabric: "2022-08-16T00:00:00.000Z",
    dt_validity: "2022-12-24T00:00:00.000Z",
    price: 13.5,
  },
  {
    name: "Tempero de Miojo",
    dt_fabric: "2022-08-15T00:00:00.000Z",
    dt_validity: "2022-08-30T00:00:00.000Z",
    price: 1.0,
  },
  {
    name: "Tempero de Pipoca",
    dt_fabric: "2022-08-16T00:00:00.000Z",
    dt_validity: "2022-08-17T00:00:00.000Z",
    price: 4.5,
  },
  {
    name: "Fararofa",
    dt_fabric: "2022-08-20T00:00:00.000Z",
    dt_validity: "2022-08-24T00:00:00.000Z",
    price: 2.0,
  },
  {
    name: "Chá de Picão",
    dt_fabric: "2022-08-20T00:00:00.000Z",
    dt_validity: "2022-08-25T00:00:00.000Z",
    price: 3.75,
  },
  {
    name: "Chá de erva cidreira",
    dt_fabric: "2022-08-20T00:00:00.000Z",
    dt_validity: "2022-12-20T00:00:00.000Z",
    price: 2.8,
  },
  {
    name: "Chá de erva",
    dt_fabric: "2022-08-20T00:00:00.000Z",
    dt_validity: "2022-08-23T00:00:00.000Z",
    price: 3.5,
  },
  {
    name: "Macarrão Especial",
    dt_fabric: "2022-06-20T00:00:00.000Z",
    dt_validity: "2022-08-20T00:00:00.000Z",
    price: 4.75,
  },
  {
    name: "Miojo sem tempero",
    dt_fabric: "2022-07-26T00:00:00.000Z",
    dt_validity: "2022-09-20T00:00:00.000Z",
    price: 5.25,
  },
  {
    name: "Azeitolas",
    dt_fabric: "2022-08-20T00:00:00.000Z",
    price: 2.5,
  },
];
