import { Routes, Route } from "react-router-dom";
import { Home, About, Store } from "./pages";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/store" element={<Store />} />
    </Routes>
  );
}

export default Router;
