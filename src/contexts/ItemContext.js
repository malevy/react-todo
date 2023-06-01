import React, { useEffect } from "react";
import todoGateway from "../gateways/TodoApiGateway.js";

const ItemContext = React.createContext();

export function ItemsProvider({ children }) {
  const [itemsState, setItemsState] = React.useState([]);

  useEffect(() => {
    _refresh();
  }, []);

  async function _refresh() {
    const items = await todoGateway.getAll();
    setItemsState(items);
  }

  async function saveItem(newItem) {
    await todoGateway.save(newItem);
    _refresh();
  }

  async function removeItem(victim) {
    await todoGateway.remove(victim);
    _refresh();
  }

  async function addItem(newItem) {
    await todoGateway.saveNew(newItem);
    _refresh();
  }

  /**
   * factory method to create a blank item
   * @returns
   */
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
