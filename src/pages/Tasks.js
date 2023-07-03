import React from "react";
import { Link } from "react-router-dom";

import { ItemsProvider } from "../contexts/ItemContext.js";
import ItemList from "../components/ItemList.js";
import ItemAdder from "../components/ItemAdder";

function Tasks() {
  return (
    <div className="App">
      <header>
        <Link to="/about">About</Link>
      </header>
      <ItemsProvider>
        <ItemAdder />
        <ItemList />
      </ItemsProvider>
    </div>
  );
}

export default Tasks;
