import { Card } from "./cards/Card";
import { useEffect, useRef } from "react";
import { productsPerPage, status } from "../../store/productsSlice";
import { setCards } from "../../store/api";
import { useAppDispatch } from "../../store/hooks";
import { useSelector } from "react-redux";
import autoAnimate from "@formkit/auto-animate";

export function ListProducts() {
  const cardProducts = useSelector(productsPerPage);
  const statusChange = useSelector(status);

  const parent = useRef(null);

  useEffect(() => {
    parent.current &&
      autoAnimate(parent.current, { easing: "ease-in", duration: 200 });
  }, [parent]);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setCards());
  }, [statusChange]);

  return (
    <div ref={parent}>
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
    </div>
  );
}
export default ListProducts;
