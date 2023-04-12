import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProducts } from "./redux/actions/productsActions";
import Header from "./components/header/Header";
import List from "./components/list/List";
import ItemDetail from "./components/item-detail/ItemDetail";

function App() {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("http://localhost:3031/products")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/products/:productId" element={<ItemDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
