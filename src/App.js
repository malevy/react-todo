import "./App.css";
import { ItemsProvider } from "./contexts/ItemContext.js";
import ItemList from "./components/ItemList.js";
import ItemAdder from "./components/ItemAdder";

function App() {
  return (
    <div className="App">
      <ItemsProvider>
        <ItemAdder />
        <ItemList />
      </ItemsProvider>
    </div>
  );
}

export default App;
