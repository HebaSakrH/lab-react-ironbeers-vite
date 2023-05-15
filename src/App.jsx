import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import BeersList from "./pages/BeerList";
import BeerDetails from "./pages/BeerDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
     
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/beers" element={ <BeersList /> } />
      <Route path="/details/:id" element={ <BeerDetails /> } />
    </Routes> 
     
    </div>
  );
}

export default App;
