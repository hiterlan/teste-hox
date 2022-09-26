import { useState, useRef, useEffect } from "react";
import autoAnimate from "@formkit/auto-animate";
import { DeleteButton } from "./buttons/DeleteButton";
import { EditButton } from "./buttons/EditButton";
import { EditingDropDown } from "./EditingDropDown";

interface CardProps {
  id: number;
  name: string;
  price: number;
  dt_fabric: Date;
  dt_validity: Date;
  created_at: Date;
  updated_at: Date;
}

export function Card(props: CardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const handleIsEditing = () => setIsEditing(!isEditing);
  const parent = useRef(null);

  useEffect(() => {
    parent.current &&
      autoAnimate(parent.current, { easing: "ease-in", duration: 200 });
  }, [parent]);

  const dateFabric = new Date(props.dt_fabric);
  dateFabric.setDate(dateFabric.getDate() + 1);
  const dateFabricToRender = dateFabric.toLocaleString().substring(0, 10);

  const dateValidity = props.dt_validity
    ? new Date(props.dt_validity)
    : "----------";
  dateValidity !== "----------"
    ? dateValidity.setDate(dateValidity.getDate() + 1)
    : {};

  const dateValidityToRender = dateValidity.toLocaleString().substring(0, 10);

  return (
    <>
      <div
        ref={parent}
        className="w-100% p-8 flex flex-row sm:flex-col justify-between bg-[#FFE2E0] m-2 drop-shadow-md  hover:transition-all"
      >
        <div className="flex flex-col sm:flex-row justify-between">
          <span className="w-44 my-3 sm:my-0  center inline-block">
            {props.name}
          </span>
          <span className="w-24 my-3 sm:my-0 inline-block">
            {dateFabricToRender}
          </span>
          <span className="w-16 mx-2 center inline-block">
            {props.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <span className="w-24 my-3 sm:my-0  inline-bloc">
            {dateValidityToRender}
          </span>
          <span className="w-16 my-2 sm:my-0  flex justify-between">
            <EditButton setIsEditing={handleIsEditing} />
            <DeleteButton id={props.id} />
          </span>
        </div>
        {isEditing && (
          <EditingDropDown
            setIsEditing={handleIsEditing}
            id={props.id}
            name={props.name}
            price={props.price}
            dt_fabric={props.dt_fabric}
            dt_validity={props.dt_validity}
          />
        )}
      </div>
    </>
  );
}

export default Card;
