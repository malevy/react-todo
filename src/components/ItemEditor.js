import React from "react";
import styles from "../styles/ItemEditor.module.css";

function ItemEditor({ item, onSave, onCancel }) {
  const [itemState, setItemState] = React.useState(item);
  const [prevItem, setPrevItem] = React.useState(item);

  // update the component's state when the prop changed
  if (item !== prevItem) {
    console.log("detected change to item");
    setItemState(item);
    setPrevItem(item);
  }

  function applyChange(property, newValue) {
    const newItem = { ...itemState, [property]: newValue };
    setItemState(newItem);
  }

  const save = () => onSave(itemState);
  const cancel = () => onCancel();

  return (
    <article className={styles.ItemEditor}>
      <label>
        Task:
        <input
          type="text"
          value={itemState.task}
          onChange={(e) => applyChange("task", e.target.value)}
        />
      </label>
      <label>
        Important:
        <input
          type="checkbox"
          checked={itemState.important}
          onChange={(e) => applyChange("important", e.target.checked)}
        />
      </label>
      <label>
        Completed:
        <input
          type="checkbox"
          checked={itemState.completed}
          onChange={(e) => applyChange("completed", e.target.checked)}
        />
      </label>
      <i className="fas fa-save fa-lg save-button" onClick={save}></i>
      <i
        className="fas fa-window-close fa-lg cancel-button"
        onClick={cancel}
      ></i>
    </article>
  );
}

export default ItemEditor;
