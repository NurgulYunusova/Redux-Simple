import { Link, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Favourites from "./pages/Favourites";

function App() {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/favourites" element={<Favourites />}></Route>
      </Routes>
    </>
  );
}

export default App;
