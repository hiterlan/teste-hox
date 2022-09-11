export interface SelectorPageType {
  page: { list: boolean; create: boolean; filter: boolean };
}

export interface SelectorProductsType {
  products: {
    firstSmaller: boolean;
    products: Product[];
    state: string;
    productsPerPage: Product[];
    status: string;
  };
}

export interface SelectorPaginationType {
  pagination: {
    orderBy: string;
  };
}

export interface Product {
  id: number;
  name: string;
  price: number;
  dt_fabric: Date;
  dt_validity: Date;
  created_at: Date;
  updated_at: Date;
}
export interface StateProducts {
  products: Product[];
  status: string;
}

export type OrderProductsFunction = (
  product: Product,
  product_: Product
) => number;

export type OrderProductsOption =
  | "byName"
  | "byDateFabric"
  | "byDateValidity"
  | "byPrice";

export interface ProductSliceState {
  products: Product[];
  firstSmaller: boolean;
  order: OrderProductsFunction;
  productsPerPage: Product[];
  pagenation: number;
  isSearching: boolean;
  status: string;
}

export interface ActionCreate {
  payload: {};
}

export interface ProductAttributes {
  name: string;
  price: number;
  dt_fabric: Date;
  dt_validity: Date;
}

export interface MyKnownError {
  message: string;
}

export interface MyData {
  id: number;
  name: string;
  dt_fabric: Date;
  dt_validity: Date;
  price: number;
  created_at: Date;
  updated_at: Date;
}

export interface MyID {
  id: number;
}
