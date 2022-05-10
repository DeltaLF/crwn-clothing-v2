import Home from "./components/routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation.component";

const Shop = () => {
  return <h1>Shop</h1>;
};

const App = () => {
  return (
    <div className="body">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
