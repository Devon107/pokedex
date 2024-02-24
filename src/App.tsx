import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Pokemons from "./pages/Pokemons";
import Items from "./pages/Items";
import Pokemon from "./pages/Pokemon";

function App() {
  return (
    <Router>
      <div className="app">
      <Routes>
        <Route path="/pokemons/:name" element={<Pokemon />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/items" element={<Items />} />
        <Route path="/" element={<Pokemons />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
