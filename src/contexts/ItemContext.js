import React from "react";
import items from "../data/todos.js";

const ItemContext = React.createContext();

export function ItemsProvider({ children }) {
  const [itemsState, setItemsState] = React.useState(items);

  function saveItem(newItem) {
    const newCollection = itemsState.map((item) =>
      item.id === newItem.id ? newItem : item
    );
    setItemsState(newCollection);
  }

  function removeItem(victim) {
    const newCollection = itemsState.filter((item) => item.id !== victim.id);
    setItemsState(newCollection);
  }

  function addItem(newItem) {
    const nextId =
      itemsState.reduce((max, item) => (item.id > max ? item.id : max), -1) + 1;
    newItem.id = nextId;
    const newCollection = [...itemsState, newItem];
    setItemsState(newCollection);
  }

  function createItem() {
    return {
      id: 0,
      task: "",
      important: false,
      completed: false,
    };
  }

  const contextValue = {
    itemsState,
    saveItem,
    removeItem,
    addItem,
    createItem,
  };

  return (
    <ItemContext.Provider value={contextValue}>{children}</ItemContext.Provider>
  );
}

export function useItemContext() {
  const context = React.useContext(ItemContext);
  if (!context) {
    throw new Error(
      "useItemContext must be used within the context of an ItemsProvider"
    );
  }
  return context;
}
