import { useDispatch } from "react-redux";
import { Card } from "./Cards/Card";
import { useEffect } from "react";
import { productsPerPage } from "../../store/productsSlice";
import { getProducts } from "../../store/api";
import { useAppDispatch } from "../../store/hooks";
import { useSelector } from "react-redux";

export function ListProducts() {
  const cardProducts = useSelector(productsPerPage);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      {cardProducts.map((card) => {
        return (
          <Card
            key={card.id}
            id={card.id}
            name={card.name}
            price={card.price}
            dt_fabric={card.dt_fabric}
            dt_validity={card.dt_validity}
            created_at={card.created_at}
            updated_at={card.updated_at}
          />
        );
      })}
    </>
  );
}
export default ListProducts;