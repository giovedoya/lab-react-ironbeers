import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Home from "./views/Home";
import Beers from "./views/Beers";
import RandomBeers from './views/RandomBeers'
import NewBeers from './views/NewBeers'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/random-beer" element={<RandomBeers />} />
        <Route path="/new-beer" element={<NewBeers />} />

      </Routes>
    </div>
  );
}

export default App;
