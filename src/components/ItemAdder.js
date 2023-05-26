import React from "react";
import { useItemContext } from "../contexts/ItemContext.js";
import ItemEditor from "./ItemEditor.js";

function ItemAdder() {
  const { addItem, createItem } = useItemContext();
  const [itemState, setItemState] = React.useState(createItem());

  const onCancel = () => {
    setItemState(createItem());
  };

  const onSave = (newItem) => {
    addItem(newItem);
    setItemState(createItem());
  };

  return (
    <section>
      <ItemEditor item={itemState} onSave={onSave} onCancel={onCancel} />
    </section>
  );
}

export default ItemAdder;
