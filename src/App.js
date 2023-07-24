import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ContentSelector from "./Content/ContentSelector";
import Home from "./Pages/Home";
import Agents from "./Pages/Agents";
import Weapons from "./Pages/Weapons";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ContentSelector />
        <Routes>
          <Route index element={<Home />} />
          <Route path="agents" element={<Agents />} />
          <Route path="weapons" element={<Weapons />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
