import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ContentSelector from "./Content/ContentSelector";
import Home from "./Pages/Home";
import Agents from "./Pages/Agents";
import Bundles from "./Pages/Bundles";
import Weapons from "./Pages/Weapons";
import Skins from "./Pages/Skins";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ContentSelector />
        <Routes>
          <Route index element={<Home />} />
          <Route path="agents" element={<Agents />} />
          <Route path="bundles" element={<Bundles />} />
          <Route path="weapons" element={<Weapons />} />
          <Route path="skins" element={<Skins />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
