import "./App.css";
import { ItemsProvider } from "./contexts/ItemContext.js";
import ItemList from "./components/ItemList.js";

function App() {
  return (
    <div className="App">
      <ItemsProvider>
        <ItemList />
      </ItemsProvider>
    </div>
  );
}

export default App;
