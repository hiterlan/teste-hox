import { Product } from "../store/types";

export function checkPerishable(product: Product) {
  if (product.dt_validity) {
    return product;
  }
}

export type OrderProductsFunction = (
  product: Product,
  product_: Product
) => number;

export const OrderProducts = {
  byName(product: Product, product_: Product) {
    return product.name.localeCompare(product_.name);
  },

  byPrice(product: Product, product_: Product) {
    return product.price - product_.price;
  },

  byDateFabric(product: Product, product_: Product) {
    if (product.dt_fabric < product_.dt_fabric) return -1;
    if (product.dt_fabric > product_.dt_fabric) return 1;
    return 0;
  },

  byDateValidity(product: Product, product_: Product) {
    if (!product.dt_validity) return -1;
    if (!product_.dt_validity) return 1;
    if (product.dt_validity < product_.dt_validity) return -1;
    if (product.dt_validity > product_.dt_validity) return 1;
    return 0;
  },
};

export const OrderProductsDesc = {
  byName(product: Product, product_: Product) {
    return -product.name.localeCompare(product_.name);
  },

  byPrice(product: Product, product_: Product) {
    return product_.price - product.price;
  },

  byDateFabric(product: Product, product_: Product) {
    if (product.dt_fabric < product_.dt_fabric) return 1;
    if (product.dt_fabric > product_.dt_fabric) return -1;
    return 0;
  },

  byDateValidity(product: Product, product_: Product) {
    if (!product.dt_validity) return 1;
    if (!product_.dt_validity) return -1;
    if (product.dt_validity < product_.dt_validity) return 1;
    if (product.dt_validity > product_.dt_validity) return -1;
    return 0;
  },
};
