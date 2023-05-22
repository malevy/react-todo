import React from "react";
import ItemViewSelector from "./ItemViewSelector";
import { useItemContext } from "@/contexts/ItemContext";

const ItemList = function (props) {
  const { itemsState } = useItemContext();

  return (
    <section id="itemList">
      {itemsState.map((item) => {
        return <ItemViewSelector item={item} key={item.id} />;
      })}
    </section>
  );
};

export default ItemList;
