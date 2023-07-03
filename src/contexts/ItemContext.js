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
   * making a API call for each todo item is less than optimal.
   * it would be better if the API has an operation to handle this
   * server side.
   * TODO: investigate if JSONAPI can do this
   */
  async function markAllCompleted() {
    const apiResults = itemsState
      .map((item) => {
        item.completed = true;
        return item;
      })
      .map(todoGateway.save);

    // really should do something for errors. make that tomorrow's problem
    await Promise.all(apiResults);
    _refresh();
  }

  async function removeAll() {
    const apiResults = itemsState.map(todoGateway.remove);
    await Promise.all(apiResults);
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
    markAllCompleted,
    removeAll,
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
