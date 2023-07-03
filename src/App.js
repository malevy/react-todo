import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tasks from "./pages/Tasks.js";
import About from "./pages/About.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
