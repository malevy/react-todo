import React from "react";
import Item from "@/components/Item.js";
import ItemEditor from "@/components/ItemEditor.js";

function editButton({ props }) {
  return;
}

function ItemViewSelector({ item, onChange }) {
  const [isEditing, setIsEditing] = React.useState(false);

  function save(item) {
    onChange(item);
    setIsEditing(false);
  }

  function cancel() {
    setIsEditing(false);
  }

  if (isEditing) {
    return <ItemEditor item={item} onSave={save} onCancel={cancel} />;
  } else {
    console.log("rendering item viewer");
    return (
      <div>
        <item item={item} onChange={save} />
        <i className="fas fa-pen fa-lg" onClick={() => setIsEditing(true)} />
      </div>
    );
  }
}

export default ItemViewSelector;
