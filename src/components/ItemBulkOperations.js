import React from "react";
import { useItemContext } from "../contexts/ItemContext.js";

function ItemBulkOperations() {
  const { markAllCompleted, removeAll } = useItemContext();

  return (
    <div>
      <button onClick={markAllCompleted}>Mark all complete</button>
      <button onClick={removeAll}>remove all</button>
    </div>
  );
}

export default ItemBulkOperations;
