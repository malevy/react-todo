import React, { useContext } from "react";
import items from "@/data/todos.js";

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
    const newCollection = itemsState.filter((item) => item.id != victim.id);
    setItemsState(newCollection);
  }

  function addItem(newItem) {
    const newCollection = [...itemsState, newItem];
    setItemsState(newCollection);
  }

  const contextValue = { itemsState, saveItem, removeItem, addItem };

  return (
    <ItemContext.Provider value={contextValue}>{children}</ItemContext.Provider>
  );
}

export function useItemContext() {
  const context = React.useContext(ItemContext);
  if (!context) {
    throw new Error(
      "useItemContext must be used within the context of an ItemContext"
    );
  }
  return context;
}
