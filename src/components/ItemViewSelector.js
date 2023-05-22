import React from "react";
import Item from "@/components/Item.js";
import ItemEditor from "@/components/ItemEditor.js";
import { useItemContext } from "@/contexts/ItemContext";

function ItemViewSelector({ item }) {
  const [isEditing, setIsEditing] = React.useState(false);

  const { saveItem, removeItem } = useItemContext();

  function save(item) {
    saveItem(item);
    setIsEditing(false);
  }

  function cancel() {
    setIsEditing(false);
  }

  if (isEditing) {
    return <ItemEditor item={item} onSave={save} onCancel={cancel} />;
  } else {
    return (
      <div>
        <Item item={item} />
        <i className="fas fa-pen fa-lg" onClick={() => setIsEditing(true)} />
        <i className="fas fa-trash fa-lg" onClick={() => removeItem(item)} />
      </div>
    );
  }
}

export default ItemViewSelector;
