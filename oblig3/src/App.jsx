import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import MoviePage from "./components/moviepage";
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:movie" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;