import React from "react";
import items from "@/data/todos.js";
import Item from "@/components/Item.js";

const ItemList = function (props) {
  const [itemsState, setItemsState] = React.useState(items);

  const onItemChanged = (newItem) => {
    const newCollection = itemsState.map((item) =>
      item.id === newItem.id ? newItem : item
    );
    setItemsState(newCollection);
  };

  return (
    <section id="itemList">
      {itemsState.map((item) => {
        return <Item item={item} onChange={onItemChanged} key={item.id} />;
      })}
    </section>
  );
};

export default ItemList;
